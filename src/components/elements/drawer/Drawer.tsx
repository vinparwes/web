import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
} from '@chakra-ui/react'

function SideDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleMouseEnter = () => { onOpen() }
    const handleMouseLeave = () => { onClose() }

    return (
        <>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    width: '10vh',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    zIndex: 9999,
                    backgroundColor: 'transparent'
                }}
            />
            <Drawer
                isOpen={isOpen}
                placement='left'
                size='xs'
                closeOnEsc={true}
                colorScheme='blackAlpha'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


export default SideDrawer