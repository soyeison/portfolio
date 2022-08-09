import {
  HStack,
  Box,
  Image,
  Heading,
  Text,
  Button,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Foto from '../../resources/images/Foto de perfil_Grises.JPG';

export default function SobreMi() {
  return (
    <>
      <HStack
        id="SobreMi"
        justifyContent="center"
        spacing={10}
        marginTop={{ md: '100px', lg: '150px' }}
        direction={['column', 'row']}
      >
        <Box
          boxSize="xl"
          marginTop="6%"
          display={{ base: 'none', sm: 'block' }}
        >
          <Image src={Foto} alt="Foto de perfil" />
        </Box>
        <Box maxW="32rem" paddingTop="60px">
          <Heading mb={4} size="lg" color="brand.tercero">
            Sobre mí
          </Heading>
          <Text fontSize="xl">
            Desarrollador Fullstack certificado. Enfocado en el trabajo en
            equipo y la correcta estructuración de los proyectos.
          </Text>
          <br />
          <Text fontSize="xl">
            Estudié física durante un par de años donde adquirí el gusto por la
            programación comenzando a programar con Python por lo que poseo un
            gran pensamiento lógico y crítico además de una gran capacidad de
            aprendizaje y trabajo en equipo.
          </Text>
          <Link
            href="https://drive.google.com/file/d/1SzDj0Osj1iB7Tk0O2rmeZ5WudUYEq_fE/view?usp=sharing"
            isExternal
          >
            <Button
              variant="solid"
              size="md"
              bg="brand.primero"
              color="brand.segundo"
              mt="24px"
              fontWeight="light"
            >
              Descargar CV
            </Button>
          </Link>
        </Box>
      </HStack>
    </>
  );
}
