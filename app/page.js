// app/layout.js or _app.js
import "./styles/globals.css";
import ThemeToggle from "./components/ThemeToggle";

export default function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-background text-black dark:bg-darkBackground dark:text-darkText min-h-screen">
            <nav className="p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Play-to-Earn Games</h1>
                <ThemeToggle />
            </nav>
            <Component {...pageProps} /> {/* Ensure Component is defined */}
        </div>
    );
}