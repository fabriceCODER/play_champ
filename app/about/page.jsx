import Gallery from "@/app/components/Gallery";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import Carousel from "@/app/components/Carousel";
import CardSection from "@/app/components/CardSection";

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
