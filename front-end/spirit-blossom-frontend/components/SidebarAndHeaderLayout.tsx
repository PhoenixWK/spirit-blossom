"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

export default function SidebarAndHeaderLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <div className="flex min-h-screen bg-[#310A65]">
            <div className="fixed left-0 h-screen lg:block hidden">
                <Sidebar />
            </div>
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={toggleSidebar}>
                    <div className="h-screen w-[80px]" onClick={(e) => e.stopPropagation()}>
                        <Sidebar />
                    </div>
                </div>
            )}
            <div className="flex-1 lg:ml-[80px] lg:mt-[80px]">
                <Header toggleSidebar={toggleSidebar} />
                <div className="relative min-h-screen pt-16">
                    <div 
                        className={`fixed inset-0 lg:left-[80px] z-0 bg-[url('/spirit-blossom-background.png')] bg-cover bg-center transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
                        style={{ 
                            filter: "brightness(0.5) saturate(1.2)",
                            transform: isLoaded ? 'scale(1)' : 'scale(1.05)'
                        }}
                    ></div>
                    <div className={`relative z-10 min-h-screen p-6 transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}