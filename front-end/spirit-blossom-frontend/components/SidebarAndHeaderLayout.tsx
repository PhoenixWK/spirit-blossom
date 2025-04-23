import Header from "./Header";
import Sidebar from "./Sidebar";

export default function SidebarAndHeaderLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[#310A65]">
            <div className="hidden lg:block fixed left-0 h-screen">
                <Sidebar />
            </div>
            <div className="lg:flex-1 lg:ml-[80px]">
                <Header />
                <div className="relative min-h-screen pt-16">
                    <div 
                        className="fixed inset-0 lg:left-[80px] z-0 bg-[url('/spirit-blossom-background.png')] bg-cover bg-center"
                        style={{ filter: "brightness(0.5) saturate(1.2)" }}
                    ></div>
                    <div className="relative z-10 min-h-screen p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}