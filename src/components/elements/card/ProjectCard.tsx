import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Box, Skeleton, Icon } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { useEffect } from "react"

interface ProjectCardProps {
    heading: string,
    description: string,
    iconPath: string,
    alt: string,
    frameWorkIcons: Array<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>,
    projectUrls: Array<string>
}

function ProjectCard({ heading, description, iconPath, alt, frameWorkIcons, projectUrls }: ProjectCardProps) {
    return (
        <>
            <Card maxW='xs' margin={'10px'}>
                    <CardBody>
                        <Image
                            src={iconPath}
                            alt={alt}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{heading}</Heading>
                            <Text>{description}</Text>
                        </Stack>
                        <Box mt='4'>
                            {frameWorkIcons.map((IconComponent, index) => (
                                <Box key={index} boxSize='24px' mr='2'>
                                    <IconComponent />
                                </Box>
                            ))}
                        </Box>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Stack>
                            {projectUrls.map((text, index) => (
                                <Text
                                    key={index}
                                    >
                                    {text}
                                </Text>
                            ))}
                        </Stack>
                    </CardFooter>
            </Card>
        </>
    )
}

export default ProjectCard