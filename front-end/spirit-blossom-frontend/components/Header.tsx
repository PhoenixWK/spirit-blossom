import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed w-full h-fit lg:w-auto lg:top-0 lg:right-0 lg:left-[80px] z-20 bg-[#5B1DC0] lg:bg-transparent py-3 px-4 flex justify-between items-center">
            <div className="flex items-center justify-between w-full">
                <Image 
                    src="/menu.png"
                    alt="menu logo"
                    width={0}
                    height={0}    
                    sizes="40px"        
                    className="w-auto h-auto"
                    priority
                />
                <Image 
                    src="/spirit-blossom-logo.png"
                    alt="spirit blossom logo"
                    width={0}
                    height={0}    
                    sizes="40px"        
                    className="w-auto h-auto"
                    priority
                />
                <div className="w-[40px] h-[40px] bg-[#6407D6] rounded-full">

                </div>
            </div>
        </header>
    );
}
