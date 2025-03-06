"use client"; // Make sure this file is treated as a client component

import { useRouter } from "next/navigation";
import { useGames } from "../../../hooks/useGames";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useState } from "react";
import SearchBar from "../../components/layout/SearchBar";


const GamePlayground = () => {
    const router = useRouter();
    const { data } = useGames("");
    const [mode, setMode] = useState("online");

    const id = "some_game_id"; // Example, you need to fetch this properly

    const game = data?.games.find((g: { id: string | undefined }) => g.id === id);

    if (!game) return <p>Loading game...</p>;

    return (
        <DashboardLayout>
            <SearchBar onSearch={(query) => console.log("Searching for:", query)} />
            <h2 className="text-xl font-semibold">{game.title} 🎮</h2>
            <p className="text-gray-600">{game.description}</p>

            {/* Toggle Mode */}
            <div className="mt-4 flex gap-2">
                <button
                    className={`px-4 py-2 rounded-lg ${mode === "online" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                    onClick={() => setMode("online")}
                >
                    🌐 Online Mode
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${mode === "offline" ? "bg-green-500 text-white" : "bg-gray-300"}`}
                    onClick={() => setMode("offline")}
                >
                    📴 Offline Mode
                </button>
            </div>

            {/* Game Play Area */}
            <div className="mt-6 p-4 bg-gray-200 rounded-lg text-center">
                {mode === "online" ? (
                    <p>🔗 Connecting to online servers...</p>
                ) : (
                    <p>📴 Playing in offline mode (Limited features)...</p>
                )}
            </div>
        </DashboardLayout>
    );
};

export default GamePlayground;
