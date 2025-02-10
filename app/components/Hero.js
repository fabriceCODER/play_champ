export default function Hero() {
    return (
        <section className="bg-white dark:bg-secondary py-20 px-6 relative">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Text Content */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white leading-tight">
                        Transform Your Gaming Experience
                    </h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Explore cutting-edge play-to-earn games, unlock achievements, and connect with a global community of gamers.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
                        <button className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 flex items-center gap-2">
                            <span>Get Started</span>
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
                        <button className="bg-secondary dark:bg-gray-800 text-primary dark:text-white py-3 px-6 rounded-lg shadow-lg hover:bg-secondary/90 flex items-center gap-2">
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
                                    d="M13.5 4.5l6 6m0 0l-6 6m6-6H4"
                                />
                            </svg>
                            <span>Watch Trailer</span>
                        </button>
                    </div>
                </div>

                {/* Image Content */}
                <div className="mt-10 lg:mt-0 lg:w-1/2 relative">
                    <img
                        src="/images/controller.png"
                        alt="Gaming Controller"
                        className="w-full max-w-md mx-auto lg:mx-0 z-10"
                    />
                    {/* Decorative Icons to Fill Space */}
                    <div className="absolute top-10 right-0 lg:-right-10 w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-primary dark:text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.752 11.168l-2.708-2.708a4.001 4.001 0 10-5.656 5.656l5.22 5.22a2.828 2.828 0 004-4L10.828 9.828"
                            />
                        </svg>
                    </div>
                    <div className="absolute bottom-10 left-0 lg:-left-10 w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-primary dark:text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75h4.5M10.5 6h3M6.75 12.75h10.5m-4.5 3H9m3.75 3h-3m3-9H9.75M9 9.75v6m6-6v6"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-20 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-primary dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 10h18M9 21h6M4.5 16.5l15-9M4.5 7.5l15 9"
                        />
                    </svg>
                    <div>
                        <h3 className="text-lg font-bold text-primary dark:text-white">
                            Immersive Gameplay
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Dive into visually stunning and engaging worlds.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-primary dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <div>
                        <h3 className="text-lg font-bold text-primary dark:text-white">
                            Achievements & Rewards
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Earn exclusive rewards as you play.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-primary dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                    <div>
                        <h3 className="text-lg font-bold text-primary dark:text-white">
                            Global Community
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Connect with gamers around the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
