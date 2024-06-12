
import {
    type ISourceOptions,
    MoveDirection,
  } from "@tsparticles/engine";
import { useMemo } from "react";

export default function ParticleOptionsLightMode(): ISourceOptions {
    return useMemo(() => ({
        background: {
            color: {
                value: "#E5E4E2",
            },
            opacity: 200,
        },
        fpsLimit: 60,
        interactivity: {
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 30,
                    duration: 0.1,
                },
            },
        },
        particles: {
            color: {
                value: "#000000",
            },
            collisions: {
                enable: true,
            },
            
            links: {
                color: "#B2BEB5",
                distance: 150,
                enable: true,
                opacity: 1,
                width: 1,
            },
            
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: "out",
                },
                random: true,
                speed: {
                    min : 0.1,
                    max : 0.2
                },
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 200,
            },
            opacity: {
                value: {
                    min: 0.1,
                    max: 1
                },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 0.01, max: 1.5 },
            },
        },
        detectRetina: true,
    }),
        [],
    );
}