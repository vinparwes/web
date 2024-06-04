

import { IconButton } from "@chakra-ui/react"
import { ReactComponent as ProjectsIcon } from "../../../assets/icons/ProjectsIcon.svg"
import { useNavigate } from "react-router-dom"

function ProjectsButton() {
    const navigation = useNavigate()
    return (
        <>
            <IconButton
                aria-label="About my projects"
                size={'lg'}
                icon={<ProjectsIcon />}
                onClick={() => navigation('/projects')}
                >
            </IconButton>
        </>
    )
}

export default ProjectsButton