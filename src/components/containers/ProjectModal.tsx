import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Image,
    ScaleFade,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Center
} from '@chakra-ui/react'

interface ProjectModalProps {
    isOpen: boolean,
    onClose: () => void,
    header: string,
    images: Array<string>
}

function ProjectModal({ isOpen, onClose, header, images }: ProjectModalProps) {
    return (
        <>
            <ScaleFade in={true} initialScale={0.9}>
                <Modal isCentered={true} size={'xl'} isOpen={isOpen} onClose={onClose} closeOnEsc={true}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{header}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody >
                            <Tabs>
                                <TabList>
                                    {images.map((image, index) => (
                                        <Tab>Image {index + 1}</Tab>
                                    ))
                                    }
                                </TabList>
                                <TabPanels>
                                    {images.map((image, index) => (
                                        <TabPanel>
                                            <Center>
                                                <Image maxW={'25vh'} src={image}></Image>
                                            </Center>
                                        </TabPanel>
                                    ))
                                    }
                                </TabPanels>
                            </Tabs>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </ScaleFade>
        </>
    )
}

export default ProjectModal