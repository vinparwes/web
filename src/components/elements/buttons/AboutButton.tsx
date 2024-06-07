import { IconButton, useColorMode } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as AboutIcon } from "../../../assets/icons/InfoIcon.svg"

function AboutButton() {
    const navigation = useNavigate()
    return (
        <>
            <IconButton
                variant={'iconButton'}
                aria-label="About me"
                size={'lg'}
                icon={<AboutIcon />}
                mr={'1vh'}
                onClick={() => navigation('/about')}
            >
            </IconButton>
        </>
    )
}

export default AboutButton