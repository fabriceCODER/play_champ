"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-background dark:bg-darkBackground text-white dark:text-white py-4 px-6 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">playChamp</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-primary dark:hover:text-green-100 transition duration-300">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-primary dark:hover:text-green-100 transition duration-300">
                        About us
                    </Link>
                    <Link href="/pricing" className="hover:text-primary dark:hover:text-green-100 transition duration-300">
                        Pricing
                    </Link>
                    <Link href="/news" className="hover:text-primary dark:hover:text-green-100 transition duration-300">
                        News
                    </Link>
                </nav>

                {/* Contact Button (Desktop Only) */}
                <Link
                    href="/contact"
                    className="hidden md:block bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary/90 transition duration-300"
                >
                    Contact us
                </Link>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="ml-4 bg-gray-200 dark:bg-gray-800 text-primary dark:text-white p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
                >
                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="ml-4 md:hidden bg-gray-200 dark:bg-gray-800 text-primary dark:text-white p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden mt-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-4">
                    <Link
                        href="/"
                        className="block py-2 hover:text-primary dark:hover:text-green-100 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="block py-2 hover:text-primary dark:hover:text-green-100 transition duration-300"
                    >
                        About us
                    </Link>
                    <Link
                        href="/pricing"
                        className="block py-2 hover:text-primary dark:hover:text-green-100 transition duration-300"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/news"
                        className="block py-2 hover:text-primary dark:hover:text-green-100 transition duration-300"
                    >
                        News
                    </Link>
                    <Link
                        href="/contact"
                        className="block py-2 hover:text-primary dark:hover:text-green-100 transition duration-300"
                    >
                        Contact us
                    </Link>
                </nav>
            )}
        </header>
    );
}
