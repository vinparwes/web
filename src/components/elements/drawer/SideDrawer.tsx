import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

interface SideDrawerArgs {
    isOpen: boolean,
    onClose: any
}

function SideDrawer({ isOpen, onClose }: SideDrawerArgs) {
    const navigation = useNavigate()
    return (
        <>
            <Drawer
                variant={'purple'}
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Stack>
                            <Button onClick={() => {
                                navigation('/about')
                                onClose()
                            }}>
                                About
                            </Button>
                            <Button onClick={() => {
                                navigation('/projects')
                                onClose()
                            }
                            }>
                                Projects
                            </Button>
                            <Button onClick={() => {
                                navigation('/contact')
                                onClose()
                            }}>
                                Contact
                            </Button>
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


export default SideDrawer