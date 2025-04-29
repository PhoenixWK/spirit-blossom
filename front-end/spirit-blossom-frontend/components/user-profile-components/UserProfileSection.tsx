
import Image from "next/image";
import localFont from "next/font/local";

const righteousFont = localFont({
    src: "../../public/fonts/Righteous-Regular.ttf",
})

const remFont = localFont({
    src: "../../public/fonts/REM-VariableFont_wght.ttf",
})

export default function UserProfileSection() {
    return (
        <section className="w-full p-4 lg:p-6 bg-[#40098C]/50 rounded-lg border-2 border-[#8A36FF]">
            <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-2">
                    <Image 
                        src="/spirit-blossom-logo.png"
                        alt="Spirit Blossom Logo"
                        width={50}
                        height={50}
                        className="w-auto h-auto"
                    />
                    <div className="flex flex-col items-start gap-2">
                        <h1 className={`${righteousFont.className} text-2xl font-bold`}>Spirit Blossom</h1>
                        <p className={`${remFont.className} text-sm text-white`}>
                            <span className="text-[#FF4BC9]">25000</span> followers
                        </p>
                        <p className={`${remFont.className} text-sm text-white`}>
                            <span className="text-[#FF4BC9]">People following</span> followers
                        </p>
                    </div>
                </div>
                <ul className="flex flex-col gap-4 lg:gap-6">
                    <li className="flex items-center gap-2">
                        <Image 
                            src="/twitter.png"
                            alt="Twitter"
                            width={28}
                            height={28}
                            className="w-auto h-auto"
                        />
                        <p className="">Twitter</p>
                    </li>
                    <li className="flex items-center gap-2">
                    <Image 
                            src="/instagram.png"
                            alt="Instagram"
                            width={32}
                            height={32}
                            className="w-auto h-auto"
                        />
                        <p className="">Instagram</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Image 
                            src="/artstation.png"
                            alt="Artstation"
                            width={28}
                            height={28}
                            className="w-auto h-auto" 
                        />
                        <p className="">Artstation</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
