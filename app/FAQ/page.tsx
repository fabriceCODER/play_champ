"use client";

import {JSX, useState} from "react";
import { FaChevronDown } from "react-icons/fa";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is PlayChamp?",
        answer: "PlayChamp is a platform for discovering and playing the best play-to-earn games, offering a seamless gaming experience."
    },
    {
        question: "How can I contact customer support?",
        answer: "You can reach us via email at contact@playchamp.com or through the Contact page on our website."
    },
    {
        question: "Is PlayChamp free to use?",
        answer: "Yes! PlayChamp is free to explore. Some games may have in-app purchases or require a subscription."
    },
    {
        question: "Do I need an account to play games?",
        answer: "Yes, you need to sign up to track progress, earn rewards, and access exclusive features."
    },
    {
        question: "How do I report a bug or issue?",
        answer: "You can report bugs by contacting our support team at support@playchamp.com."
    }
];

export default function FAQ(): JSX.Element {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
            <Header />

            {/* Page Title */}
            <section className="py-16 text-center">
                <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Find answers to the most common questions about PlayChamp.
                </p>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-6 max-w-3xl pb-16">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 dark:border-gray-600">
                            <button
                                className="w-full flex justify-between items-center py-4 text-lg font-medium text-left text-gray-900 dark:text-gray-100 focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <FaChevronDown className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                            </button>
                            <div
                                className={`overflow-hidden transition-all ${
                                    openIndex === index ? "max-h-40" : "max-h-0"
                                }`}
                            >
                                <p className="text-gray-700 dark:text-gray-300 py-2">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}