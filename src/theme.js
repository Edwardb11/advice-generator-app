import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: "'Rubik', sans-serif",
        backgroundColor: "hsl(217, 19%, 17%)",
      },
    }),
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
