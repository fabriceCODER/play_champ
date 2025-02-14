import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchGames = async (search) => {
    const { data } = await axios.get("/api/games", { params: { search } });
    return data;
};

export const useGames = (search) => {
    return useQuery({
        queryKey: ["games", search],
        queryFn: () => fetchGames(search),
        staleTime: 60000, // Cache for 1 min
    });
};
