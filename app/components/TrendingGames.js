"use client";

import { useState } from "react";
import LearnMoreSection from "@/app/components/LearnMore";

export default function TrendingGames() {
    const games = [
        {
            id: 1,
            image: "/images/game1.png",
            title: "Call of Duty: Black Ops 6",
            description: "A revolutionary play-to-earn game.",
        },
        {
            id: 2,
            image: "/images/game2.png",
            title: "EA Sports College Football 25",
            description: "Experience the thrill of the metaverse.",
        },
        {
            id: 3,
            image: "/images/game3.png",
            title: "Helldivers II",
            description: "Immerse yourself in blockchain gaming.",
        },
        {
            id: 4,
            image: "/images/game4.png",
            title: "Dragon Ball: Sparking! Zero",
            description: "Explore new worlds and earn rewards.",
        },
    ];

    const [visibleLearnMoreId, setVisibleLearnMoreId] = useState(null);

    const toggleLearnMore = (gameId) => {
        setVisibleLearnMoreId((prev) => (prev === gameId ? null : gameId));
    };

    return (
        <section className="bg-white dark:bg-secondary py-20 px-6 relative">
            <div className="container mx-auto">
                {/* Section Header */}
                <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white text-center">
                    Currently Trending Games
                </h2>
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-center">
                    Check out the hottest games in the play-to-earn industry.
                </p>

                {/* Decorative Icons */}
                <div className="absolute top-5 right-10 w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
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
                            d="M13.5 4.5l6 6m0 0l-6 6m6-6H4"
                        />
                    </svg>
                </div>
                <div className="absolute bottom-5 left-10 w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center">
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
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>

                {/* Cards Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:scale-105 relative"
                        >
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-primary dark:text-white">
                                    {game.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {game.description}
                                </p>

                                {/* Button to toggle LearnMoreSection */}
                                <button
                                    onClick={() => toggleLearnMore(game.id)}
                                    className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-800 flex items-center gap-2"
                                >
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>

                                {/* Conditionally render LearnMoreSection */}
                                {visibleLearnMoreId === game.id && (
                                    <LearnMoreSection />
                                )}
                            </div>

                            {/* Decorative Icons on Cards */}
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
                                        d="M11.049 2.927c.3-1.202 2.06-1.202 2.36 0l1.385 5.564c.097.39.48.655.89.655h5.823c1.24 0 1.75 1.59.802 2.29l-4.708 3.602c-.328.25-.472.69-.36 1.09l1.385 5.564c.3 1.202-.995 2.19-2.02 1.537l-4.708-3.602a1.004 1.004 0 00-1.178 0l-4.708 3.602c-1.025.653-2.32-.335-2.02-1.537l1.385-5.564c.112-.4-.032-.84-.36-1.09L2.231 8.436c-.948-.7-.438-2.29.802-2.29h5.823c.41 0 .793-.265.89-.655l1.385-5.564z"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
