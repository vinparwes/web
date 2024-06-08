

import { IconButton, ScaleFade, Tooltip } from "@chakra-ui/react"
import { ReactComponent as ProjectsIcon } from "../../../assets/icons/ProjectsIcon.svg"
import { useNavigate } from "react-router-dom"

function ProjectsButton() {
    const navigation = useNavigate()
    return (
        <>
            <ScaleFade initialScale={0.9} in delay={0.3}>
                <Tooltip label={'Behold.. My stuff'}>
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
                </Tooltip>
            </ScaleFade>
        </>
    )
}

export default ProjectsButton