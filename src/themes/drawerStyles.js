import { defineStyle } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
    border: '2px dashed',
    borderRadius: 0,
    fontWeight: 'semibold',
});

const brand = defineStyle({
    border: '2px solid',
    borderColor: 'gray.400',
    borderRadius: 'md',
    bgColor: 'gray.100',
    px: '2%',
    py: '1%',

    _dark: {
        border: '2px solid',
        borderColor: 'gray.200',
        bgColor: 'gray.600',
        textColor: 'gray.200',
    },
});

export const drawerTheme = defineStyleConfig({
    variants: { brand, outline },
    defaultProps: {
        variant: 'brand',
    },
});
