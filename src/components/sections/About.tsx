import { Box, Center, Flex, Heading, Image, ScaleFade, Stack } from "@chakra-ui/react"
import AboutTextContainer from "../containers/AboutTextContainer"
import me from '../../assets/images/me.jpg'
import AboutTextHeaderContainer from "../containers/AboutTextHeaderContainer"
import { useColorMode } from "@chakra-ui/react"

function AboutSection() {
    const { colorMode } = useColorMode();
    return (
        <>
            <ScaleFade in={true} initialScale={0.9} delay={0.05}>
                <Center>
                    <Box
                        padding={'2vh'}
                        mt={'4vh'}
                        ml={'1vh'}
                        mr={'1vh'}
                        borderRadius={'2vh'}
                        position={'relative'}
                        
                    >
                        <Flex>
                            <Stack>
                                <ScaleFade in={true} initialScale={0.9} delay={0.1}>
                                    <AboutTextHeaderContainer text={"Hi!"} />
                                </ScaleFade>
                                <ScaleFade in={true} initialScale={0.9} delay={0.2}>
                                    <Center>
                                        <AboutTextContainer text={"I'm Vincent. 30-something software developer from Stockholm, currently based in Malmö. All but done with a bachelors degree in Systems Development from Malmö University and currently looking for a job."} />
                                    </Center>
                                </ScaleFade>
                                <ScaleFade in={true} initialScale={0.9} delay={0.3}>
                                    <AboutTextHeaderContainer text={"What am I currently working on?"} />
                                </ScaleFade>
                                <ScaleFade in={true} initialScale={0.9} delay={0.4}>
                                    <Center>
                                        <AboutTextContainer text={"I'm still much in the process of settling in Malmö, all while trying to find myself a context within software development. I'm working as a student mentor during the summer, but all in all I'm mostly just enjoying an entirely new social context and a new setting for summertime."} />
                                    </Center>
                                </ScaleFade>
                                <ScaleFade in={true} initialScale={0.9} delay={0.5}>
                                    <AboutTextHeaderContainer text={"Where am I going?"} />
                                </ScaleFade>
                                <ScaleFade in={true} initialScale={0.9} delay={0.6}>
                                    <Center>
                                        <AboutTextContainer text={"I'd like to find a context for myself within software. My education was really broad in scope so I'd like to find a finesse. I'm thinking mobile development due to the last year of my studies involving a lot of React Native and Kotlin for Android."} />
                                    </Center>
                                </ScaleFade>
                            </Stack>
                            <Center>
                                <ScaleFade in={true} initialScale={0.9} delay={0.3}>
                                    <Image border={'1px'} borderRadius={'full'} ml={'2vh'} boxSize='40vh' objectFit={'cover'} src={me} />
                                </ScaleFade>
                            </Center>
                        </Flex>
                    </Box >
                </Center>
            </ScaleFade >
        </>
    )
}

export default AboutSection