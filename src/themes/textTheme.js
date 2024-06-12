import { defineStyle } from "@chakra-ui/react"
import { defineStyleConfig } from "@chakra-ui/react"

import "@fontsource/roboto-mono";

const brand = defineStyle(
    {
        fontFamily : "Roboto Mono"
    }
)


export const textTheme = defineStyleConfig(
    {
        variants: { brand },
        defaultProps: {
            variant: 'brand',
        },
    }
)