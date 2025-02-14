"use client";

import { memo, lazy, Suspense } from "react";
import Link from "next/link";

// Lazy-load social media icons
const FaFacebook = lazy(() => import("react-icons/fa").then((m) => ({ default: m.FaFacebook })));
const FaTwitter = lazy(() => import("react-icons/fa").then((m) => ({ default: m.FaTwitter })));
const FaInstagram = lazy(() => import("react-icons/fa").then((m) => ({ default: m.FaInstagram })));
const FaLinkedin = lazy(() => import("react-icons/fa").then((m) => ({ default: m.FaLinkedin })));

const IconWrapper = ({ children }) => (
    <Suspense fallback={<span className="animate-pulse">Loading...</span>}>{children}</Suspense>
);

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div>
                    <h3 className="text-white text-lg font-bold mb-4">PlayChamp</h3>
                    <p className="text-sm">
                        PlayChamp is your ultimate destination for all things gaming. From the latest news and reviews to comprehensive guides and tips, we've got you covered.
                    </p>
                    <p className="mt-4 text-sm">Level up your game with PlayChamp!</p>
                </div>

                {/* Links Section */}
                <div>
                    <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/news" className="hover:underline">Latest News</Link>
                        </li>
                        <li>
                            <Link href="/reviews" className="hover:underline">Reviews</Link>
                        </li>
                        <li>
                            <Link href="/guide" className="hover:underline">Guides</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/FAQ" className="hover:underline">FAQ</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
                    <p className="text-sm">
                        Have questions or feedback? Reach out to us, and we'll be happy to assist you.
                    </p>
                    <p className="mt-2 text-sm">Email: support@playchamp.com</p>
                    <p className="mt-2 text-sm">Phone: +1 (800) 123-4567</p>
                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com/playchamp" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <IconWrapper>
                                <FaFacebook className="text-xl" />
                            </IconWrapper>
                        </a>
                        <a href="https://instagram.com/playchamp" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <IconWrapper>
                                <FaInstagram className="text-xl" />
                            </IconWrapper>
                        </a>
                        <a href="https://twitter.com/playchamp" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <IconWrapper>
                                <FaTwitter className="text-xl" />
                            </IconWrapper>
                        </a>
                        <a href="https://linkedin.com/company/playchamp" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <IconWrapper>
                                <FaLinkedin className="text-xl" />
                            </IconWrapper>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} PlayChamp. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default memo(Footer);
