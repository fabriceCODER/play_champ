export default function NewsCard({ title, author, time, image }) {
    return (
        <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={title} className="w-full h-32 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-gray-600">{author}</span>
                    <span className="text-sm text-gray-600">{time} min</span>
                </div>
            </div>
        </div>
    );
}
