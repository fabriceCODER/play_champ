export default function FeaturedProjects() {
    const projects = [
        { title: "Project 1", img: "/images/project1.png" },
        { title: "Project 2", img: "/images/project2.png" },
        { title: "Project 3", img: "/images/project3.png" },
        { title: "Project 1", img: "/images/project4.png" },
        { title: "Project 2", img: "/images/project5.png" },
        { title: "Project 3", img: "/images/project6.png" },
    ];

    return (
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center mb-8">Our Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
