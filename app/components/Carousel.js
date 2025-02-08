"use client";

import { useState } from "react";

export default function Carousel() {
    const items = [
        { image: "/images/slide1.png", alt: "Exciting Game 1" },
        { image: "/images/slide2.png", alt: "Exciting Game 2" },
        { image: "/images/slide3.png", alt: "Exciting Game 3" },
        { image: "/images/slide4.png", alt: "Exciting Game 2" },
        { image: "/images/slide5.png", alt: "Exciting Game 3" },
        { image: "/images/slide0.png", alt: "Exciting Game 2" },

    ];
    const [current, setCurrent] = useState(0);

    const prevSlide = () => setCurrent((current - 1 + items.length) % items.length);
    const nextSlide = () => setCurrent((current + 1) % items.length);

    return (
        <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <div
                className="absolute inset-0 flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
            >
                &#10095;
            </button>
        </div>
    );
}
