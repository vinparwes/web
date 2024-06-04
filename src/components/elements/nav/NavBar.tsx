import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,

    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    HStack,
} from '@chakra-ui/react';
import AboutButton from '../buttons/AboutButton';
import ContactButton from '../buttons/ContactButton';
import ProjectsButton from '../buttons/ProjectsButton';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box px={4} position={'relative'}>
                <Flex h={'6vh'} justifyContent={'center'}>
                    <Center>
                        <HStack spacing={8} alignItems={'center'}>
                            <AboutButton/>
                            <ProjectsButton/>
                            <ContactButton/>
                        </HStack>
                    </Center>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box >

            <Box p={4}>Main Content Here</Box>
        </>
    );
}

export default NavBar