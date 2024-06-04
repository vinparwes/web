import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brand = defineStyle({
    color: '#000000'
});

export const textTheme = defineStyleConfig({
    variants: { brand },
    defaultProps: {
        variant: 'brand',
    },
});
