"use client"

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            setTheme("light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-primary text-white dark:bg-darkBackground"
        >
            {theme === "light" ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
        </button>
    );
}
