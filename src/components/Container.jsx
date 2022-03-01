import { Box, Center, Button, Text, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import pauseMobile from "../../Public/images/pattern-divider-mobile.svg";
import pauseDesktop from "../../Public/images/pattern-divider-desktop.svg";
import dice from "../../Public/images/icon-dice.svg";
export default function Container() {
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);

    setQuotes(data.slip);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      <Center py={"10rem"}>
        <Box
          maxW={"405px"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          bg="neutral.GrayishBlue"
          overflow={"hidden"}
        >
          <Stack mb={"2rem"}>
            <Text
              color={"primary.NeonGreen"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              textAlign={"center"}
              letterSpacing={1.1}
            >
              ADVICE # {quotes.id}
            </Text>
            <Text color={"primary.LightCyan"} textAlign={"center"} pb={2}>
              {quotes.advice}
            </Text>
            <source
              media="(min-width: 768px)"
              srcSet={pauseDesktop}
              bg="neutral.DarkGrayishBlue"
            />
            <img src={pauseMobile} alt="" />
          </Stack>
        </Box>
      </Center>
      <Center m={"-11rem"} top="0px">
        <Button
          bg={"neutral.GrayishBlue"}
          onClick={getQuotes}
          _hover={{
            background: "primary.NeonGreen",
          }}
        >
          <img src={dice} alt="" />
        </Button>
      </Center>
    </>
  );
}
