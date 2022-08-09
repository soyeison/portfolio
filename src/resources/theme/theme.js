import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: props => ({
    body: {
      bg: mode('white', 'black')(props), //El de la derecha es cuando esta en blanco y el de la izquierda en negro
      color: mode('black', 'white')(props), //Al contrario aqui para contrastar
      fontFamily: 'League Spartan, sans-serif',
    },
  }),
};

const colors = {
  brand: {
    primero: '#000C24',
    segundo: '#FBFBFB',
    tercero: '#F44336',
    cuarto: '#928A97',
  },
};

export const theme = extendTheme({ styles, config, colors });
