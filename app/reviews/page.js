import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            feedback:
                "This platform has revolutionized the way I approach gaming. Highly recommended!",
            rating: 5,
        },
        {
            id: 2,
            name: "Jane Smith",
            feedback: "The advanced features are incredible and easy to use.",
            rating: 4,
        },
        {
            id: 3,
            name: "Alex Johnson",
            feedback:
                "Great support and a wide range of tools. Perfect for gamers of all levels.",
            rating: 5,
        },
    ];

    return (
        <main className="bg-background dark:bg-darkBackground text-primary dark:text-white min-h-screen py-16">
            <div className="container mx-auto px-6">
                {/* Header section */}
                <Header />

                {/* Page Header */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Reviews</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        See what our users have to say about our platform and services.
                    </p>
                </section>

                {/* Reviews Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">User Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6"
                            >
                                <h3 className="text-xl font-bold">{review.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {review.feedback}
                                </p>
                                <div className="flex items-center">
                                    {Array.from({ length: review.rating }).map((_, idx) => (
                                        <span key={idx} className="text-yellow-400">★</span>
                                    ))}
                                    {Array.from({ length: 5 - review.rating }).map((_, idx) => (
                                        <span key={idx} className="text-gray-400">★</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
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
