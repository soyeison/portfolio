import React from 'react';
import { HStack, Box, Image, Heading } from '@chakra-ui/react';
import FotoLaptop from '../../resources/images/laptop.jpg';
import CardTrabajo from './CardTrabajo';
import henryBank from '../../resources/images/HenryBank.png';
import Pi from '../../resources/images/PI_Dogs.jpg';

export default function Trabajos() {
  return (
    <>
      <HStack
        id="Trabajos"
        justifyContent="center"
        spacing={10}
        marginTop={{ md: '100px', lg: '150px' }}
      >
        <Box boxSize="xl" marginTop="6%" display={{ base: 'none', sm: 'flex' }}>
          <Image src={FotoLaptop} alt="Foto de perfil" height="74vh" />
        </Box>
        <Box maxW="32rem" paddingTop="60px">
          <Heading mb={4} size="lg" color="brand.tercero">
            Trabajos
          </Heading>

          <CardTrabajo
            link="https://pi-perros.vercel.app/"
            imagen={Pi}
            titulo={'PI-Dogs'}
            descripcion={
              'Diseñar y desarrollar una App de razas de perros que incluía: búsquedas, filtrados, ordenamientos y creación ' +
              'Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize'
            }
          />
          <br />
          <CardTrabajo
            link="https://pi-perros.vercel.app/"
            imagen={henryBank}
            titulo={'HenryBank'}
            descripcion={
              'Sprints de una semana presentando a un Product Owner avances sobre el desarrollo de la app de una billetera virtual'
            }
          />
        </Box>
      </HStack>
    </>
  );
}
