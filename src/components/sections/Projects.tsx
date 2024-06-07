import { Box, Center, Flex, ScaleFade } from "@chakra-ui/react"
import ProjectCard from "../elements/card/ProjectCard"
import projects from "../../interface/Projects"

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
                                <ProjectCard projectDetails={projects.projectROM} delay={0.1} />
                            </Center>
                            <Center>
                                <ProjectCard projectDetails={projects.webProfile} delay={0.2} />
                            </Center>
                        </Flex>
                    </Box >
                </Center>
            </ScaleFade>
        </>
    )
}

export default ProjectsSection