import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine, } from "@tsparticles/react";
import { useState, useEffect } from "react";
import { loadSlim } from '@tsparticles/slim';
import { Box, useColorMode } from "@chakra-ui/react";
import ParticleOptionsDarkMode from "../../interface/ParticleBackgroundOptionsDarkMode";
import ParticleOptionsLightMode from "../../interface/ParticleBackgroundOptionsLightMode";


function ParticleBackground() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const { colorMode } = useColorMode(); 

    const optionsLight: ISourceOptions = ParticleOptionsLightMode()
    const optionsDark: ISourceOptions = ParticleOptionsDarkMode()
    
    if (init) {
        return (
            <div >
                <Box >
                    <Particles
                        id="tsparticles"
                        options={colorMode === 'light' ? optionsLight : optionsDark}
                    />
                </Box>
            </div>
        );
    }
    return <></>

}

export default ParticleBackground