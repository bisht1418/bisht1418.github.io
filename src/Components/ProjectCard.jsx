import {
  Box,
  Image,
  Badge,
  Stack,
  Button,
  Heading,
  Flex,
  Wrap,
} from "@chakra-ui/react";

export default function ProjectCard() {
  const property = {
    imageUrl: "ezyshop.png",
    project: "Ezyshop",
    group: true,
    type: "E-commerce",
    description:
      "An Ecommerce website that has the features like buy, Add to cart, authentication and authorization for single user with basic CRUD operations.",
    tags: ["React", "Redux", "Chakra-Ui", "Axios", "Firebase"],
    link: {
      github: "https://github.com/nrjrwt0/Instagram-clone",
      deployed: "",
      demo: "https://drive.google.com/file/d/1DsIq6dQwQA_-iR6oth2O1pssf8kv7z6v/view",
    },
  };

  return (
    <Box borderWidth="1px" borderRadius="10px" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="4">
        <Box display="flex" alignItems="baseline">
          <Badge fontSize="m" borderRadius="full" px="2" colorScheme="teal">
            {property.project}
          </Badge>
          <Badge fontSize="m" borderRadius="full" px="2" colorScheme="red">
            {property.type}
          </Badge>
          <Badge fontSize="m" borderRadius="full" px="2" colorScheme="blue">
            {property.group ? "Collaborative" : "Individual"}
          </Badge>
        </Box>

        <Box mt={1} display={"flex"}>
          <Flex>
            <Heading as="h6" size="sm" textAlign="left">
              {property.description}
            </Heading>
          </Flex>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Stack mt={1} direction="column">
          <Wrap spacing={4}>
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={
                <Image
                  borderRadius="full"
                  boxSize="30px"
                  src="github.png"
                  alt="git hub icon"
                />
              }
            >
              Github{" "}
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={
                <Image
                  borderRadius="full"
                  boxSize="25px"
                  src="link.png"
                  alt="git hub icon"
                />
              }
            >
              Deployment{" "}
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={
                <Image
                  borderRadius="full"
                  boxSize="25px"
                  src="video.png"
                  alt="git hub icon"
                />
              }
            >
              Demo{" "}
            </Button>
          </Wrap>
        </Stack>

        {/* <Stack mt={5} direction={"row"} spacing={4}>
          <Button
            bg="teal.400"
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "teal.300",
            }}
            _hover={{
              bg: "teal.300",
            }}
          >
            Github
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Deployement
          </Button>
        </Stack> */}
      </Box>
    </Box>
  );
}
