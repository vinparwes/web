import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys,
);

const brand = definePartsStyle({
  container: {
    bgColor: '#FFFFFF',
    borderColor: 'gray.400',
    borderWidth: '1px',
    borderRadius: '10',
    _dark: {
      bgColor: 'black',
      '& svg path': {
        stroke: 'black',
      },
    },
  },
});

// export variants in the component theme
export const cardTheme = defineMultiStyleConfig({
  variants: {
    brand
  },
  defaultProps: {
    variant: 'brand',
  },
});

// now we can use the new funky variant
