"use client";

import { useEffect, useState, ReactNode } from "react";
import { GeistSans, GeistMono } from "geist/font";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClient
import "./styles/globals.css";
import ParticlesBackground from "./components/animations/ParticlesBackground";
import ClientLayout from "./components/ClientLayout";

interface RootLayoutProps {
    children: ReactNode;
}

const queryClient = new QueryClient(); // Create a new instance of QueryClient

export default function RootLayout({ children }: RootLayoutProps) {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, []);

    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className={`antialiasing ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
        {/* Particles Background */}
        <div className="fixed inset-0 z-0">
            <ParticlesBackground />
        </div>

        <ClerkProvider>
            {/* Wrap with QueryClientProvider */}
            <QueryClientProvider client={queryClient}>
                {/* Wrap children with ClientLayout */}
                <ClientLayout>{children}</ClientLayout>
            </QueryClientProvider>
        </ClerkProvider>
        </body>
        </html>
    );
}
