"use client";

import { Suspense, useEffect, useState } from "react";
import CloudinaryImage from "./CloudinaryImage";
import { getImages } from "@/utils/CloudinaryService";
import Image from "next/image";

export default function ListOfImages() {
    const [images, setImages] = useState<CloudinaryImage[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const fetchedImages = await getImages();
                if (fetchedImages) {
                    setImages(fetchedImages);
                }
            } catch (error: unknown) {
                console.error(`Error fetching images: ${error instanceof Error ? error.message : 'Unknown error'}`);
            }
        };

        fetchImages();
    }, []);

    return (
        <Suspense fallback={<div className="w-full h-full bg-white animate-pulse rounded-md" />}>
            {images.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image) => (
                        <li key={image.publicId}>
                            <section className="w-fit h-fit rounded-lg bg-cover object-cover">
                                <CloudinaryImage image={image} />
                            </section>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="p-4 border-2 border-[#5B1DC0] rounded-lg flex flex-col items-center justify-center">
                   <div className="flex flex-col items-center justify-center">
                    <Image 
                            src="/spirit-blossom-ashe-no-images.png"
                            alt="Irelia Icon"
                            width={160}
                            height={160}
                            className="w-auto h-auto object-cover"
                        />
                        <p className="text-2xl text-white font-semibold">No images found</p>
                   </div>
                </div>
            )}
        </Suspense>
    );
}
