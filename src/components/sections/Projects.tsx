import { Center, ScaleFade, Stack } from "@chakra-ui/react"
import ProjectCard from "../elements/card/ProjectCard"
import projects from "../../interface/Projects"

function ProjectsSection() {
    return (
        <>
            <ScaleFade in={true} initialScale={0.9} delay={0.05}>
                <Center>
                    <Stack
                        padding={'2vh'}
                        mt={'2vh'}
                        mr={'2vh'}
                        borderRadius={'2vh'}
                        position={'relative'}
                    >
                        <Center>
                            <ProjectCard {...projects.projectROM} delay={0.1} />
                        </Center>
                        <Center>
                            <ProjectCard {...projects.webProfile} delay={0.2} />
                        </Center>
                    </Stack >
                </Center>
            </ScaleFade>
        </>
    )
}

export default ProjectsSection