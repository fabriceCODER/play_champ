export default function FeaturedProjects() {
    const projects = [
        {
            title: "CyberQuest",
            img: "/images/project1.png",
            description:
                "A futuristic open-world RPG where you explore a neon-lit city, battle rogue AI, and uncover the secrets of a dystopian future.",
        },
        {
            title: "ShadowRealm",
            img: "/images/project2.png",
            description:
                "Embark on a dark fantasy adventure, battling mythical creatures and uncovering ancient secrets in a world of magic and danger.",
        },
        {
            title: "Galactic Wars",
            img: "/images/project3.png",
            description:
                "Command your fleet in epic space battles, build alliances, and conquer the galaxy in this strategic space opera.",
        },
        {
            title: "Mystic Valley",
            img: "/images/project4.png",
            description:
                "Explore a magical world filled with puzzles, treasures, and mystical creatures in this enchanting adventure game.",
        },
        {
            title: "Zombie Apocalypse",
            img: "/images/project5.png",
            description:
                "Survive in a post-apocalyptic world overrun by zombies. Scavenge for resources, build defenses, and fight to stay alive.",
        },
        {
            title: "Racing Legends",
            img: "/images/project6.png",
            description:
                "Compete in high-speed races, customize your cars, and become the ultimate champion in this adrenaline-pumping racing game.",
        },
    ];

    return (
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 relative">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5l6 6m0 0l-6 6m6-6H4"
                    />
                </svg>
            </div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </div>

            {/* Section Header */}
            <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-white">
                Our Featured Games
            </h2>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white text-primary dark:bg-gray-700 dark:text-white shadow-md rounded-lg overflow-hidden relative transition transform hover:scale-105"
                    >
                        {/* Decorative Icon on Each Card */}
                        <div className="absolute top-3 left-3 w-8 h-8 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-primary dark:text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.049 2.927c.3-1.202 2.06-1.202 2.36 0l1.385 5.564c.097.39.48.655.89.655h5.823c1.24 0 1.75 1.59.802 2.29l-4.708 3.602c-.328.25-.472.69-.36 1.09l1.385 5.564c.3 1.202-.995 2.19-2.02 1.537l-4.708-3.602a1.004 1.004 0 00-1.178 0l-4.708 3.602c-1.025.653-2.32-.335-2.02-1.537l1.385-5.564c.112-.4-.032-.84-.36-1.09L2.231 8.436c-.948-.7-.438-2.29.802-2.29h5.823c.41 0 .793-.265.89-.655l1.385-5.564z"
                                />
                            </svg>
                        </div>

                        {/* Project Content */}
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
