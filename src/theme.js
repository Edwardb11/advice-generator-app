import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "red",
      },
    },
  },
  colors: {
    primary: {
      LightCyan: "hsl(193, 38%, 74%)",
      NeonGreen: "hsl(150, 100%, 66%)",
    },
    neutral: {
      GrayishBlue: "hsl(217, 20%, 26%)",
      DarkGrayishBlue: "hsl(217, 19%, 17%)",
    },
  },
});
