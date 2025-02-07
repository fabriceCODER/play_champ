"use client"

import { useState } from "react"; // Import useState
import LearnMoreSection from "@/app/components/LearnMore";

export default function TrendingGames() {
    const games = [
        {
            id: 1,
            image: "/images/game1.png",
            title: "Game Title 1",
            description: "A revolutionary play-to-earn game.",
        },
        {
            id: 2,
            image: "/images/game2.png",
            title: "Game Title 2",
            description: "Experience the thrill of the metaverse.",
        },
        {
            id: 3,
            image: "/images/game3.png",
            title: "Game Title 3",
            description: "Immerse yourself in blockchain gaming.",
        },
        {
            id: 4,
            image: "/images/game4.png",
            title: "Game Title 4",
            description: "Explore new worlds and earn rewards.",
        },
    ];

    // State to track which game's "Learn More" section is visible
    const [visibleLearnMoreId, setVisibleLearnMoreId] = useState(null);

    // Function to toggle the visibility of the LearnMoreSection
    const toggleLearnMore = (gameId) => {
        if (visibleLearnMoreId === gameId) {
            setVisibleLearnMoreId(null); // Hide if already visible
        } else {
            setVisibleLearnMoreId(gameId); // Show for the clicked game
        }
    };

    return (
        <section className="bg-white dark:bg-secondary py-20 px-6">
            <div className="container mx-auto">
                {/* Section Header */}
                <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white text-center">
                    Currently Trending Games
                </h2>
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-center">
                    Check out the hottest games in the play-to-earn industry.
                </p>

                {/* Cards Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:scale-105"
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
                                    className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-800"
                                >
                                    Learn More
                                </button>

                                {/* Conditionally render LearnMoreSection */}
                                {visibleLearnMoreId === game.id && (
                                    <LearnMoreSection />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}