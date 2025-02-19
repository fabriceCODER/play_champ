import React, { useMemo } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

interface Guide {
    id: number;
    title: string;
    description: string;
    link: string;
}

interface GuideCardProps {
    guide: Guide;
}

export default function Guide() {
    const guides: Guide[] = useMemo(() => [
        {
            id: 1,
            title: "Getting Started with Our Platform",
            description: "Learn how to set up your account and begin exploring.",
            link: "/guides/getting-started",
        },
        {
            id: 2,
            title: "Maximizing Your Gaming Experience",
            description: "Discover tips and tricks to enhance your gaming journey.",
            link: "/guides/maximizing-experience",
        },
        {
            id: 3,
            title: "Advanced Features and Integrations",
            description: "Unleash the full potential of the platform with advanced tools.",
            link: "/guides/advanced-features",
        },
    ], []);

    return (
        <main className="bg-background dark:bg-darkBackground text-primary dark:text-white min-h-screen py-16">
            <div className="container mx-auto px-6">
                <Header />

                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Guides</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        Explore our guides to make the most out of our platform and services.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Our Guides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {guides.map((guide) => (
                            <GuideCard key={guide.id} guide={guide} />
                        ))}
                    </div>
                </section>

                <CTA />
                <Footer />
            </div>
        </main>
    );
}

const GuideCard: React.FC<GuideCardProps> = ({ guide }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
        <h3 className="text-xl font-bold">{guide.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{guide.description}</p>
        <Link href={guide.link} className="text-primary dark:text-secondary font-bold hover:underline">
            Read More
        </Link>
    </div>
);
