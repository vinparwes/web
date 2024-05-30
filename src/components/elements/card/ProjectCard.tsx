import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Box, Skeleton, Icon, background, CardHeader } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { useEffect } from "react"

interface ProjectCardProps {
    heading: string,
    description: string,
    iconPath: string,
    alt: string,
    frameWorkIcons: React.ElementType[],
    projectUrls: Array<string>
}

function ProjectCard({ heading, description, iconPath, alt, frameWorkIcons, projectUrls }: ProjectCardProps) {

    return (
        <>
            <Card maxW='xs' margin={'10px'} bg={"gray.500"}>
                <CardBody>
                    <Stack mt='3' spacing='3'>
                        <Heading textAlign={'center'} size='md'>{heading}</Heading>
                        <Text>{description}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <Stack mt='3' spacing='3'>
                    <Heading textAlign={'center'} size='md'>{'Technologie(s)'}</Heading>
                    <Stack
                        justifyContent={'center'}
                        direction="row"
                        mb={'3'}
                        divider={<Divider orientation="vertical" />}
                    >
                        {frameWorkIcons.map((Icon, index) => (
                            <Icon onHover={console.log("hovered!")} key={index} width="4vh" height="4vh" />
                        ))
                        }
                    </Stack>
                </Stack>
                <Divider />
                <CardFooter>
                    <Stack>
                        <Heading textAlign={'center'} size='md'>{"Project Link(s)"}</Heading>
                        {projectUrls.map((text, index) => (
                            <a href={text} target="_blank" rel="noreferrer">
                                {text}
                            </a>
                        ))}
                    </Stack>
                </CardFooter>
            </Card>
        </>
    )
}

export default ProjectCard