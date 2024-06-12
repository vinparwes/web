
import { IconButton, ScaleFade, Tooltip } from "@chakra-ui/react"
import { ReactComponent as LinkIcon } from "../../../assets/icons/ImageIcon.svg"

interface ImagesButtonProps {
    setOpenModal: () => void;
}

function ImagesButton({ setOpenModal }: ImagesButtonProps) {
    return (
        <>
            <ScaleFade initialScale={0.9} in delay={0.4}>
                <Tooltip label={'Image Gallery'}>
                    <IconButton
                        alignSelf={''}
                        variant={'linkButton'}
                        aria-label="Project Images"
                        size={'lg'}
                        icon={<LinkIcon />}
                        onClick={setOpenModal}
                    >
                    </IconButton>
                </Tooltip>
            </ScaleFade>
        </>
    )
}

export default ImagesButton