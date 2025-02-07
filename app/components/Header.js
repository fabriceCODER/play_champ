"use client"

import { useState } from "react";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode);
    };

    return (
        <header className="bg-primary text-white dark:bg-secondary py-4 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">playChamp</h1>
            <button
                onClick={toggleDarkMode}
                className="bg-gray-200 dark:bg-gray-800 text-primary dark:text-white py-2 px-4 rounded-lg"
            >
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </header>
    );
}
