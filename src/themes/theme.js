import { extendTheme } from "@chakra-ui/react";
import { cardTheme } from "./cardStyles";
import { buttonTheme } from "./buttonStyles";
import { iconTheme } from "./iconThemes";
import { boxTheme } from "./boxStyles";

let theme;
export default theme = extendTheme(
  {
    colors: {
      brand: {
      },
      white: '#ffffff',
      black: '#000000',
    },
    styles: {
      global: (props) => ({
        "html, body": {
          transition: "background-color fill 0.5s ease",
        },
        "*::placeholder": {
          color: props.colorMode === 'dark' ? 'gray.400' : 'gray.500',
        },
        "*, *::before, *::after": {
          borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.200',
        },
      }),
    },
    components: {
      Box: boxTheme,
      Icon: iconTheme,
      Card: cardTheme,
      Button: buttonTheme,
    },
  }
)