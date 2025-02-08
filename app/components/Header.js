"use client";

import {useState} from "react";
import Link from "next/link";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode);
    };

    return (
        <header className="bg-purple-700 text-white dark:bg-gray-900 dark:text-gray-100 py-4 px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">playChamp</h1>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-orange-500 transition duration-300">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-orange-500 transition duration-300">
                        About us
                    </Link>
                    <Link href="/pricing" className="hover:text-orange-500 transition duration-300">
                        Pricing
                    </Link>
                    <Link href="/news" className="hover:text-orange-500 transition duration-300">
                        News
                    </Link>
                </nav>

                {/* Contact Button */}
                <Link
                    href="/contact"
                    className="hidden md:block bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                >
                    Contact us
                </Link>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="ml-4 bg-gray-200 dark:bg-gray-800 text-purple-700 dark:text-white py-2 px-4 rounded-lg"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </header>
    );
}
