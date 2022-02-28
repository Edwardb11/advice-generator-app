import { Box, Center, Button, Text, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
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
    <Center py={20}>
      <Box
        maxW={"345px"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        bg="neutral.GrayishBlue"
        overflow={"hidden"}
      >
        <Stack bg="neutral.GrayishBlue">
          <Text
            color={"primary.NeonGreen"}
            textTransform={"uppercase"}
            bg="neutral.GrayishBlue"
            fontWeight={800}
            fontSize={"sm"}
            textAlign={"center"}
            letterSpacing={1.1}
          >
            ADVICE # {quotes.id}
          </Text>
          <Text color={"primary.LightCyan"} bg="neutral.GrayishBlue">
            {quotes.advice}
          </Text>
          <Button onClick={getQuotes} colorScheme="teal" size="xs">
            Button
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
