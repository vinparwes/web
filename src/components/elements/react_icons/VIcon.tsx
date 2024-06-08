

import { Icon, ScaleFade } from "@chakra-ui/react"
import { ReactComponent as VIconSvg } from "../../../assets/icons/VIcon.svg"
import { useColorMode } from "@chakra-ui/react"

function VIcon() {
    const { colorMode } = useColorMode()
    return (
        <>
            <ScaleFade initialScale={0.9} in delay={0.1}>
                <Icon
                    aria-label="Contact links"
                    boxSize={'2em'}
                >
                    <VIconSvg fill={colorMode === 'light' ? 'black' : 'white'} />
                </Icon>
            </ScaleFade>
        </>
    )
}

export default VIcon