import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  chakra,
  Flex,
  Link,
  Button,
  useColorMode,
  Spacer,
  ButtonGroup,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  useDisclosure,
  VStack,
  Center,
  Box,
} from '@chakra-ui/react';
import React from 'react';

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = newSize => {
    onOpen();
  };

  return (
    <chakra.header id="header">
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

      <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
        <DrawerOverlay />
        <DrawerContent
          color={colorMode === 'light' ? 'black' : 'white'}
          bg={colorMode === 'light' ? 'white' : 'black'}
        >
          <DrawerCloseButton />
          <Center>
            <DrawerHeader>Menú</DrawerHeader>
          </Center>
          <DrawerBody>
            <VStack>
              <Link href="#SobreMi">
                <Button
                  colorScheme="whiteAlpha"
                  color="brand.primario"
                  onClick={() => onClose()}
                >
                  Sobre mi
                </Button>
              </Link>
              <Link href="#Tecnologias">
                <Button
                  colorScheme="whiteAlpha"
                  color="brand.primario"
                  onClick={() => onClose()}
                >
                  Tecnologías
                </Button>
              </Link>
              <Link href="#Trabajos">
                <Button
                  colorScheme="whiteAlpha"
                  color="brand.primario"
                  onClick={() => onClose()}
                >
                  Trabajos
                </Button>
              </Link>
              <Link href="#Contactame">
                <Button
                  colorScheme="whiteAlpha"
                  color="brand.primario"
                  onClick={() => onClose()}
                >
                  Contactame
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </chakra.header>
  );
}
