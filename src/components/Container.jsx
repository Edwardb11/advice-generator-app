import { Box, Center, Heading, Text, Stack } from "@chakra-ui/react";

export default function Container() {
  return (
    <Center py={20}>
      <Box
        maxW={"345px"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}></Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Blog
          </Text>
          <Heading color="white" fontSize={"2xl"} fontFamily={"body"}>
            Boost your conversion rate
          </Heading>
          <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
