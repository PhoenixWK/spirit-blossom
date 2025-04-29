'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BackgroundWithTransitionEffect({
    children, 
    imgLink,
    containerClassName,
    className
}: {
    children: React.ReactNode,
    imgLink: string,
    containerClassName: string,
    className: string
}) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        console.log(imgLink);
        setIsLoaded(true);
    }, []);

    return (
        <div className={containerClassName}>
            <div className="fixed inset-0 z-0">
                <Image
                    src={imgLink}
                    alt="Background"
                    fill
                    className={`object-cover transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
                    style={{
                        filter: "brightness(0.5) saturate(1.2)",
                        transform: isLoaded ? 'scale(1)' : 'scale(1.05)'
                    }}
                    priority
                />
            </div>
            <div className={`${className}`}>
                {children}
            </div>
        </div>
    )
}
