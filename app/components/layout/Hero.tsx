import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="bg-white dark:bg-secondary py-20 px-6 relative">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white leading-tight">
                        Transform Your Gaming Experience
                    </h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Explore cutting-edge play-to-earn games, unlock achievements, and connect with a global community of gamers.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
                        {/* Show sign-in button for signed-out users */}
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 flex items-center gap-2">
                                    <span>Get Started</span>
                                </button>
                            </SignInButton>
                        </SignedOut>

                        {/* Show Dashboard button for signed-in users */}
                        <SignedIn>
                            <a href="/dashboard" className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 flex items-center gap-2">
                                <span>Play Games</span>
                            </a>
                        </SignedIn>

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
            </div>
        </section>
    );
};

export default Hero;
