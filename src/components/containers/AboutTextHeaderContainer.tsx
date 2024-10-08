import {
    Box,
    Center,
    Heading
} from "@chakra-ui/react"


interface AboutTextContainerProps {
    text: string,
}

function AboutTextHeaderContainer({ text }: AboutTextContainerProps) {
    return (
        <>
            <Center>
                <Box w={'fit-content'} mb={2} mt={2} borderRadius={'1vh'}>
                    <Heading size={'lg'} textAlign={'center'} >{text}</Heading>
                </Box>
            </Center>
        </>
    )
}

export default AboutTextHeaderContainer