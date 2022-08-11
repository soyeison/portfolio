import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  chakra,
  Link,
  Button,
  useColorMode,
  Spacer,
  ButtonGroup,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import ResponsiveNavBar from './ResponsiveNavBar';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <chakra.header id="header">
      <ResponsiveNavBar />
      <Box
        minWidth="max-content"
        alignItems="center"
        gap="2"
        marginTop="-10px"
        paddingTop="10px"
        marginX="6%"
        display={{ base: 'none', sm: 'flex' }}
        bg={colorMode === 'light' ? 'white' : 'black'}
        position="fixed"
        w="90%"
      >
        <Box justifyContent="space-between">
          <ButtonGroup gap="2">
            <Link href="#SobreMi">
              <Button colorScheme="ghost" color="brand.primario">
                Sobre mi
              </Button>
            </Link>
            <Link href="#Tecnologias">
              <Button colorScheme="whiteAlpha" color="brand.primario">
                Tecnologías
              </Button>
            </Link>
            <Link href="#Trabajos">
              <Button colorScheme="whiteAlpha" color="brand.primario">
                Trabajos
              </Button>
            </Link>
            <Link href="#Contactame">
              <Button colorScheme="whiteAlpha" color="brand.primario">
                Contactame
              </Button>
            </Link>
          </ButtonGroup>
        </Box>

        <Spacer />

        <Box>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Box>
    </chakra.header>
  );
}
