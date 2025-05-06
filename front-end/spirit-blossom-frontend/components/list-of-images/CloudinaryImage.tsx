"use client";
import { CldImage } from 'next-cloudinary';

interface CloudinaryImage {
    publicId: string;
    url: string;
    width: number;
    height: number;
    format: string;
}

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function CloudinaryImage({image}: {image: CloudinaryImage}){
    return (
        <CldImage
            src={image.url}
            alt={"Image from Cloudinary"}    // Use this sample image or upload your own via the Media Explorer
            width="640" // Transform the image: auto-crop to square aspect_ratio
            height="360"
            crop={{
                type: 'auto',
                source: true
            }}      
            className='rounded-lg group-hover:opacity-50 transition-all duration-300 ease-in-out'  
         />
    );
}