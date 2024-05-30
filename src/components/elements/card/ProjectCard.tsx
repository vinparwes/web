import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Box, Skeleton, Icon, background, CardHeader, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

interface ProjectCardProps {
    heading: string,
    description: string,
    iconPath: string,
    alt: string,
    frameWorkIcons: React.ElementType[],
    frameWorkHeaders: Array<string>,
    projectUrls: Array<string>
}

function ProjectCard({ heading, description, iconPath, alt, frameWorkIcons, frameWorkHeaders, projectUrls }: ProjectCardProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Card maxW={'sm'} margin={'10px'}>
                <Skeleton
                    isLoaded={isLoaded}
                    fadeDuration={0.5}
                >
                    <CardBody justifyContent={'center'}>
                        <Stack mt='3' spacing='3'>
                            <Heading textAlign={'center'} size='md' userSelect={'none'}>{heading}</Heading>
                            <Text userSelect={'none'}>{description}</Text>
                        </Stack>

                    </CardBody>
                    <Divider borderColor={'black.500'} />
                    <Stack mt='3' spacing='3'>
                        <Heading userSelect={'none'} textAlign={'center'} size='md'>{'Technologie(s)'}</Heading>
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
                                                {frameWorkHeaders[index]}
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
                            <Heading userSelect={'none'} textAlign={'center'} size='md'>{"Project Link(s)"}</Heading>
                            {projectUrls.map((text, index) => (
                                <a href={text} target="_blank" rel="noreferrer">
                                    {text}
                                </a>
                            ))}
                        </Stack>
                    </CardFooter>
                </Skeleton>
            </Card>

        </>
    )
}

export default ProjectCard