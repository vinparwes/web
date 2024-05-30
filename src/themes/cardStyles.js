import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys,
);

const brand = definePartsStyle({
  container: {
    bgColor: '#EFEFEF',
    borderColor: 'gray.400',
    borderWidth: '1px',
    borderRadius: '0',

    _dark: {
      bgColor: 'gray.600',
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
