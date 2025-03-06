"use client"
import "./styles/globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Footer from "./components/layout/Footer";
import CTA from "./components/CTA";
import FeaturedProjects from "./components/FeaturedProjects";
import TrendingGames from "./components/TrendingGames";
import Hero from "./components/layout/Hero";
import Header from "./components/layout/Header";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
    return (
        <ClerkProvider>
            <div className="bg-background text-black dark:bg-darkBackground dark:text-darkText min-h-screen">
                {/* Navigation */}
                <nav className="p-4 flex justify-between items-center shadow-md bg-white dark:bg-gray-900">
                    <h1 className="text-2xl font-bold text-primary dark:text-white">
                        Play-to-Earn Games
                    </h1>

                    <div className="flex items-center gap-4">
                        {/* Show Sign In button if user is not signed in */}
                        <SignedOut>
                            <SignInButton>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>

                        {/* Show User Avatar & Logout if signed in */}
                        <SignedIn>
                            <UserButton />
                        </SignedIn>

                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Page Content */}
                <main>
                    {/* Header Section */}
                    <Header />

                    {/* Hero Section */}
                    <Hero />

                    {/* Trending Games Section */}
                    <TrendingGames />

                    {/* Featured Projects Section */}
                    <FeaturedProjects />

                    {/* CTA Section */}
                    <CTA />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </ClerkProvider>
    );
}