import { Box, Center, Flex, Heading, ScaleFade, Stack } from "@chakra-ui/react"
import ProjectCard from "../elements/card/ProjectCard"
import projects from "../../interface/Projects"
import { delay } from "framer-motion"


function ProjectsSection() {
    return (
        <>
            <ScaleFade in={true} initialScale={0.9} delay={0.05}>
                <Center>
                    <Box
                        position={'relative'}
                        p={4}
                        borderRadius={20}
                        w={'100vh'}
                        ml={'1vh'}
                        mr={'1vh'}
                    >
                        <Flex dir="col">

                            <Center>
                                <ProjectCard {...projects.projectROM} delay={0.1} />
                            </Center>


                            <Center>
                                <ProjectCard {...projects.webProfile} delay={0.2} />
                            </Center>
                        </Flex>
                    </Box >
                </Center>
            </ScaleFade>
        </>
    )
}

export default ProjectsSection