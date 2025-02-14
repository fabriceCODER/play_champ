import { useState } from "react";
import { useGames } from "@/hooks/useGames";
import DashboardLayout from "/DashboardLayout";

const Dashboard = () => {
    const [search, setSearch] = useState("");
    const { data, isLoading } = useGames(search);

    return (
        <DashboardLayout>
            <h2 className="text-xl font-semibold mb-4">🎮 Available Games</h2>

            {/* Search Bar */}
            <div className="mb-4 flex">
                <input
                    type="text"
                    placeholder="Search games..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-3 py-2 w-full rounded-l-lg"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">🔍</button>
            </div>

            {/* Games List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {isLoading ? (
                    <p>Loading games...</p>
                ) : (
                    data?.games.map((game) => (
                        <div key={game.id} className="border p-4 rounded-lg bg-white shadow-md">
                            <h3 className="font-semibold">{game.title}</h3>
                            <p className="text-gray-600">{game.genre}</p>
                            <button
                                className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg w-full"
                                onClick={() => window.location.href = `/dashboard/play/${game.id}`}
                            >
                                🎮 Play Now
                            </button>
                        </div>
                    ))
                )}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
