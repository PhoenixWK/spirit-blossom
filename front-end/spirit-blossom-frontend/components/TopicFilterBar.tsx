"use client"

import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const revaliaFont = localFont({
    src: "../public/fonts/Revalia-Regular.ttf",
    weight: "400",
    style: "normal",
});

const topics = ["All", "Ashe", "Irelia", "Lux", "Riven", "Syndra", "Zyra", "Vayne", "Morgana"];

export default function TopicFilterBar() {

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? topics.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === topics.length - 1 ? 0 : curr + 1))

    const pathname = usePathname();

    return (
        <div className="flex flex-col gap-2">
            <ul className="w-full flex flex-row items-start justify-start gap-8 transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {topics.map((topic, i) => (
                    <li key={topic} className={`${revaliaFont.className} text-lg ${pathname === '/' && i === 0  ? "text-[#F9AFE4]" : "text-white hover:text-[#F9AFE4]"} font-semibold cursor-pointer`}>
                        {topic}
                    </li>
                ))}
            </ul>
            <div className="lg:hidden flex items-center justify-between">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <FaAngleLeft size={20}/>
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <FaAngleRight size={20}/>
                </button>
            </div>
        </div>
    )
}

