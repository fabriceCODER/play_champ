import "./styles/globals.css"; // Global styles
import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingGames from "./components/TrendingGames";
import LearnMoreSection from "@/app/components/LearnMore";
import FeaturedProjects from "@/app/components/FeaturedProjects";

export default function Home() {
    return (
        <div className="bg-background text-black dark:bg-darkBackground dark:text-darkText min-h-screen">
            {/* Navigation */}
            <nav className="p-4 flex justify-between items-center shadow-md bg-white dark:bg-gray-900">
                <h1 className="text-2xl font-bold text-primary dark:text-white">
                    Play-to-Earn Games
                </h1>
                <ThemeToggle />
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


            </main>

            {/* Footer */}
            <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 mt-10">
                <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Play-to-Earn Games. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
