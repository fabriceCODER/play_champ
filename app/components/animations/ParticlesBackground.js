"use client"; // Ensure this is a Client Component

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Import loadFull from tsparticles

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log("Initializing particles...");
        try {
            await loadFull(engine); // Load the full engine
        } catch (error) {
            console.error("Error loading tsparticles:", error);
        }
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log("Particles loaded!", container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#1E293B", // Match your dark theme
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#1E40AF", // Match your primary color
                    },
                    links: {
                        color: "#1E40AF", // Match your primary color
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;