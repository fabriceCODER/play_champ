export default function CTA() {
    return (
        <section className="py-16 bg-primary text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-lg mb-6">Subscribe to get the latest updates on games.</p>
            <form className="flex justify-center">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="py-3 px-6 rounded-l-lg text-black"
                />
                <button className="bg-secondary hover:bg-secondary-dark py-3 px-6 rounded-r-lg">
                    Subscribe
                </button>
            </form>
        </section>
    );
}
