'use client'

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "./actions/actions";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
const rubikMonoOneFont = localFont({
    src: "../../public/fonts/RubikMonoOne-Regular.ttf",
    weight: "400",
    style: "normal",
});

export default function SignUpForm() {

    const [state, formAction, pending] = useActionState(loginAction, null);
    const router  = useRouter();
    useEffect(() => {
        if(state?.success) {
            router.push(`/user-profile/${state.userId}`);
        }
    }, [state, router]);

    return (
        <div className="max-w-md w-full p-6 bg-[#7C3BFC]/25 rounded-lg shadow-lg border-2 border-[#FF41D9]">
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
                        disabled={pending}
                        className="w-full p-4 border-2 border-purple-300 rounded-lg bg-transparent text-white focus:outline-none focus:border-pink-400"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="password" className="block text-lg text-white mb-1">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        id="password" 
                        disabled={pending}
                        className="w-full p-4 border-2 border-purple-300 rounded-lg bg-transparent text-white focus:outline-none focus:border-pink-400"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="confirm_password" className="block text-lg text-white mb-1">Confirm Password</label>
                    <input 
                        type="password" 
                        name="confirm_password"
                        id="confirm_password" 
                        disabled={pending}
                        className="w-full p-4 border-2 border-purple-300 rounded-lg bg-transparent text-white focus:outline-none focus:border-pink-400"
                    />
                </div>

                <div className="text-left mb-6">
                    <a href="/login-page" className="text-sm text-purple-200 hover:text-white">Have an account? Sign in</a>
                </div>

                <div className="flex gap-4">
                    <button 
                        type="submit" 
                        className="flex-1 py-4 px-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium rounded hover:opacity-90 transition-opacity cursor-pointer"
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
                    <button 
                        type="button" 
                        className="flex-1 py-4 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium rounded hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        <Link href="/login-page">Sign in</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}
