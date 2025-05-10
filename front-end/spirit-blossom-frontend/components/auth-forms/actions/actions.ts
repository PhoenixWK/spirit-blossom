'use server'

import { validateEmail, validatePassword, validateUsername } from "@/utils/FieldValidations";

export async function loginAction(prevState: unknown, formData: FormData) {
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    if (!email || !password) {
        return { error: "Email and password are required" };
    }

    try {
        console.log("Login attempt for:", email);
        
        // Add base URL if needed - for local testing
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({ email, password }),
        });

        console.log("Response status:", response.status);
        console.log("Response headers:", Object.fromEntries([...response.headers.entries()]));
        
        // Check content type to decide how to parse
        const contentType = response.headers.get('content-type') || '';
        console.log("Content-Type:", contentType);
        
        let data;
        const responseText = await response.text();
        console.log("Raw response:", responseText);
        
        if (contentType.includes('application/json') && responseText) {
            try {
                data = JSON.parse(responseText);
            } catch (e) {
                console.error("Failed to parse JSON:", e);
                data = { message: responseText || "Unknown response format" };
            }
        } else {
            data = { message: responseText || "No response data" };
        }
        
        console.log("Parsed data:", data);
        
        if (!response.ok) {
            // For 401 with empty response, provide a standard message
            if (response.status === 401 && (!responseText || responseText.trim() === '')) {
                return { error: "Invalid email or password" };
            }
            return { error: data.message || "Login failed: Server returned an error" };
        } 

        return { 
            success: true,
            message: data.message || "Login successful",
            userId: data.userId
        };
    } catch (error: unknown) {
        console.error("Error during login:", error);
        return { error: `Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}` };
    }
}

export async function signUpAction(prevState: unknown, formData: FormData) {
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();
    const username = formData.get('userName')?.toString();
    
    if(!validateEmail(email as string)) {
        return { error: "Invalid email", errorMessage: "Email must be a valid email address" };
    }
    if(!validateUsername(username as string)) {
        return { error: "Invalid username", errorMessage: "Username must be at least 10 characters long, contains only letters and numbers" };
    }
    if(!validatePassword(password as string)) {
        return { error: "Invalid password", errorMessage: "Password must be at least 10 characters long, contains at least one uppercase letter, one lowercase letter and one number" };
    }
    
    try {
        const response = await fetch("http://localhost:8080/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({email, hashedPassword: password, userName: username})
        });

        if(!response.ok) {
            const errorData = await response.json();
            return { error: errorData.message || "Signup failed: Server returned an error" };
        }

        const data = await response.json();

        return { success: true, message: "Signup successful", userName: data.userName};
    } catch (error: unknown) {
        console.error("Error during signup:", error);
        return { error: `Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}` };
    }

}
