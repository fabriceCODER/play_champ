import { UserButton, useUser, RedirectToSignIn } from "@clerk/nextjs";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
    const { isSignedIn, isLoaded } = useUser();

    if (!isLoaded) return <p>Loading...</p>;
    if (!isSignedIn) return <RedirectToSignIn />;

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Navbar */}
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">🎮 PlayChamp Dashboard</h1>
                <UserButton />
            </header>

            {/* Sidebar + Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-md p-4">
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/dashboard" className="block p-2 hover:bg-blue-100 rounded">
                                    🕹 Play Games
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/settings" className="block p-2 hover:bg-blue-100 rounded">
                                    ⚙ Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Content */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
