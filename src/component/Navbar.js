import {
    Box,
    Button,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MdOutlineLanguage } from "react-icons/md";
import { Pages } from '../content/util';
import { useNavigate } from 'react-router-dom';
import { chiashiLabStyle, menuItemStyle, navLinkStackStyle, navLinkStyle } from '../style/navbar';

export default function Navbar(props) {
    const pages = [];
    for (let i = 0; i < Pages[props.language].length; i++) {
        pages.push({
            link: Pages.links[i],
            name: Pages[props.language][i]
        });
    }

    const navigate = useNavigate();

    return (
    <>
        <Box bg={useColorModeValue('black')} px={4}>
            <Flex h='16' alignItems={'center'} justifyContent={'space-between'}>
                <Flex alignItems={'center'} display={{ md: 'none' }}>
                    <Menu>
                        <MenuButton as={Button} leftIcon={<HamburgerIcon />} colorScheme='black' />
                        <MenuList bg='black'>
                            {pages.map((data) => (
                                <MenuItem onClick={() => navigate(data.link)} key={data.link} sx={menuItemStyle} >{data.name}</MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>
                
                <HStack>
                    <Box sx={chiashiLabStyle}>Chiashi Lab.</Box>
                    <HStack sx={navLinkStackStyle}>
                        {pages.map((data) => (
                            <Box sx={navLinkStyle} key={data.link}>
                                <Link to={data.link}>
                                    <Text mx='3' my='1'>{data.name}</Text></Link>
                            </Box>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton as={Button} leftIcon={<MdOutlineLanguage />} fontSize={{base: 16, md: 10, lg: 16}} w={{base: 130, md: 90, lg: 140}}>{props.language}</MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => props.setLanguage("Japanese")}>Japanese</MenuItem>
                            <MenuItem onClick={() => props.setLanguage("English")}>English</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    </>
    );
}