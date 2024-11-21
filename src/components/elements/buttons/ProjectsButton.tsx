import { IconButton, ScaleFade, Tooltip } from "@chakra-ui/react";
import { ReactComponent as ProjectsIcon } from "../../../assets/icons/ProjectsIcon.svg";

interface ProjectsButtonProps {
    setCurrentSection: (section: String) => void;
}

const ProjectsButton: React.FC<ProjectsButtonProps> = ({ setCurrentSection }) => {
    return (
        <>
            <ScaleFade initialScale={0.9} in delay={0.3}>
                <Tooltip label={'Projects'}>
                    <IconButton
                        variant={'iconButton'}
                        transition="bg 0.2s, color 0.2s"
                        aria-label='Projects'
                        size={'lg'}
                        mr={'1vh'}
                        icon={<ProjectsIcon />}
                        onClick={() => setCurrentSection('projects')}
                    >
                    </IconButton>
                </Tooltip>
            </ScaleFade>
        </>
    )
}

export default ProjectsButton