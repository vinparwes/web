import { drawerAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)

const purple = definePartsStyle({
    dialog: {
        borderRadius: 'md',
        bg: `#DCDCDC`,

        // Let's also provide dark mode alternatives
        _dark: {
            bg: `black.600`,
            color: 'white',
        },
    },
})

export const drawerTheme = defineMultiStyleConfig({

    defaultProps: {
        variant: 'purple',
    },
})
