"use client";

import LoginForm from "@/components/auth-forms/LoginForm";
import { useState, useEffect } from "react";

export default function LoginPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="relative min-h-screen">
            <div 
                className={`fixed inset-0 z-0 bg-[url('/spirit-blossom-auth-page.jpg')] bg-cover bg-center transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
                style={{ 
                    filter: "brightness(0.5) saturate(1.2)",
                    transform: isLoaded ? 'scale(1)' : 'scale(1.05)'
                }}
            ></div>
            <div className={`relative z-10 min-h-screen p-4 transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}>
                <LoginForm />
            </div>
    </div>
    )
}
