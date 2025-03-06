import Header from "../components/layout/Header";
import Carousel from "../components/Carousel";
import CardSection from "../components/CardSection";
import Gallery from "../components/layout/Gallery";
import CTA from "../components/CTA";
import Footer from "../components/layout/Footer";


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
