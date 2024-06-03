import {
    Card,
    CardBody,
    Stack,
    Heading,
    Divider,
    CardFooter,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Link,
    ScaleFade,
    Box
} from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { progLink } from "../../../interface/ProgrammingLinks"

interface ProjectCardProps {
    heading: string,
    description: string,
    iconPath: string,
    alt: string,
    frameWorkIcons: React.ElementType[],
    frameWorkHeaders: Array<string>,
    projectUrls: Array<string>
    delay: number
}

function ProjectCard({ heading, description, frameWorkIcons, frameWorkHeaders, projectUrls, delay }: ProjectCardProps) {
    return (
        <>
            <ScaleFade in={true} initialScale={0.9} delay={delay}>
                <Card maxW={'sm'} margin={'10px'}>
                    <CardBody justifyContent={'center'}>
                        <Stack mt='3' spacing='3'>
                            <Heading textAlign={'center'} size='md' userSelect={'none'}>{heading}</Heading>
                            <Text userSelect={'none'}>{description}</Text>
                        </Stack>
                    </CardBody>
                    <Divider borderColor={'black.500'} />
                    <Stack mt='3' spacing='3'>
                        <Heading userSelect={'none'} textAlign={'center'} size='md'>{frameWorkHeaders.length > 1 ? "Technologies" : "Technology"}</Heading>
                        <Stack
                            justifyContent={'center'}
                            direction="row"
                            mb={'3'}
                            divider={<Divider orientation="vertical" />}
                        >
                            {frameWorkIcons.map((Icon, index) => (
                                <Box ml={3}>
                                    <Popover trigger="hover">
                                        <PopoverTrigger>
                                            <Icon key={index} width="4vh" height="4vh" />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverHeader fontWeight='semibold'>{frameWorkHeaders[index]}</PopoverHeader>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody>
                                                <Link isExternal href={progLink(frameWorkHeaders[index])}>{progLink(frameWorkHeaders[index])}</Link>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </Box>
                            ))
                            }
                        </Stack>

                    </Stack>
                    <Divider borderColor={'black.500'} />
                    <CardFooter>
                        <Stack>
                            <Heading userSelect={'none'} textAlign={'center'} size='md'>{projectUrls.length > 1 ? "Links" : "Link"}</Heading>
                            {projectUrls.map((text, index) => (
                                <a href={text} target="_blank" rel="noreferrer">
                                    {text}
                                </a>
                            ))}
                        </Stack>
                    </CardFooter>
                </Card>
            </ScaleFade>

        </>
    )
}

export default ProjectCard