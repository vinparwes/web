import { Box, Center, Grid, GridItem, Heading, ScaleFade, SimpleGrid, Stack } from "@chakra-ui/react"
import LinkIconContainer from "../containers/LinkIconContainer"
import { ReactComponent as GitHubIcon } from "../../assets/icons/GitHubIcon.svg"
import { ReactComponent as LinkedInIcon } from "../../assets/icons/LinkedInIcon.svg"
import { ReactComponent as MailIcon } from "../../assets/icons/MailIcon.svg"
import MailIconContainer from "../containers/MailIconContainer"

function ContactSection() {
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
                        <Stack>
                            <Center>
                                <Heading mb={'2vh'}>Something cooler coming along shortly..</Heading>
                            </Center>
                            <Center>
                                <SimpleGrid columns={5} w={'50vh'}>
                                    <GridItem w={'100%'}>
                                        <ScaleFade in={true} initialScale={0.9} delay={0.3}>
                                            <LinkIconContainer
                                                aria="Github"
                                                ContactIcon={GitHubIcon}
                                                link="https://github.com/vinparwes"
                                            />
                                        </ScaleFade>
                                    </GridItem>
                                    <GridItem w={'100%'}>
                                        <ScaleFade in={true} initialScale={0.9} delay={0.4}>
                                            <LinkIconContainer
                                                aria="LinkedIn"
                                                ContactIcon={LinkedInIcon}
                                                link="https://www.linkedin.com/in/vincent-parik-westlund-1815b1231"
                                            />
                                        </ScaleFade>
                                    </GridItem>
                                    <GridItem w={'100%'}>
                                        <ScaleFade in={true} initialScale={0.9} delay={0.5}>
                                            <MailIconContainer
                                                aria="Mail"
                                                ContactIcon={MailIcon}
                                                link="vincentparikwestlund@gmail.com"
                                            />
                                        </ScaleFade>
                                    </GridItem>
                                </SimpleGrid>
                            </Center>
                        </Stack>
                    </Box>
                </Center>
            </ScaleFade>
        </>
    )
}

export default ContactSection