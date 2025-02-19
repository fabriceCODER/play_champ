"use client";
import Header from "./components/Header";
import React from "react";

const ErrorPage: React.FC = () => {
    return (
        <main className="bg-background dark:bg-darkBackground text-primary dark:text-white min-h-screen py-16">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <Header />

                {/* Error Content */}
                <section className="text-center my-12">
                    <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        Please check the URL or go back to the homepage.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default ErrorPage;
