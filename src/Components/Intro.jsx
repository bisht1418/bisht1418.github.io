import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";

export default function Intro() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}>
              Hi, I'am Neeraj 👋
            </Text>
            <br />
            <Text fontSize="3xl" as={"span"} color={"red.400"}>
              Full Stack Web Developer
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Write the detail of fllu stack web development
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            justifyContent="center"
            direction={{ base: "column", sm: "row" }}>
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}>
              Get started
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}>
          <Box
            position={"relative"}
            height={"300"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"50%"}
            overflow={"hidden"}>
            <Image
              alt={"Neeraj-Singh-Bisht"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
