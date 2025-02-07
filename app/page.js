import "./styles/globals.css"; // Global styles
import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingGames from "./components/TrendingGames";
import LearnMoreSection from "@/app/components/LearnMore";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import Footer from "@/app/components/Footer";

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
            <Footer />
        </div>
    );
}
