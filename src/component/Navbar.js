import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MdOutlineLanguage } from "react-icons/md";
import { Links } from '../constants/contents';

const NavLink = ({children}) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`#${children}`}>
    {children}
  </Link>
);

export default function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                Chiashi Lab.
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links[props.language].map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
                <MenuButton as={Button} leftIcon={<MdOutlineLanguage />}>
                    {props.language}
                </MenuButton>
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
            {Links[props.language].map((link) => (
                <NavLink key={link}>{link}</NavLink>
            ))}
            </Stack>
        </Box>
        ) : null}
      </Box>
    </>
  );
}