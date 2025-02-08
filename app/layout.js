"use client"; // Mark as Client Component

import { useEffect, useState } from "react";
import { GeistSans, GeistMono } from "geist/font";
import ParticlesBackground from "../app/components/animations/ParticlesBackground";
import ClientLayout from "../app/components/ClientLayout";
import "./styles/globals.css";

export default function RootLayout({ children }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, []);

    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className={`antialiasing ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        {/* Particles Background */}
        <div className="fixed inset-0 z-0">
            <ParticlesBackground />
        </div>

        {/* Wrap children with ClientLayout */}
        <ClientLayout>{children}</ClientLayout>
        </body>
        </html>
    );
}