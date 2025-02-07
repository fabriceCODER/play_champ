export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div>
                    <h3 className="text-white text-lg font-bold mb-4">LOGO</h3>
                    <p className="text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>
                    <p className="mt-4 text-sm">playChamp</p>
                </div>

                {/* Links Section */}
                <div>
                    <h4 className="text-white text-lg font-bold mb-4">About us</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#zeux" className="hover:underline">
                                Zeux
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="hover:underline">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#careers" className="hover:underline">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="text-white text-lg font-bold mb-4">Contact us</h4>
                    <p className="text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>
                    <p className="mt-2 text-sm">+908 88097 880</p>
                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#facebook" className="hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#instagram" className="hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#twitter" className="hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#linkedin" className="hover:text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} playChamp. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
