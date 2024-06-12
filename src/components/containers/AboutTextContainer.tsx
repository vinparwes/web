import { Box, Text, useColorModeValue } from "@chakra-ui/react"

interface AboutTextContainerProps {
    text: string,
}

function AboutTextContainer({ text }: AboutTextContainerProps) {
    const bg = useColorModeValue('#FAF9F6', '#0f0f0f')
    return (
        <>
            <Box maxW={'80vh'} bg={bg} borderRadius={'1vh'} border={'1px'}>
                <Text padding={'1vh'} >{text}</Text>
            </Box>
        </>
    )
}

export default AboutTextContainer