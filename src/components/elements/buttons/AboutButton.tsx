import { IconButton, ScaleFade, Tooltip } from "@chakra-ui/react";
import { ReactComponent as AboutIcon } from "../../../assets/icons/InfoIcon.svg";

interface AboutButtonProps {
    setCurrentSection: (section: String) => void;
}

const AboutButton: React.FC<AboutButtonProps> = ({ setCurrentSection }) => {
    return (
        <>
            <ScaleFade initialScale={0.9} in delay={0.2}>
                <Tooltip label={'About'}>
                    <IconButton
                        variant={'iconButton'}
                        aria-label="About me"
                        size={'lg'}
                        icon={<AboutIcon />}
                        mr={'1vh'}
                        onClick={() => setCurrentSection('about')}
                    >
                    </IconButton>
                </Tooltip >
            </ScaleFade>
        </>
    )
}

export default AboutButton