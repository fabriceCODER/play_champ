export default function FeaturedProjects() {
    const projects = [
        {
            title: "CyberQuest",
            img: "/images/project1.png",
            description: "A futuristic open-world RPG where you explore a neon-lit city, battle rogue AI, and uncover the secrets of a dystopian future.",
        },
        {
            title: "ShadowRealm",
            img: "/images/project2.png",
            description: "Embark on a dark fantasy adventure, battling mythical creatures and uncovering ancient secrets in a world of magic and danger.",
        },
        {
            title: "Galactic Wars",
            img: "/images/project3.png",
            description: "Command your fleet in epic space battles, build alliances, and conquer the galaxy in this strategic space opera.",
        },
        {
            title: "Mystic Valley",
            img: "/images/project4.png",
            description: "Explore a magical world filled with puzzles, treasures, and mystical creatures in this enchanting adventure game.",
        },
        {
            title: "Zombie Apocalypse",
            img: "/images/project5.png",
            description: "Survive in a post-apocalyptic world overrun by zombies. Scavenge for resources, build defenses, and fight to stay alive.",
        },
        {
            title: "Racing Legends",
            img: "/images/project6.png",
            description: "Compete in high-speed races, customize your cars, and become the ultimate champion in this adrenaline-pumping racing game.",
        },
    ];

    return (
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-white">
                Our Featured Games
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white text-primary dark:bg-gray-700 dark:text-white shadow-md rounded-lg overflow-hidden"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
