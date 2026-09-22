"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageSlideshow() {
    const images = [
        "/PhantomZ_screenshot_2.jpeg",
        "/PhantomZ_screenshot_3.jpeg",
        "/PhantomZ_screenshot_4.jpeg",
        "/PhantomZ_screenshot_5.jpeg",
        "/PhantomZ_screenshot_6.jpeg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    function nextImage() {
        setCurrentImage((currentImage + 1) % images.length);
    }

    function prevImage() {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    }

    return (
        <div className="relative flex justify-center items-center">
            <Image src={images[currentImage]} width={2048} height={921} alt="PhantomZ gameplay picture" className="w-[400px] sm:w-[600px] h-auto rounded-3xl" />
            <button className="absolute left-[-15px] md:left-[-100px] cursor-pointer hover:scale-150 transition-full duration-300 ease-out bg-yellow-300 w-10 h-10 font-bold text-black rounded-full"onClick={prevImage}>&lt;</button>
            <button className="absolute right-[-15px] md:right-[-100px] cursor-pointer hover:scale-150 transition-full duration-300 ease-out bg-yellow-300 w-10 h-10 font-bold text-black rounded-full" onClick={nextImage}>&gt;</button>
        </div>
    )
}
