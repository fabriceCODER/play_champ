"use client";

import Header from "../components/layout/Header";
import {JSX} from "react";
import NewsGrid from "../components/news/NewsGrid";
import CTA from "../components/CTA";
import Footer from "../components/layout/Footer";

export default function NewsPage(): JSX.Element {
    return (
        <main className="bg-background dark:bg-darkBackground text-primary dark:text-white min-h-screen py-16">
            <div className="container mx-auto px-6">
                {/* Header section */}
                <Header />

                {/* Page Header */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Stay Updated with the Latest Gaming News</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        Explore the newest updates, releases, and trends in the gaming world.
                    </p>
                </section>

                {/* Search Section */}
                <section className="text-center mb-12">
                    <div className="mt-6">
                        <input
                            type="text"
                            placeholder="Search Latest News"
                            className="w-2/3 md:w-1/3 px-4 py-2 rounded-lg text-black"
                        />
                    </div>
                </section>

                {/* News Grid */}
                <section className="mb-12">
                    <NewsGrid />
                </section>

                {/* CTA Section */}
                <section>
                    <CTA />
                </section>

                {/* Footer Section */}
                <section>
                    <Footer />
                </section>
            </div>
        </main>
    );
}
