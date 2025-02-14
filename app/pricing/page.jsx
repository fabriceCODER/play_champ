import { useMemo } from "react";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Pricing() {
    const pricingPlans = useMemo(() => [
        {
            id: 1,
            title: "Basic Plan",
            description: "For individuals starting out in the gaming world.",
            price: "$19/month",
            features: ["Access to basic features", "Email support", "5 projects included"],
        },
        {
            id: 2,
            title: "Pro Plan",
            description: "For enthusiasts looking for advanced features.",
            price: "$49/month",
            features: ["Everything in Basic", "Premium support", "20 projects included"],
        },
        {
            id: 3,
            title: "Enterprise Plan",
            description: "For businesses requiring full-scale solutions.",
            price: "Custom Pricing",
            features: ["Everything in Pro", "Dedicated account manager", "Unlimited projects"],
        },
    ], []);

    return (
        <main className="bg-background dark:bg-darkBackground text-primary dark:text-white min-h-screen py-16">
            <div className="container mx-auto px-6">
                <Header />

                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Pricing Plans</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        Choose the plan that fits your needs and take your gaming experience to the next level.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Our Plans</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingPlans.map((plan) => (
                            <PricingCard key={plan.id} plan={plan} />
                        ))}
                    </div>
                </section>

                <CTA />
                <Footer />
            </div>
        </main>
    );
}

const PricingCard = ({ plan }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
        <h3 className="text-xl font-bold">{plan.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
        <p className="text-2xl font-semibold mb-4">{plan.price}</p>
        <ul className="mb-4">
            {plan.features.map((feature, index) => (
                <li key={index} className="text-sm">• {feature}</li>
            ))}
        </ul>
        <button className="bg-primary dark:bg-secondary text-white py-2 px-4 rounded-lg">
            Choose Plan
        </button>
    </div>
);
