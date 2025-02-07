"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent!");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
        >
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 rounded-lg border border-gray-300"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-lg border border-gray-300"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 rounded-lg border border-gray-300"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg"
            >
                Send Message
            </button>
        </form>
    );
}
