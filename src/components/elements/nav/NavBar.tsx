import {
    Flex,
    Stack,
} from '@chakra-ui/react';
import AboutButton from '../buttons/AboutButton';
import ContactButton from '../buttons/ContactButton';
import ProjectsButton from '../buttons/ProjectsButton';
import ModeButton from '../buttons/ModeButton';
import VIcon from '../react_icons/VIcon';


function NavBar() {
    return (
        <>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} position={'relative'}>
                <Flex alignItems={'center'} ml={'2vh'}>
                    <Stack direction={'row'} spacing={7}>
                        <VIcon />
                    </Stack>
                </Flex>
                <Flex alignItems={'center'}>
                    <AboutButton />
                    <ProjectsButton />
                    <ContactButton />
                </Flex >
                <Flex alignItems={'center'} mr={'1vh'}>
                    <Stack direction={'row'} spacing={7}>
                        <ModeButton></ModeButton>
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}

export default NavBar