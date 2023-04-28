import {
  Box,
  Image,
  Badge,
  Stack,
  Button,
  Flex,
  Wrap,
  Text,
  Link,
} from "@chakra-ui/react";

export default function ProjectCard({
  imageUrl,
  project,
  group,
  type,
  description,
  tags,
  linkName,
}) {
  return (
    <Box
      mt={-10}
      id="projects"
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
    >
      <Image src={imageUrl} alt={imageUrl} />

      <Box className="project-card" p="4">
        <Box display="flex" alignItems="baseline">
          <Wrap>
            <Badge
              className="project-title"
              fontSize="m"
              borderRadius="full"
              px="2"
              colorScheme="teal"
            >
              {project}
            </Badge>
            <Badge fontSize="m" borderRadius="full" px="2" colorScheme="red">
              {type}
            </Badge>
            <Badge fontSize="m" borderRadius="full" px="2" colorScheme="blue">
              {group ? "Collaborative" : "Individual"}
            </Badge>
          </Wrap>
        </Box>

        <Box className="project-description" mt={3} mb={3} display={"flex"}>
          <Flex>
            <Text
              className="project-description"
              as="p"
              size="sm"
              textAlign="left"
            >
              {description}
            </Text>
          </Flex>
        </Box>

        <Wrap spacing={4} className="wrap-horizontal">
          {tags.map((ele) => (
            <Button
              className="project-tech-stack"
              key={ele}
              colorScheme="red"
              variant="outline"
            >
              {ele}
            </Button>
          ))}
        </Wrap>

        <Stack mt={3} direction="column">
          <Wrap spacing={4}>
            {linkName.map((ele) => (
              <Button
                colorScheme="teal"
                variant="outline"
                leftIcon={
                  <Image
                    borderRadius="full"
                    boxSize="30px"
                    src={ele.img}
                    alt={ele.img}
                  />
                }
              >
                <Link
                  className="project-github-link project-deployed-link"
                  href={ele.link}
                  isExternal
                >
                  {ele.name}
                </Link>
              </Button>
            ))}
          </Wrap>
        </Stack>
      </Box>
    </Box>
  );
}
