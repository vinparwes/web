

import { LinkIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as AboutIcon } from "../../../assets/icons/InfoIcon.svg"

function AboutButton() {
    const navigation = useNavigate()
    return (
        <>
            <IconButton 
                _hover={ { bgColor : 'orange.500'}}
                aria-label="About me"
                size={'lg'}
                icon={<AboutIcon />}
                onClick={() => navigation('/about')}
            >
            </IconButton>
        </>
    )
}

export default AboutButton