import { Box, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

export default function CardTrabajo({ titulo, descripcion, imagen, link }) {
  return (
    <Box pr="2rem" display={{ md: 'flex' }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          width={{ md: 40 }}
          src={imagen}
          alt="Iamegn de proyecto"
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href={link}
          color="brand.tercero"
          isExternal
        >
          {titulo}
        </Link>
        <Text mt={2}>{descripcion}</Text>
      </Box>
    </Box>
  );
}
