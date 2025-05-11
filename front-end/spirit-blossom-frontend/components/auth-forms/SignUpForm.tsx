'use client'

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signUpAction } from "./actions/actions";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { createPortal } from "react-dom";

const rubikMonoOneFont = localFont({
    src: "../../public/fonts/RubikMonoOne-Regular.ttf",
    weight: "400",
    style: "normal",
});

export default function SignUpForm() {
    const [state, formAction, pending] = useActionState(signUpAction, null);
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (state?.error) {
            setShowModal(true);
        }
        
        if (state?.success) {
            setSuccess(true);
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                router.push(`/user-profile/${state.userName}`);
            }, 2000);
        }
    }, [state, router]);

    return (
        <div className="max-w-md w-full p-6 bg-[#7C3BFC]/25 rounded-lg shadow-lg border-2 border-[#7141ff]">
            <div className="flex flex-col items-center mb-6">
                <Image 
                    src="/spirit-blossom-logo.png"
                    alt="Spirit Blossom Logo" 
                    width={100} 
                    height={100} 
                    className="w-auto h-auto"
                    priority
                />
                <h1 className={`mt-4 text-5xl ${rubikMonoOneFont.className} font-bold text-white tracking-wider`}>SIGNUP</h1>
            </div>

            <form action={formAction}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg text-white mb-1">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        id="email" 
                        placeholder="Enter your email"
                        disabled={pending}
                        className="w-full p-4 border-2 border-purple-300 rounded-lg bg-transparent text-white focus:outline-none focus:border-[#7141ff]"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="userName" className="block text-lg text-white mb-1">Username</label>
                    <input 
                        type="text" 
                        name="userName"
                        id="userName" 
                        placeholder="Enter your username(at least 10 characters)"
                        disabled={pending}
                        className="w-full p-4 border-2 border-purple-300 rounded-lg bg-transparent text-white focus:outline-none focus:border-[#7141ff]"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="password" className="block text-lg text-white mb-1">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        id="password" 
                        placeholder="at least 10 characters, contains at least one uppercase letter, one lowercase letter and one number"
                        disabled={pending}
                        className="w-full p-4 border-2 border-purple-300 rounded-lg bg-transparent text-white focus:outline-none focus:border-[#7141ff]"
                    />
                </div>

                <div className="text-left mb-6">
                    <Link href="/login-page" className="text-sm text-purple-200 hover:text-white">Have an account? Sign in</Link>
                </div>

                <div className="flex gap-4">
                    <button 
                        type="submit" 
                        className="flex-1 py-4 px-4 bg-gradient-to-r bg-[#7141ff] text-white font-medium rounded hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        {pending ? (
                            (
                                <div role='status' aria-label='loading'>
                                    <svg className='w-6 h-6 stroke-indigo-600 animate-spin ' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <g clipPath='url(#clip0_9023_61563)'>
                                    <path d='M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444' stroke='stroke-current' strokeWidth='1.4' strokeLinecap='round' className='my-path'></path>
                                    </g>
                                    <defs>
                                    <clipPath id='clip0_9023_61563'>
                                        <rect width='24' height='24' fill='white'></rect>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    <span className='sr-only'>Loading...</span>
                                </div>
                            )
                        ) : (
                            "Sign up"
                        )}
                    </button>
                </div>
            </form>
            {showModal && createPortal(
                <div className="fixed p-4 inset-0 flex items-center justify-center z-50">
                    <div 
                        className="absolute inset-0 bg-black/75" 
                        onClick={() => setShowModal(false)}
                    ></div>
                    <div className={`${success ? "bg-[#E44C89]" : " bg-[#824CE4]"} p-6 rounded-lg shadow-lg z-10 max-w-md w-full`}>
                        <div className="flex flex-col items-center gap-2">
                            <Image 
                                src={success ? "/spirit-blossom-zyra.png" : "/spirit-blossom-irelia.png"}
                                alt="Spirit Blossom Logo"
                                width={100}
                                height={100}
                                loading="lazy"
                                className="w-auto h-auto"
                            />
                            <h2 className={`${success ? "text-[#AE0261]" : "  text-[#4808BF]"} text-4xl font-bold text-center`}>
                                {success ? "Signup successful!" : state?.error}
                            </h2>
                            {state?.error && (
                                <p className="text-[#4801CD] text-lg font-semibold text-center">{state?.errorMessage}</p>
                            )}
                            <button 
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-transparent text-white cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
}
