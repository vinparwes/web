
import { IconButton } from "@chakra-ui/react"
import { ReactComponent as LinkIcon } from "../../../assets/icons/LinkIcon.svg"
import { useNavigate } from "react-router-dom"


function ContactButton() {
    const navigation = useNavigate()
    return (
        <>
            <IconButton
                variant={'iconButton'}
                aria-label="Contact links"
                size={'lg'}
                icon={<LinkIcon />}
                onClick={() => navigation('/contact')}
            >
            </IconButton>
        </>
    )
}

export default ContactButton