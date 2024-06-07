

import { Icon } from "@chakra-ui/react"
import { ReactComponent as VIconSvg } from "../../../assets/icons/VIcon.svg"
import { useColorMode } from "@chakra-ui/react"

function VIcon() {
    const { colorMode } = useColorMode()
    return (
        <>
            <Icon
                aria-label="Contact links"
                boxSize={'2em'}
            >
                <VIconSvg fill={colorMode === 'light' ? 'black' : 'white'} />
            </Icon>
        </>
    )
}

export default VIcon