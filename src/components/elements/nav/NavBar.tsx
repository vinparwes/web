import {
    Flex,
    Stack,
} from '@chakra-ui/react';
import AboutButton from '../buttons/AboutButton';
import ContactButton from '../buttons/ContactButton';
import ProjectsButton from '../buttons/ProjectsButton';
import ModeButton from '../buttons/ModeButton';
import VIcon from '../react_icons/VIcon';


interface NavBarProps {
    setSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setSection: setCurrentSection }) => {
    return (
        <>

            <Flex
                h={16}
                alignItems={'center'}
                justifyContent={'space-between'}
                position={'relative'}
            >
                <Flex alignItems={'center'} ml={'2vh'}>
                    <Stack direction={'row'}>
                        <VIcon />
                    </Stack>
                </Flex>
                <Flex alignItems={'center'}>
                    <AboutButton setCurrentSection={() => setCurrentSection('about')} />
                    <ProjectsButton setCurrentSection={() => setCurrentSection('projects')} />
                    <ContactButton setCurrentSection={() => setCurrentSection('contact')} />
                </Flex >
                <Flex alignItems={'center'} mr={'1vh'}>
                    <Stack direction={'row'}>
                        <ModeButton></ModeButton>
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}

export default NavBar