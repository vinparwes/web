import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine, } from "@tsparticles/react";
import { useState, useEffect } from "react";
import ParticleOptions from "../../interface/ParticleBackgroundOptions";
import { loadSlim } from '@tsparticles/slim';
import { Box } from "@chakra-ui/react";

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
            <div >
                <Box filter={'auto'} >
                    <Particles
                        id="tsparticles"
                        options={options}
                    />
                </Box>
            </div>
        );
    }
    return <></>

}

export default ParticleBackground