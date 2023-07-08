import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MdOutlineLanguage } from "react-icons/md";
import { Pages } from '../content/contents';

const NavLink = (props) => (
    <Box color='lightgray' px='2' py='1' rounded={'md'} _hover={{
        textDecoration: 'none',
        color: 'white',
        bg: 'gray.900',
    }}>
        <Link
            to={props.link}>
            {props.name}
        </Link>
    </Box>
);

export default function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const pages = [];
    for (let i = 0; i < Pages[props.language].length; i++) {
        pages.push({
            link: Pages.links[i],
            name: Pages[props.language][i]
        });
    }

    return (
    <>
        <Box bg={useColorModeValue('black')} px={4}>
            <Flex h='16' alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            colorScheme=''
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing='1' alignItems={'center'}>
                <Box color='white' px='4'>Chiashi Lab.</Box>
                <HStack as={'nav'} spacing={[0, 1, 2, 3]} display={{ base: 'none', md: 'flex' }}>
                    {pages.map((data) => (
                        <NavLink key={data.link} link={data.link} name={data.name}>{data.name}</NavLink>
                    ))}
                </HStack>
            </HStack>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton as={Button} leftIcon={<MdOutlineLanguage />} fontSize={[12, 12, 14, 16]} w={[100, 100, 120, 140]}>{props.language}</MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => props.setLanguage("Japanese")}>Japanese</MenuItem>
                            <MenuItem onClick={() => props.setLanguage("English")}>English</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {pages.map((data) => (
                            <NavLink key={data.link} link={data.link} name={data.name}>{data.name}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    </>
    );
}