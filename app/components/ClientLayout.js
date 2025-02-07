"use client"; // This is a Client Component

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
    const pathname = usePathname(); // Get the current route

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname} // Use pathname to trigger animations on route change
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}