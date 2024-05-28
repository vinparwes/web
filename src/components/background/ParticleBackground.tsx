import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine, } from "@tsparticles/react";
import { useState, useEffect } from "react";
import ParticleOptions from "../../interface/ParticleBackgroundOptions";
import { loadSlim } from '@tsparticles/slim';

function ParticleBackground() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = ParticleOptions()

    if (init) {
        return (
            <div>
                <Particles
                    id="tsparticles"
                    options={options}
                />
            </div>
        );
    }
    return <></>

}

export default ParticleBackground