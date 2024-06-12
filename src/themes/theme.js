import { extendTheme } from "@chakra-ui/react";
import { cardTheme } from "./cardStyles";
import { buttonTheme } from "./buttonStyles";
import { boxTheme } from "./boxStyles";
import { imageTheme } from "./imageStyles";

let theme;
export default theme = extendTheme(
  {
    colors: {
      brand: {
      },
      white: '#ffffff',
      black: '#000000',
    },
    components: {
      Image: imageTheme,
      Box: boxTheme,
      Card: cardTheme,
      Button: buttonTheme,
    },
  }
)