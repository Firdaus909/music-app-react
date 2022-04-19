import React, { ReactNode, ReactText } from 'react';
import { NavLink } from 'react-router-dom';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiMenu,
  FiMusic,
  FiChevronDown,
  FiSun,
  FiMoon,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { login, logout } from '../helper/auth';
import { useAppSelector } from '../store/hooks';
import UserType from '../types/user';

interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome, url: '/dashboard' },
  { name: 'New Released', icon: FiTrendingUp, url: '/new-released' },
  { name: 'Search Playlist', icon: FiCompass, url: '/search' },
  { name: 'My Playlist', icon: FiMusic, url: '/my-playlist' },
];

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  url: string;
}
const NavItem = ({ icon, children, url, ...rest }: NavItemProps) => (
  <Link
    as={NavLink}
    to={url}
    className="nav-link"
    style={{ textDecoration: 'none' }}
    _focus={{ boxShadow: 'none' }}
  >
    <Flex
      align="center"
      p="4"
      mx="4"
      my="1"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: useColorModeValue('cyan.400', 'cyan.600'),
        color: 'white',
      }}
      sx={{
        '.nav-link[aria-current=page] &': {
          bg: useColorModeValue('cyan.400', 'cyan.600'),
          color: 'white',
        },
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  </Link>
);

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
  toggleColorMode: () => void;
  user: UserType | null;
}
const MobileNav = ({ onOpen, toggleColorMode, user, ...rest }: MobileProps) => (
  <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    height="20"
    alignItems="center"
    bg={useColorModeValue('white', 'gray.900')}
    borderBottomWidth="1px"
    borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    justifyContent={{ base: 'space-between', md: 'flex-end' }}
    {...rest}
  >
    <IconButton
      display={{ base: 'flex', md: 'none' }}
      onClick={onOpen}
      variant="outline"
      aria-label="open menu"
      icon={<FiMenu />}
    />

    <Text
      display={{ base: 'flex', md: 'none' }}
      fontSize="2xl"
      fontFamily="monospace"
      fontWeight="bold"
    >
      Logo
    </Text>

    <HStack spacing={{ base: '0', md: '6' }}>
      <Flex
        as={Button}
        justifyContent="center"
        alignItems="center"
        size="sm"
        onClick={toggleColorMode}
      >
        <Icon as={useColorModeValue(FiMoon, FiSun)} />
      </Flex>
      <Flex alignItems="center">
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: 'none' }}
          >
            <HStack>
              <Avatar size="sm" src={user?.images[0].url} />
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">{user?.display_name}</Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue('white', 'gray.900')}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            {user ? (
              <>
                <MenuItem as={NavLink} to="/profile">
                  Profile
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={logout}>Sign out</MenuItem>
              </>
            ) : (
              <MenuItem onClick={login}>Login</MenuItem>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  </Flex>
);

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => (
  <Box
    bg={useColorModeValue('white', 'gray.900')}
    borderRight="1px"
    borderRightColor={useColorModeValue('gray.200', 'gray.700')}
    w={{ base: 'full', md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        DarkShadow
      </Text>
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    </Flex>
    {LinkItems.map((link) => (
      <NavItem key={link.name} icon={link.icon} url={link.url}>
        {link.name}
      </NavItem>
    ))}
  </Box>
);

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const user = useAppSelector((state) => state.user.user);
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav
        onOpen={onOpen}
        toggleColorMode={toggleColorMode}
        user={user}
      />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
}
