import { defineStyle } from "@chakra-ui/react"
import { defineStyleConfig } from "@chakra-ui/react"

const brand = defineStyle(
    {
        border: '2px solid',
        borderColor: 'gray.400',
        borderRadius: 'md',

        _dark: {
            border: '2px solid',
            borderColor: 'gray.200',
            textColor: 'white.200',
        },
    }
)


export const imageTheme = defineStyleConfig(
    {
        variants: { brand },
        defaultProps: {
            variant: 'brand',
        },
    }
)