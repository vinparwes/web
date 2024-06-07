import { Box, Center, Heading, ScaleFade, Stack, useStyleConfig } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

function AboutSection() {
    return (
        <>
            <ScaleFade in={true} initialScale={0.9} delay={0.05}>
                <Center>
                    <Box

                    >
                        <Stack>
                            <ScaleFade in={true} initialScale={0.9} delay={0.1}>
                                <Box w='100%' mb={2} mt={2}>
                                    <Heading size={'lg'} textAlign={'center'} userSelect={'none'}>Hi!</Heading>
                                </Box>
                            </ScaleFade>
                            <ScaleFade in={true} initialScale={0.9} delay={0.2}>
                                <Center>
                                    <Box maxW={'80vh'} mb={2}>
                                        <Text userSelect={'none'}>I'm Vincent. 30-something software developer from Stockholm, currently based in Malmö. All but done with a bachelors degree in Systems Development from Malmö University and currently looking for a job.</Text>
                                    </Box>
                                </Center>
                            </ScaleFade>
                            <ScaleFade in={true} initialScale={0.9} delay={0.3}>
                                <Box p={1} mb={2}>
                                    <Heading size={'lg'} textAlign={'center'} userSelect={'none'}>What am I currently working on?</Heading>
                                </Box>
                            </ScaleFade>
                            <ScaleFade in={true} initialScale={0.9} delay={0.4}>
                                <Center>
                                    <Box maxW={'80vh'} color='white' mb={2}>
                                        <Text userSelect={'none'}>I'm still much in the process of settling in Malmö, all while trying to find myself a context within software development. I'm working as a student mentor during the summer, but all in all I'm mostly just enjoying an entirely new social context and a new setting for summertime. </Text>
                                    </Box>
                                </Center>
                            </ScaleFade>
                            <ScaleFade in={true} initialScale={0.9} delay={0.5}>
                                <Box p={1} w='100%' mb={1}>
                                    <Heading size={'lg'} textAlign={'center'} userSelect={'none'}>Where am I going?</Heading>
                                </Box>
                            </ScaleFade>
                            <ScaleFade in={true} initialScale={0.9} delay={0.6}>
                                <Center>
                                    <Box maxW={'80vh'} mb={2}>
                                        <Text userSelect={'none'}>I'd like to find a context for myself within software. My education was really broad in scope so I'd like to find a finesse. I'm thinking mobile development due to the last year of my studies involving a lot of React Native and Kotlin for Android.</Text>
                                    </Box>
                                </Center>
                            </ScaleFade>
                        </Stack>
                    </Box >
                </Center>
            </ScaleFade >
        </>
    )
}

export default AboutSection