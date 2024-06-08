
import { IconButton, ScaleFade, useColorMode } from "@chakra-ui/react"
import { ReactComponent as MoonIcon } from "../../../assets/icons/MoonIcon.svg"
import { ReactComponent as SunIcon } from "../../../assets/icons/SunIcon.svg"

function ModeButton() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <ScaleFade initialScale={0.9} in delay={0.5}>
                <IconButton
                    variant={'iconButton'}
                    aria-label={colorMode === 'light' ? "Toggle Dark mode" : "Toggle Light Mode"}
                    size={'lg'}
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                >
                </IconButton>
            </ScaleFade>
        </>
    )
}

export default ModeButton