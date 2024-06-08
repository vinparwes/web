import { Box, Center, Flex, ScaleFade, Stack } from "@chakra-ui/react"
import ProjectCard from "../elements/card/ProjectCard"
import projects from "../../interface/Projects"
import TestCard from "../elements/card/TestCard"

function ProjectsSection() {
    return (
        <>
            <ScaleFade in={true} initialScale={0.9} delay={0.05}>
                <Center>
                    <Stack
                        position={'relative'}
                        p={4}
                        borderRadius={20}
                        w={'100vh'}
                        mt={'4vh'}
                        ml={'1vh'}
                        mr={'1vh'}
                    >
                        <Center>
                            <ProjectCard {...projects.projectROM} delay={0.1} />
                        </Center>
                        <Center>
                            <ProjectCard {...projects.webProfile} delay={0.2} />
                        </Center>
                        <Center>
                            <TestCard/>
                        </Center>
                    </Stack >
                </Center>
            </ScaleFade>
        </>
    )
}

export default ProjectsSection