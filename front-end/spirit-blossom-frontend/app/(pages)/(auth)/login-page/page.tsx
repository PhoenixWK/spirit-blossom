import LoginForm from "@/components/auth-forms/LoginForm";
import BackgroundWithTransitionEffect from "@/components/BackgroundWithTransitionEffect";


export default function LoginPage() {
    return (
        <BackgroundWithTransitionEffect 
                imgLink="/spirit-blossom-irelia-ashe.jpg"
                containerClassName="relative min-h-screen"
                className="relative z-10 min-h-screen p-4 transition-opacity duration-700 ease-in-out  flex items-center justify-center"
            >
                <LoginForm />
        </BackgroundWithTransitionEffect>
    )
}
