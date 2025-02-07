import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
    const ref = useRef(null);

    useEffect(() => {
        gsap.from(ref.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
            },
        });
    }, []);

    return (
        <div ref={ref} className="text-center py-20">
            <h2 className="text-3xl font-bold">Scroll to See Animation</h2>
        </div>
    );
}