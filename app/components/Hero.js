export default function Hero() {
    return (
        <section className="bg-white dark:bg-secondary py-20 px-6">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white">
                        Work that we produce for our clients
                    </h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Discover top-notch play-to-earn games that redefine the gaming experience.
                    </p>
                    <button className="mt-6 bg-primary text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800">
                        Get Started
                    </button>
                </div>

                {/* Image Content */}
                <div className="mt-10 lg:mt-0 lg:w-1/2">
                    <img
                        src="/images/controller.png"
                        alt="Gaming Controller"
                        className="w-full max-w-md mx-auto lg:mx-0"
                    />
                </div>
            </div>
        </section>
    );
}
