import { Box } from "@chakra-ui/react"
import projects from "../../interface/Projects"
import ProjectCard from "../elements/card/ProjectCard"


function ContactSection() {
    return (
        <>
            <Box>
                <ProjectCard {...projects.projectROM} delay={0.1} />
                <ProjectCard {...projects.projectROM} delay={0.1} />
            </Box>
        </>
    )
}

export default ContactSection