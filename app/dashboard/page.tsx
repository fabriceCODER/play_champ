"use client"
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useGames } from "../../hooks/useGames";

const Dashboard: React.FC = () => {
    const { isSignedIn } = useUser();
    const router = useRouter();
    const { data, isLoading } = useGames();

    useEffect(() => {
        if (!isSignedIn) {
            router.push("/sign-in").then(r => console.log("Page not Found"));
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
