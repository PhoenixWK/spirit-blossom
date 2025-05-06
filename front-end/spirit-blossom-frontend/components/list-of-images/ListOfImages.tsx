"use client";

import { Suspense, useEffect, useState } from "react";
import CloudinaryImage from "./CloudinaryImage";
import { getImages } from "@/utils/CloudinaryService";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const testImages = [
    {
        id: "spirit-blossom-ahri",
        url: "/spirit-blossom-ahri.jpg",
    },
    {
        id: "spirit-blossom-soraka ",
        url: "/spirit-blossom-soraka.jpg",
    },
    {
        id: "spirit-blossom-vayne",
        url: "/spirit-blossom-vayne.jpg",
    },
    {
        id: "spirit-blossom-zyra",
        url: "/spirit-blossom-zyra.jpg",
    },
]

export default function ListOfImages() {
    const [images, setImages] = useState<CloudinaryImage[]>([]);
    const router = useRouter();

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
                <ul className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-2 border-[#5B1DC0] rounded-lg">
                    {images.map((image) => (
                        <li key={image.publicId}>
                            <section className="relative group" >
                                <CloudinaryImage image={image} />                         
                                <div className="absolute bottom-0 right-0 p-4 flex fle-row gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                    <FaShare size={30} className="text-white hover:text-[#F9AFE4]"/>
                                    <BsThreeDots size={30} className="text-white hover:text-[#F9AFE4]"/>
                                </div>
                                <div className="absolute top-0 right-0 p-4 flex flex-row gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                    <button className="px-4 py-2 rounded-lg bg-[#5B1DC0] hover:bg-[#F9AFE4] text-white text-lg font-semibold">
                                        Save
                                    </button>
                                </div>
                            </section>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="p-4 border-2 border-[#5B1DC0] rounded-lg flex flex-col items-center justify-center">
                   <div className="flex flex-col items-center justify-center">
                        {/* <Image 
                            src="/spirit-blossom-ashe-no-images.png"
                            alt="Irelia Icon"
                            width={160}
                            height={160}
                            className="w-auto h-auto object-cover"
                        />
                        <p className="text-2xl text-white font-semibold">No images found</p> */}
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {testImages.map((image) => (
                                <li key={image.id}>
                                    <section  className="relative group" onClick={() => router.push(`/images/${image.id}`)}>
                                        <Image src={image.url} 
                                            alt={image.id} 
                                            width={640} 
                                            height={320} 
                                            className="w-auto h-auto object-cover rounded-lg group-hover:opacity-50 transition-all duration-300 ease-in-out" 
                                        />
                                        <div className="absolute bottom-0 right-0 p-4 flex fle-row gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                            <FaShare size={30} className="text-white hover:text-[#F9AFE4]"/>
                                            <BsThreeDots size={30} className="text-white hover:text-[#F9AFE4]"/>
                                        </div>
                                        <div className="absolute top-0 right-0 p-4 flex flex-row gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                            <button className="px-4 py-2 rounded-lg bg-[#5B1DC0] hover:bg-[#F9AFE4] text-white text-lg font-semibold">
                                                Save
                                            </button>
                                        </div>
                                    </section>
                                </li>
                            ))}
                        </ul>
                   </div>
                </div>
            )}
        </Suspense>
    );
}
