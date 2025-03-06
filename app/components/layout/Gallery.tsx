"use client";

import { useState } from "react";

export default function Gallery() {
    const [images] = useState([
        { src: "/images/gal1.jpg", alt: "Blaze" },
        { src: "/images/gal2.jpg", alt: "Venom" },
        { src: "/images/gal3.jpg", alt: "Shadow" },
        { src: "/images/gal4.jpg", alt: "Fury" },
        { src: "/images/gal5.jpg", alt: "Nova" },
        { src: "/images/gal6.jpg", alt: "Ace" },
    ]);

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800 relative">
            {/* Decorative Icons */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.828 9l2.121 2.121a4 4 0 010 5.657l-2.828 2.829a4 4 0 01-5.657 0L6.343 16.78a4 4 0 010-5.657L8.464 9m5.657-5.657L9 8.465"
                    />
                </svg>
            </div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10l4.536 4.536a5 5 0 010 7.072l-2.829 2.828a5 5 0 01-7.072 0L5.464 17.607a5 5 0 010-7.072L10 5"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6">
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-white">
                    Our Gallery
                </h2>

                {/* Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="relative overflow-hidden group">
                            {/* Decorative Icon on Each Image */}
                            <div className="absolute top-3 left-3 w-8 h-8 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-primary dark:text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 10l1.514 1.514a3 3 0 004.242 0L15 5.343m5 5L16.343 5"
                                    />
                                </svg>
                            </div>

                            {/* Image */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
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
