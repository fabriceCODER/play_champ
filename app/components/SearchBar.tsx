import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
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
