import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void; // Define the expected type for onSearch
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Search games..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border rounded-lg px-3 py-2 w-64"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
