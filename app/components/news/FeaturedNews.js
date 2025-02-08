export default function FeaturedNews({ title, description, author, time, image }) {
    return (
        <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt="Featured News" className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-600">{author}</span>
                    <span className="text-sm text-gray-600">{time} min</span>
                </div>
            </div>
        </div>
    );
}
