import { SignOutButton } from "@clerk/nextjs";
import DashboardLayout from "../../layouts/DashboardLayout";

const Settings = () => {
    return (
        <DashboardLayout>
            <h2 className="text-xl font-semibold mb-4">⚙ Account Settings</h2>
            <SignOutButton>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">🚪 Sign Out</button>
            </SignOutButton>
        </DashboardLayout>
    );
};

export default Settings;
