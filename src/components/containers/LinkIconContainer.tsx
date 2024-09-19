import { 
    Box, 
    Flex, 
    IconButton, 
    Link, 
    ScaleFade, 
    Tooltip 
} from "@chakra-ui/react"

interface LinkIconContainerProps {
    ContactIcon: React.ElementType,
    aria: string,
    link: string,
}

function LinkIconContainer({ ContactIcon, aria, link }: LinkIconContainerProps) {
    return (
        <>
            <Flex dir='col' padding={'1vh'}>
                <Box w={'5vh'} h={'5vh'}>
                    <Link aria-label={aria + " link"} isExternal href={link}>
                        <ScaleFade initialScale={0.9} in delay={0.3}>
                            <Tooltip label={aria}>
                                <IconButton
                                    variant={'linkButton'}
                                    transition="bg 0.2s, color 0.2s"
                                    aria-label='Projects'
                                    size={'lg'}
                                    icon={<ContactIcon />}
                                >
                                </IconButton>
                            </Tooltip>
                        </ScaleFade>
                    </Link>
                </Box>
            </Flex>
        </>
    )
}

export default LinkIconContainer