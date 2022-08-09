import React from 'react';
import {
  Center,
  VStack,
  Text,
  Link,
  IconButton,
  Icon,
  Box,
  useColorMode,
} from '@chakra-ui/react';
import { GoMarkGithub } from 'react-icons/go';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiFillCopyrightCircle } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export default function Derechos() {
  const { colorMode } = useColorMode();
  const cambioBg = colorMode === 'light' ? 'brand.primero' : 'brand.segundo';
  const cambioTx = colorMode === 'light' ? 'brand.segundo' : 'brand.primero';
  return (
    <>
      <Box bg={cambioBg}>
        <VStack>
          <Center>
            <Text color={cambioTx}>Soyeison</Text>
          </Center>
          <Center>
            <Link href="https://github.com/soyeison" isExternal>
              <IconButton
                aria-label="Github icon"
                icon={<GoMarkGithub />}
                fontSize="25px"
                variant="ghost"
                color={cambioTx}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/yeisonvillegas/" isExternal>
              <IconButton
                aria-label="Linkedin icon"
                icon={<TiSocialLinkedinCircular />}
                fontSize="38px"
                variant="ghost"
                color={cambioTx}
              />
            </Link>
            <Link href="https://wa.link/pfzds1" isExternal>
              <IconButton
                aria-label="Linkedin icon"
                icon={<AiOutlineWhatsApp />}
                fontSize="32px"
                variant="ghost"
                color={cambioTx}
              />
            </Link>
          </Center>
          <Center>
            <Text color={cambioTx}>Todos los derechos reservados</Text>
            <Icon as={AiFillCopyrightCircle} color={cambioTx} />
            <Text color={cambioTx}> 2022 Soyeison ❤️ </Text>
          </Center>
        </VStack>
      </Box>
    </>
  );
}
