import CardSection from "../components/CardSection";
import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";
import Gallery from "@/app/components/Gallery";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";

export default function AboutUs() {
    return (
        <div>
            <Header />
            <Carousel />
            <CardSection />
            <Gallery />
            <CTA />
            <Footer />
        </div>
    );
}
