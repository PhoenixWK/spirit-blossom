"use client";

import { Suspense, useEffect, useState } from "react";
import CloudinaryImage from "./CloudinaryImage";
import { getImages } from "@/utils/CloudinaryService";


export default function ListOfImages() {
    const [images, setImages] = useState<CloudinaryImage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const fetchedImages = await getImages();
                if (fetchedImages) {
                    setImages(fetchedImages);
                }
            } catch (error) {
                setError("Failed to fetch images");
                console.error("Error fetching images:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) {
        return <div className="w-full h-full bg-gray-200 animate-pulse rounded-md" />;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse rounded-md" />}>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image) => (
                    <li key={image.publicId}>
                        <section className="w-fit h-fit rounded-lg bg-cover object-cover">
                            <CloudinaryImage image={image} />
                        </section>
                    </li>
                ))}
            </ul>
        </Suspense>
    );
}
