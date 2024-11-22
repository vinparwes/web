import { Box, Center, Flex, Image, ScaleFade, Stack } from "@chakra-ui/react"
import AboutTextContainer from "../containers/AboutTextContainer"
import me from '../../assets/images/me.jpg'
import AboutTextHeaderContainer from "../containers/AboutTextHeaderContainer"

function AboutSection() {

    const aboutTextP1 = process.env.REACT_APP_ABOUT_TEXT_P1 || "Default fallback text";
    const aboutTextP2 = process.env.REACT_APP_ABOUT_TEXT_P2 || "Default fallback text";

    return (
        <>
            <ScaleFade in={true} initialScale={0.9} delay={0.05}>
                <Center>
                    <Box
                        padding={'2vh'}
                        mt={'2vh'}
                        mr={'1vh'}
                        borderRadius={'2vh'}
                        position={'relative'}

                    >
                        <Flex>
                            <Stack>
                                <Center>
                                    <ScaleFade in={true} initialScale={0.9} delay={0.3}>
                                        <Image border={'1px'} borderRadius={'full'} boxSize='30vh' objectFit={'cover'} src={me} />
                                    </ScaleFade>
                                </Center>
                                <ScaleFade in={true} initialScale={0.9} delay={0.1}>
                                    <AboutTextHeaderContainer text={"Hi!"} />
                                </ScaleFade>
                                <ScaleFade in={true} initialScale={0.9} delay={0.2}>
                                    <Center>
                                        <AboutTextContainer text={aboutTextP1} />
                                    </Center>
                                </ScaleFade>
                                <ScaleFade in={true} initialScale={0.9} delay={0.3}>
                                    <AboutTextHeaderContainer text={"What am I currently working on?"} />
                                </ScaleFade>
                                <ScaleFade in={true} initialScale={0.9} delay={0.4}>
                                    <Center>
                                        <AboutTextContainer text={aboutTextP2} />
                                    </Center>
                                </ScaleFade>

                            </Stack>
                        </Flex>
                    </Box >
                </Center>
            </ScaleFade >
        </>
    )
}

export default AboutSection