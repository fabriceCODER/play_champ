import NewsCard from "./NewsCard";
import FeaturedNews from "./FeaturedNews";

export default function NewsGrid() {
    // Featured article with gaming-related content
    const featuredArticle = {
        title: "New Game Release: CyberQuest Takes the World by Storm",
        description:
            "CyberQuest, the highly anticipated open-world RPG, has finally been released. Dive into a futuristic world filled with action, exploration, and stunning visuals. Read more about what makes this games a must-play!",
        author: "Jane Doe",
        time: "5",
        image: "/images/slide5.png",
    };

    // List of news items with gaming-related content
    const newsItems = [
        {
            title: "Top 5 Upcoming Games of 2024",
            author: "Alex Johnson",
            time: "2",
            image: "/images/slide0.png", // Local image path
        },
        {
            title: "Esports Tournament: Team Phoenix Wins Championship",
            author: "Chris Lee",
            time: "3",
            image: "/images/slide2.png", // Local image path
        },
        {
            title: "Video games take over the world Tournament",
            author: "Ish Fab",
            time: "10",
            image: "/images/gal4.jpg", // Local image path
        },
        {
            title: "Game Developers Conference 2024 Highlights",
            author: "Sam Carter",
            time: "4",
            image: "/images/slide3.png", // Local image path
        },
        {
            title: "Video games take over the world Tournament",
            author: "Ish Fab",
            time: "10",
            image: "/images/gal4.jpg", // Local image path
        },
        {
            title: "Best Indie Games You Should Play Right Now",
            author: "Emily Davis",
            time: "1",
            image: "/images/slide4.png", // Local image path
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20">
            {/* Featured News */}
            <div className="md:col-span-2 lg:col-span-2">
                <FeaturedNews {...featuredArticle} />
            </div>
            {/* News Cards */}
            {newsItems.map((news, index) => (
                <NewsCard key={index} {...news} />
            ))}
        </div>
    );
}