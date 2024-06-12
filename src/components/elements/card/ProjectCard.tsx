import {
    Card,
    CardBody,
    Stack,
    Heading,
    Divider,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Link,
    ScaleFade,
    Box,
    CardHeader,
    Flex,
} from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { progLink } from "../../../interface/ProgrammingLinks"
import ImagesButton from "../buttons/ImagesButton"
import { useState } from "react"
import ProjectModal from "../../containers/ProjectModal"

interface ProjectCardProps {
    heading: string,
    description: Array<string>,
    iconPath: string,
    alt: string,
    frameWorkIcons: React.ElementType[],
    frameWorkHeaders: Array<string>,
    projectUrls: Array<string>
    delay: number
    images: Array<string>
}

function ProjectCard({ heading, description, frameWorkIcons, frameWorkHeaders, projectUrls, delay, images }: ProjectCardProps) {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <ScaleFade in={true} initialScale={0.9} delay={delay}>
                <Card maxW={'75vh'} mb={'1vh'}>
                    <CardHeader>
                        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} position={'relative'}>
                            <Heading size='lg'>{heading}</Heading>
                            {images.length > 0 && (
                                <>
                                    <ImagesButton setOpenModal={() => setOpenModal(true)}></ImagesButton>
                                </>
                            )}
                        </Flex>
                    </CardHeader>
                    <Divider borderColor={'black.500'} />
                    <CardBody justifyContent={'center'}>
                        <Stack spacing='3'>
                            {description.map((text, index) => (
                                <Text>{text}</Text>
                            ))}
                        </Stack>
                    </CardBody>
                    <Divider borderColor={'black.500'} />
                    <Stack mt='3' spacing='3'>
                        <Heading textAlign={'center'} size='md'>{frameWorkHeaders.length > 1 ? "Technologies" : "Technology"}</Heading>
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
                    <Stack mt={'1vh'} mb={'3vh'}>
                        <Heading textAlign={'center'} size='md' >{projectUrls.length > 1 ? "Links" : "Link"}</Heading>
                        {projectUrls.map((text, index) => (
                            <Link textAlign={'center'} isExternal href={text}>{text}</Link>
                        ))}
                    </Stack>
                    {images.length > 0 && (
                        <>
                            <ProjectModal
                                isOpen={openModal}
                                onClose={() => setOpenModal(false)}
                                header={heading}
                                images={images}
                            />
                        </>
                    )}
                </Card>
            </ScaleFade>
        </>
    )
}

export default ProjectCard