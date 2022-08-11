import {
  Flex,
  IconButton,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import MenuDrawer from './MenuDrawer';

export default function ResponsiveNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = newSize => {
    onOpen();
  };
  return (
    <>
      <Flex justifyContent="space-between" marginTop="10px" marginX="3%">
        <IconButton
          aria-label="Menu responsive"
          icon={<HamburgerIcon />}
          onClick={() => handleClick()}
          display={{ base: 'flex', sm: 'none' }}
          variant="ghost"
          position="fixed"
        />
        <IconButton
          aria-label="Modo oscuro"
          variant="outline"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          display={{ base: 'flex', sm: 'none' }}
          marginLeft="90%"
        />
      </Flex>

      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
}
