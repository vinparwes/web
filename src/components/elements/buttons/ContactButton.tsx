
import { IconButton, ScaleFade, Tooltip } from "@chakra-ui/react"
import { ReactComponent as LinkIcon } from "../../../assets/icons/LinkIcon.svg"
import { useNavigate } from "react-router-dom"


function ContactButton() {
    const navigation = useNavigate()
    return (
        <>
            <ScaleFade initialScale={0.9} in delay={0.4}>
                <Tooltip label={'Links, socials e.g'}>
                    <IconButton
                        variant={'iconButton'}
                        aria-label="Contact links"
                        size={'lg'}
                        icon={<LinkIcon />}
                        onClick={() => navigation('/contact')}
                    >
                    </IconButton>
                </Tooltip>
            </ScaleFade>
        </>
    )
}

export default ContactButton