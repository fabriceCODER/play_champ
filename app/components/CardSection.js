"use client";

export default function CardSection() {
    const cards = [
        { title: "Fast Delivery", description: "Get your games delivered on time!" },
        { title: "Premium Quality", description: "High-quality, engaging play-to-earn games." },
        { title: "Customer Support", description: "24/7 support for all your needs." },
    ];

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8 text-primary dark:text-white">
                    Why Work With Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
