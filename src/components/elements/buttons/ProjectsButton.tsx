

import { IconButton } from "@chakra-ui/react"
import { ReactComponent as ProjectsIcon } from "../../../assets/icons/ProjectsIcon.svg"
import { useNavigate } from "react-router-dom"

function ProjectsButton() {
    const navigation = useNavigate()
    return (
        <>
            <IconButton
                variant={'iconButton'}
                transition="bg 0.2s, color 0.2s"
                aria-label="About my projects"
                size={'lg'}
                mr={'1vh'}
                icon={<ProjectsIcon />}
                onClick={() => navigation('/projects')}
            >
            </IconButton>
        </>
    )
}

export default ProjectsButton