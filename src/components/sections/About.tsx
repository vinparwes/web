import { Box, Card } from "@chakra-ui/react"
import ProjectCard from "../elements/card/ProjectCard"
import projects from "../../interface/Projects"

function AboutSection() {
    return (
        <>
            <Box>
                <ProjectCard {...projects.projectROM} delay={0.1} />
                <ProjectCard {...projects.projectROM} delay={0.1} />
            </Box>
        </>
    )
}

export default AboutSection