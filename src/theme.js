import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
    },
  },
  colors: {
    primary: {
      LightCyan: "hsl(193, 38%, 86%)",
      NeonGreen: "hsl(150, 100%, 66%)",
    },
    neutral: {
      GrayishBlue: "hsl(217, 19%, 38%)",
      DarkGrayishBlue: "hsl(217, 19%, 24%)",
    },
  },
});
