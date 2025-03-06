"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
    const [darkMode, setDarkMode] = useState<boolean | null>(null); // Start as null to avoid SSR mismatch
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    // Sync dark mode with localStorage on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        setDarkMode(storedTheme === "dark");
    }, []);

    useEffect(() => {
        if (darkMode === null) return; // Prevent execution until state is initialized
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    // Avoid hydration mismatch by rendering nothing until darkMode is set
    if (darkMode === null) {
        return null;
    }

    return (
        <header className="bg-background dark:bg-darkBackground text-white dark:text-white py-4 px-6 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">PlayChamp</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {["Home", "About", "Pricing", "News"].map((item, index) => {
                        const path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                        return (
                            <button
                                key={index}
                                onClick={() => handleNavigation(path)}
                                className="hover:text-primary dark:hover:text-green-100 transition duration-300"
                            >
                                {item}
                            </button>
                        );
                    })}
                </nav>

                {/* Authentication Section */}
                <div className="flex items-center space-x-4">
                    {/* Signed Out - Show "Get Started" */}
                    <SignedOut>
                        <SignInButton>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                Get Started
                            </button>
                        </SignInButton>
                    </SignedOut>

                    {/* Signed In - Show User Avatar */}
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="bg-gray-200 dark:bg-gray-800 text-primary dark:text-white p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
                    >
                        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden bg-gray-200 dark:bg-gray-800 text-primary dark:text-white p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden mt-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-4">
                    {["Home", "About us", "Pricing", "News"].map((item, index) => {
                        const path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                        return (
                            <button
                                key={index}
                                onClick={() => handleNavigation(path)}
                                className="block w-full text-left py-2 hover:text-primary dark:hover:text-green-100 transition duration-300"
                            >
                                {item}
                            </button>
                        );
                    })}
                </nav>
            )}
        </header>
    );
}
