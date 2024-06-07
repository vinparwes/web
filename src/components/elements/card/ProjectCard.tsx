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
import { ProjectDetails } from "../../../interface/Projects"

interface ProjectCardProps {
    projectDetails: ProjectDetails,
    delay: number,
}

function ProjectCard({ projectDetails, delay }: ProjectCardProps) {
    return (
        <>
            <ScaleFade in={true} initialScale={0.9} delay={delay}>
                <Card maxW={'sm'} margin={'10px'}>
                    <CardBody justifyContent={'center'}>
                        <Stack mt='3' spacing='3'>
                            <Heading
                                textAlign={'center'}
                                size='md'
                                userSelect={'none'}
                            >
                                {projectDetails.heading}
                            </Heading>
                            <Text
                                userSelect={'none'}
                            >
                                {projectDetails.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider borderColor={'black.500'} />
                    <Stack mt='3' spacing='3'>
                        <Heading
                            userSelect={'none'}
                            textAlign={'center'}
                            size='md'
                        >
                            {projectDetails.frameWorkHeaders.length > 1 ? "Technologies" : "Technology"}
                        </Heading>
                        <Stack
                            justifyContent={'center'}
                            direction="row"
                            mb={'3'}
                            divider={<Divider orientation="vertical" />}
                        >
                            {projectDetails.frameWorkIcons.map((Icon, index) => (
                                <Box ml={3}>
                                    <Popover trigger="hover">
                                        <PopoverTrigger>
                                            <Icon key={index} width="4vh" height="4vh" />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverHeader fontWeight='semibold'>{projectDetails.frameWorkHeaders[index]}</PopoverHeader>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody>
                                                <Link
                                                    isExternal
                                                    href={progLink(projectDetails.frameWorkHeaders[index])}
                                                >
                                                    {progLink(projectDetails.frameWorkHeaders[index])}
                                                </Link>
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
                            <Heading
                                userSelect={'none'}
                                textAlign={'center'}
                                size='md'>
                                {projectDetails.projectUrls.length > 1 ? "Links" : "Link"}
                            </Heading>
                            {projectDetails.projectUrls.map((text, index) => (
                                <Link isExternal href={text}>{text}</Link>
                            ))}
                        </Stack>
                    </CardFooter>
                </Card>
            </ScaleFade>

        </>
    )
}

export default ProjectCard