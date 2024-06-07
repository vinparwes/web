import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brand = defineStyle({




    _dark: {

    },
});

const iconButton = defineStyle({


    _dark: {

    },
})


export const iconTheme = defineStyleConfig({
    variants: { brand, iconButton },
    defaultProps: {
        variant: 'brand',
    },
});
