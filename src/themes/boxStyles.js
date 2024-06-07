import { defineStyle } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const brand = defineStyle(
    {
        border: '2px solid',
        borderColor: 'gray.400',
        borderRadius: 'md',
        bgColor: 'gray.100',
        background: 'solid',

        _dark: {
            border: '2px solid',
            borderColor: 'gray.200',
            textColor: 'white.200',
        },
    }
)

const dialog = defineStyle(
    {
        position: 'relative',
        p: 4,
        borderRadius: 20,
        background: '#FFFFFF',
        w: '100vh',
        ml: '1vh',
        mr: '1vh',

        _dark: {
            position: 'relative',
            p: 4,
            borderRadius: 20,
            background: '#000000',
            w: '100vh',
            ml: '1vh',
            mr: '1vh',
        }
    }
)

export const boxTheme = defineStyleConfig(
    {
        variants: { brand },
        defaultProps: {
            variant: 'brand',
        },
    }
)