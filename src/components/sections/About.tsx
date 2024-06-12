import { Box, Center, Flex, Image, ScaleFade, Stack } from "@chakra-ui/react"
import AboutTextContainer from "../containers/AboutTextContainer"
import me from '../../assets/images/me.jpg'
import AboutTextHeaderContainer from "../containers/AboutTextHeaderContainer"

function AboutSection() {
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

                            </Stack>
                        </Flex>
                    </Box >
                </Center>
            </ScaleFade >
        </>
    )
}

export default AboutSection