"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
            <div className="container mx-auto px-6">
                <Header/>

                {/* Page Title */}
                <section className="py-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Contact Us</h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Reach out to us for inquiries, feedback, or support.
                    </p>
                </section>

                {/* Contact Section */}
                <section className="container mx-auto px-6 grid md:grid-cols-2 gap-12 pb-16">
                    {/* Contact Info */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Get in Touch</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            We’d love to hear from you! Feel free to contact us anytime.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-blue-500 text-lg"/>
                                <span className="text-gray-800 dark:text-gray-100">contact@playchamp.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-blue-500 text-lg"/>
                                <span className="text-gray-800 dark:text-gray-100">+250 794 500 945</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-blue-500 text-lg"/>
                                <span className="text-gray-800 dark:text-gray-100">
                                123 PlayChamp Street, Gaming City
                            </span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Send a Message</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200"
                                   htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200"
                                   htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-200"
                                   htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={4}
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white flex items-center justify-center py-2 px-4 rounded-lg hover:bg-blue-700 w-full"
                        >
                            <FaPaperPlane className="mr-2"/>
                            Send Message
                        </button>
                    </form>
                </section>

                <Footer/>
            </div>
        </main>
);
}
