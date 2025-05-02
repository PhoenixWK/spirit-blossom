"use client";

import BackgroundWithTransitionEffect from "./BackgroundWithTransitionEffect";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function SidebarAndHeaderLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <div className="flex min-h-screen bg-[#310A65]">
            <div className="fixed z-10 left-0 h-screen lg:block hidden">
                <Sidebar />
            </div>
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={toggleSidebar}>
                    <div className="h-screen w-[80px]" onClick={(e) => e.stopPropagation()}>
                        <Sidebar />
                    </div>
                </div>
            )}
            <div className="flex-1 lg:ml-[80px] lg:mt-[60px]">
                <Header toggleSidebar={toggleSidebar} />
                <BackgroundWithTransitionEffect
                        imgLink="/spirit-blossom-background.png"
                        containerClassName="relative min-h-screen pt-16"
                        className="relative z-0 min-h-screen p-4 mt-16 lg:mt-0 transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}"
                    >
                        {children}
                </BackgroundWithTransitionEffect>
            </div>
        </div>
    );
}
