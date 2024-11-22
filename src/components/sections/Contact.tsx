import {
    Box,
    Center,
    Heading,
    ScaleFade,
    VStack,
    Stack,
} from "@chakra-ui/react";
import LinkIconContainer from "../containers/LinkIconContainer";
import { ReactComponent as GitHubIcon } from "../../assets/icons/GitHubIcon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/LinkedInIcon.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/MailIcon.svg";
import MailIconContainer from "../containers/MailIconContainer";

function ContactSection() {
    return (
        <>
            <ScaleFade in={true} initialScale={0.9} delay={0.05}>
                <Center>
                    <Box
                        padding={"2vh"}
                        mt={"2vh"}
                        mr={"1vh"}
                        borderRadius={"2vh"}
                        position={"relative"}
                    >
                        <Stack>
                            <Center>
                                <Heading mb={"2vh"}>{"Get in touch! :)"}</Heading>
                            </Center>
                            <Center>
                                <VStack align="stretch">
                                    <ScaleFade in={true} initialScale={0.9} delay={0.3}>
                                        <LinkIconContainer
                                            aria="Github"
                                            ContactIcon={GitHubIcon}
                                            link="https://github.com/vinparwes"
                                        />
                                    </ScaleFade>
                                    <ScaleFade in={true} initialScale={0.9} delay={0.4}>
                                        <LinkIconContainer
                                            aria="LinkedIn"
                                            ContactIcon={LinkedInIcon}
                                            link="https://www.linkedin.com/in/vincent-parik-westlund-1815b1231"
                                        />
                                    </ScaleFade>
                                    <ScaleFade in={true} initialScale={0.9} delay={0.5}>
                                        <MailIconContainer
                                            aria="Mail"
                                            ContactIcon={MailIcon}
                                            link="vincentparikwestlund@gmail.com"
                                        />
                                    </ScaleFade>
                                </VStack>
                            </Center>
                        </Stack>
                    </Box>
                </Center>
            </ScaleFade>
        </>
    );
}

export default ContactSection;
