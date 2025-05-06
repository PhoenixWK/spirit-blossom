import SignUpForm from "@/components/auth-forms/SignUpForm";
import BackgroundWithTransitionEffect from "@/components/BackgroundWithTransitionEffect";

export default function SignUpPage() {
    return (
        <BackgroundWithTransitionEffect 
            imgLink="/spirit-blossom-irelia-ashe.jpg"
            containerClassName="relative min-h-screen"
            className="relative z-10 min-h-screen p-4 transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} flex items-center justify-center"
        >
            <SignUpForm />
        </BackgroundWithTransitionEffect>
    )
}