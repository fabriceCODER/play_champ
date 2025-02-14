import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useGames } from "@/hooks/useGames";

const Dashboard = () => {
    const { isSignedIn } = useUser();
    const router = useRouter();
    const { data, isLoading } = useGames();

    useEffect(() => {
        if (!isSignedIn) {
            router.push("/sign-in");
        }
    }, [isSignedIn, router]);

    return (
        <DashboardLayout>
            <h2 className="text-xl font-semibold mb-4">🎮 Available Games</h2>
            {isLoading ? <p>Loading games...</p> : <p>Displaying {data?.games.length} games...</p>}
        </DashboardLayout>
    );
};

export default Dashboard;
