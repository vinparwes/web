
import { ISourceOptions } from "@tsparticles/engine";
import { useMemo } from "react";

export default function ParticleOptions(): ISourceOptions {
    return useMemo(() => ({
        background: {
            color: {
                value: "#000000",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                /*
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                */
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            /*
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            */
            move: {
                direction: "left",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.1,
                straight: false,
            },
            number: {
                density: {
                    enable: false,
                },
                value: 200,
            },
            opacity: {
                value: { min: 0.5, max: 1 },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 0.1, max: 1.5 },
            },
        },
        detectRetina: true,
    }),
        [],
    );
}