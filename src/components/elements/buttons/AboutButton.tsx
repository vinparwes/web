import { IconButton, ScaleFade, Tooltip } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as AboutIcon } from "../../../assets/icons/InfoIcon.svg"

function AboutButton() {
    const navigation = useNavigate()
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
                        onClick={() => navigation('/about')}
                    >
                    </IconButton>
                </Tooltip >
            </ScaleFade>
        </>
    )
}

export default AboutButton