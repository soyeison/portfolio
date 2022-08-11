import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export default function MenuDrawer({ onClose, isOpen }) {
  const { colorMode } = useColorMode();
  return (
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
  );
}
