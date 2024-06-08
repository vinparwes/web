import { Box, Center, Heading, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"


interface AboutTextContainerProps {
    text: string,
}

function AboutTextHeaderContainer({ text }: AboutTextContainerProps) {
    return (
        <>
            <Center>
                <Box w={'fit-content'} mb={2} mt={2} borderRadius={'1vh'}>
                    <Heading size={'lg'} textAlign={'center'} userSelect={'none'}>{text}</Heading>
                </Box>
            </Center>
        </>
    )
}

export default AboutTextHeaderContainer