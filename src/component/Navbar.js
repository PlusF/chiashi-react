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
import { Link, useLocation } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MdOutlineLanguage } from "react-icons/md";
import { Pages } from '../content/util';
import { useNavigate } from 'react-router-dom';
import { chiashiLabStyle, menuItemStyle, navLinkStackStyle, navLinkStyle } from '../style/navbar';


// スマホ用のハンバーガーメニュー
function HamburgerMenu(props) {
    const navigate = useNavigate();

    return (
    <Flex alignItems={'center'} display={{ md: 'none' }}>
        <Menu>
            <MenuButton as={Button} leftIcon={<HamburgerIcon />} colorScheme='black' />
            <MenuList bg='black'>
                {props.pages.map((data) => (
                    <MenuItem onClick={() => navigate(data.link)} key={data.link} sx={menuItemStyle} isDisabled={props.location.pathname===data.link}>{data.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    </Flex>
    )
}


export default function Navbar(props) {
    const pages = [];
    for (const key of Object.keys(Pages[props.language])) {
        pages.push({name: Pages[props.language][key], link: Pages.links[key]})
    }
    const location = useLocation();

    return (
    <>
        <Box bg={useColorModeValue('black')} px={4}>
            <Flex h='16' alignItems={'center'} justifyContent={'space-between'}>
                <HamburgerMenu pages={pages} location={location} />
                <HStack>
                    <Box>
                        <Link to='/chiashi/react/'>
                            <Button sx={chiashiLabStyle}><Text zIndex="1">Chiashi Lab.</Text></Button>
                        </Link>
                    </Box>
                    <HStack sx={navLinkStackStyle}>
                        {pages.map((data) => (
                            <Box key={data.link}>
                                <Link to={data.link}>
                                    <Button sx={navLinkStyle} isDisabled={location.pathname===data.link}>{data.name}</Button>
                                </Link>
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