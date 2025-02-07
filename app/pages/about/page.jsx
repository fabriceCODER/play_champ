import CardSection from "../../components/CardSection";
import Carousel from "../../components/Carousel";
import ContactForm from "../../components/ContactForm";
import Gallery from "@/app/components/Gallery";

export default function AboutUs() {
    return (
        <div>
            <Carousel />
            <CardSection />
            <Gallery />
            <ContactForm />
        </div>
    );
}
