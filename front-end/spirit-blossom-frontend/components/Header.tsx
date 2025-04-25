import Image from "next/image";
import localFont from 'next/font/local'

interface HeaderProps {
    toggleSidebar: () => void;
}

const revansFont = localFont({
    src: "../public/fonts/Revans-Medium.otf",
})

const categories = [
    {
        key: "irelia",
        name: "Irelia",
    },
    {
        key: "karma",
        name: "Karma",
    },
    {
        key: "zyra",
        name: "Zyra",
    },
    {
        key: "lillia",
        name: "Lillia",
    },
]

export default function Header({ toggleSidebar }: HeaderProps) {

    return (
        <header className="fixed w-full h-fit lg:w-auto lg:top-0 lg:right-0 lg:left-[80px] z-20 bg-[#5B1DC0] lg:bg-transparent py-6 px-4">
            <div className="flex items-center justify-between w-full">
                <div onClick={toggleSidebar} className="lg:hidden cursor-pointer">
                    <Image 
                        src="/menu.png"
                        alt="menu logo"
                        width={0}
                        height={0}    
                        sizes="40px"        
                        className="w-auto h-auto"
                        priority
                    />
                </div>
                <Image 
                    src="/spirit-blossom-logo.png"
                    alt="spirit blossom logo"
                    width={0}
                    height={0}    
                    sizes="40px"        
                    className="w-auto h-auto lg:hidden"
                    priority
                />
                <div className="w-full hidden lg:block">
                    <input 
                        type="text" 
                        placeholder="Search"
                        className="w-full bg-[#6407D6] rounded-full p-2"
                    />
                </div>
                <div className="w-[40px] h-[40px] ml-5 bg-[#6407D6] rounded-full">

                </div>
            </div>
            <ul className="mt-5 flex gap-4">
                {categories.map((category)=> (
                    <li key={category.key} className={`${revansFont.className} text-lg`}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </header>
    );
}
