'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { AiFillHome } from "react-icons/ai";
import { MdLibraryAdd } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { RiSettingsFill } from "react-icons/ri";

export default function Sidebar() {     
    const pathname = usePathname();
    
    return (
        <aside className="flex flex-col items-center bg-[#5B1DC0] text-white h-screen w-[80px] py-8 top-0">
            <div className="mb-8">
                <div className="text-center">
                    <Image 
                        src="/spirit-blossom-logo.png" 
                        alt="Logo" 
                        width={0} 
                        height={0}
                        sizes='40px' 
                        className='w-auto h-auto lg:block hidden'
                        priority
                    />
                </div>
            </div>
            <nav className="flex flex-col items-center gap-8 mb-auto">
                <Link href="/" className={`p-2 hover:bg-white/20 rounded-lg transition-colors ${pathname === '/' ? 'bg-white/20' : ''}`}>
                    <AiFillHome size={40} className={`${pathname === '/' ? 'text-[#F9AFE4]' : 'text-white'}`} />
                </Link>
                <Link href="/new-image" className={`p-2 hover:bg-white/20 rounded-lg transition-colors ${pathname === '/new-image' ? 'bg-white/20' : ''}`}>
                    <MdLibraryAdd size={40} className={`${pathname === '/new-image' ? 'text-[#F9AFE4]' : 'text-white'}`} />
                </Link>
                <Link href="/notifications" className={`p-2 hover:bg-white/20 rounded-lg transition-colors ${pathname === '/notifications' ? 'bg-white/20' : ''}`}>
                    <FaBell size={40} className={`${pathname === '/notifications' ? 'text-[#F9AFE4]' : 'text-white'}`} />
                </Link>
                <Link href="/messages" className={`p-2 hover:bg-white/20 rounded-lg transition-colors ${pathname === '/messages' ? 'bg-white/20' : ''}`}>
                    <AiFillMessage size={40} className={`${pathname === '/messages' ? 'text-[#F9AFE4]' : 'text-white'}`} />
                </Link>
            </nav>
            <Link href="/settings" className={`p-2 hover:bg-white/20 rounded-lg transition-colors ${pathname === '/settings' ? 'bg-white/20' : ''}`}>
                <RiSettingsFill size={40} className={`${pathname === '/settings' ? 'text-[#F9AFE4]' : 'text-white'}`} />
            </Link>
        </aside>
    );
}