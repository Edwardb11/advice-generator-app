import { Box, Center, Button, Text, Stack } from "@chakra-ui/react";

export default function Container() {
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
            Blog
          </Text>
          <Text color={"primary.LightCyan"} bg="neutral.GrayishBlue">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          <Button colorScheme="teal" size="xs">
            Button
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
