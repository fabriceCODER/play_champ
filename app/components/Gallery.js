"use client";

import { useState } from "react";

export default function Gallery() {
    const [images] = useState([
        { src: "/images/gal1.jpg", alt: "Game 1" },
        { src: "/images/gal2.jpg", alt: "Game 2" },
        { src: "/images/gal3.jpg", alt: "Game 3" },
        { src: "/images/gal4.jpg", alt: "Game 4" },
        { src: "/images/gal5.jpg", alt: "Game 5" },
        { src: "/images/gal6.jpg", alt: "Game 6" },
    ]);

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-white">
                    Our Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="relative overflow-hidden group">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-semibold">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
