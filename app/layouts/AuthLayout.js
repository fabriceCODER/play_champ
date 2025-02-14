import Link from "next/link";

const AuthLayout = ({ title, children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                {children}
                <div className="mt-4">
                    {title === "Sign In" ? (
                        <p>
                            Don't have an account?{" "}
                            <Link href="/sign-up" className="text-blue-500 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{" "}
                            <Link href="/sign-in" className="text-blue-500 hover:underline">
                                Sign In
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
