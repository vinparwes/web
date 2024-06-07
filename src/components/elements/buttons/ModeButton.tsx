
import { IconButton, useColorMode } from "@chakra-ui/react"
import { ReactComponent as MoonIcon } from "../../../assets/icons/MoonIcon.svg"
import { ReactComponent as SunIcon } from "../../../assets/icons/SunIcon.svg"

function ModeButton() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <IconButton
                variant={'iconButton'}
                aria-label={colorMode === 'light' ? "Toggle Dark mode" : "Toggle Light Mode"}
                size={'lg'}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
            >
            </IconButton>
        </>
    )
}

export default ModeButton