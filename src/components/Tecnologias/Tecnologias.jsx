import React from 'react';
import { HStack, Box, Image, Heading, Text } from '@chakra-ui/react';
import Foto from '../../resources/images/software-developer.jpg';
import { CheckIcon } from '@chakra-ui/icons';

const listado = [
  'React JS',
  'Redux',
  'React Native',
  'HTML',
  'CSS',
  'NodeJS',
  'Express',
  'SQL',
];

export default function Tecnologias() {
  return (
    <>
      <HStack
        id="Tecnologias"
        justifyContent="center"
        spacing={10}
        marginTop={{ md: '100px', lg: '150px' }}
      >
        <Box
          boxSize="xl"
          marginTop="6%"
          display={{ base: 'none', sm: 'block' }}
        >
          <Image src={Foto} alt="Foto de perfil" height="74vh" />
        </Box>
        <Box maxW="32rem" paddingTop="60px">
          <Heading mb={4} size="lg" color="brand.tercero">
            Tecnologías
          </Heading>
          <Text fontSize="xl">Las tecnologías con las que trabajo son:</Text>
          <br />
          {listado.map((e, i) => (
            <Box key={i}>
              <Text fontSize="xl">
                {<CheckIcon />} {e}
              </Text>
            </Box>
          ))}
          <br />
          <Text fontSize="xl">
            Además no está de más mencionar el hecho de ya haber trabajado con
            metodologias como Scrum, la importancia y el saber trabajar en
            equipo.
          </Text>
        </Box>
      </HStack>
    </>
  );
}
