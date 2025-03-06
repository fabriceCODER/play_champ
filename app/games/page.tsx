"use client"
import React, { useState } from "react";
import { useGames } from "../../hooks/useGames"
import SearchBar from "../components/layout/SearchBar";

interface Game {
    id: number;
    title: string;
    genre: string;
}

const GamesPage: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const { data, isLoading, error } = useGames(search);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">🎮 Browse Games</h1>
            <SearchBar onSearch={setSearch} />
            {isLoading && <p>Loading games...</p>}
            {error && <p>Error: {error.message}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {data?.games.map((game: Game) => (
                    <div key={game.id} className="border p-4 rounded-lg shadow-md">
                        <h2 className="font-semibold">{game.title}</h2>
                        <p className="text-gray-600">{game.genre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamesPage;
