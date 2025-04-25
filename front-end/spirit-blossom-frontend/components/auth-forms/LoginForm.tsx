import localFont from "next/font/local";
import Image from "next/image";

const rubikMonoOneFont = localFont({
    src: "../../public/fonts/RubikMonoOne-Regular.ttf",
    weight: "400",
    style: "normal",
})

export default function LoginForm() {
    return (
        <div className="max-w-md w-full p-6 bg-[#7C3BFC]/25 rounded-lg shadow-lg border-2 border-[#7C3BFC]/50">
            <div className="flex flex-col items-center mb-6">
                <Image 
                    src="/spirit-blossom-logo.png"
                    alt="Spirit Blossom Logo" 
                    width={100} 
                    height={100} 
                    className="w-auto h-auto"
                    priority
                />
                <h1 className={`mt-4 text-5xl ${rubikMonoOneFont.className} font-bold text-white tracking-wider`}>LOGIN</h1>
            </div>

            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg text-white mb-1">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="w-full p-4 border-2 border-purple-300 rounded-lg bg-transparent text-white focus:outline-none focus:border-pink-400"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="password" className="block text-lg text-white mb-1">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="w-full p-4 border-2 border-purple-300 rounded-lg bg-transparent text-white focus:outline-none focus:border-pink-400"
                    />
                </div>

                <div className="text-left mb-6">
                    <a href="#" className="text-sm text-purple-200 hover:text-white">Forgot your password?</a>
                </div>

                <div className="flex gap-4">
                    <button 
                        type="submit" 
                        className="flex-1 py-4 px-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium rounded hover:opacity-90 transition-opacity"
                    >
                        Sign in
                    </button>
                    <button 
                        type="button" 
                        className="flex-1 py-4 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium rounded hover:opacity-90 transition-opacity"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}
