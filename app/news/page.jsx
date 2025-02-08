export default function News() {
    const articles = [
        {
            id: 1,
            title: "The Future of Play-to-Earn Gaming",
            description: "Discover how blockchain technology is revolutionizing the gaming industry.",
            image: "/images/news1.jpg",
            date: "February 7, 2025",
        },
        {
            id: 2,
            title: "Top 10 Play-to-Earn Games of 2025",
            description: "Explore the best games in the play-to-earn space this year.",
            image: "/images/news2.jpg",
            date: "February 5, 2025",
        },
        {
            id: 3,
            title: "How to Get Started with Play-to-Earn",
            description: "A beginner's guide to entering the world of play-to-earn games.",
            image: "/images/news3.jpg",
            date: "February 3, 2025",
        },
    ];

    return (
        <main className="bg-background dark:bg-darkBackground text-primary dark:text-white min-h-screen py-16">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-10">Latest News</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{article.description}</p>
                                <p className="text-sm text-gray-500">{article.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
