import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brand = defineStyle({
    border: '2px solid',
    borderColor: 'black.500',

    _dark: {
        borderColor: 'white.500',
    },
});

export const dividerTheme = defineStyleConfig({
    defaultProps: {
        variant: { brand },
    },
});
