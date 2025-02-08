"use client"
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to backend)
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <main className="bg-background dark:bg-darkBackground text-primary dark:text-white min-h-screen py-16">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Contact Details */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            We'd love to hear from you! Reach out to us for any inquiries, feedback, or collaboration opportunities.
                        </p>
                        <ul className="space-y-2">
                            <li>
                                <strong>Email:</strong> contact@playchamp.com
                            </li>
                            <li>
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </li>
                            <li>
                                <strong>Address:</strong> 123 PlayChamp Street, Gaming City
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1"
                    >
                        <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
                        <div className="mb-4">
                            <label className="block text-sm mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows="4"
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
