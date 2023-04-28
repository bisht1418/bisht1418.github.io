import { useColorModeValue, IconButton, Link } from "@chakra-ui/react";
import { Box, Button, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Intro() {
  return (
    <Box
      mt={10}
      display="flex"
      alignItems={"center"}
      height={{ sm: "auto", md: "90vh" }}
      p={{ base: "0px 30px", md: "0px 70px" }}
      pt={{ base: "50px", md: "0px" }}
      id="home"
    >
      <Grid
        gridTemplateColumns={{ sm: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        gap={"50px"}
      >
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Box id="user-detail-name" fontSize={"35px"}>
            <Text fontWeight={700} display="inline">
              Hello 👋
            </Text>

            <Text color={"teal"} fontWeight={700}>
              I,m Neeraj Singh Bisht
            </Text>

            <Text color={"red.400"} fontWeight={700} marginBottom="10px">
              Full Stack Web Developer
            </Text>
          </Box>

          <Box>
            <Text fontSize={20} mb={"10px"}>
              As a motivated Full Stack Developer, I am passionate about
              creating high-quality software solutions that meet the needs of
              clients and end-users. With a strong desire to constantly improve
              and learn new technologies, I strive to stay up-to-date with the
              latest trends and best practices in the field.
            </Text>

            <Box style={{ textAlign: "start" }}>
              <Link href="https://github.com/bisht1418" isExternal>
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<BsGithub />}
                  _hover={{
                    bg: "blue.500",
                    color: useColorModeValue("white", "gray.700"),
                  }}
                  isRound
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/neeraj-bisht-96b265243/"
                isExternal
              >
                <IconButton
                  aria-label="linkedin"
                  variant="ghost"
                  size="lg"
                  icon={<BsLinkedin size="28px" />}
                  _hover={{
                    bg: "blue.500",
                    color: useColorModeValue("white", "gray.700"),
                  }}
                  isRound
                />
              </Link>
            </Box>

            <Button
              mt={2}
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              color={"black"}
              bg={"teal.400"}
              _hover={{ bg: "teal.300" }}
            >
              <Box>
                <Button colorScheme="black" variant="link" id="resume-button-2">
                  <a
                    id="resume-link-2"
                    className="nav-link resume"
                    onClick={() => window.open("Neeraj-Bisht-Resume.pdf")}
                    target="_blank"
                    href="Neeraj-Bisht-Resume.pdf"
                    download
                  >
                    Resume
                  </a>
                </Button>
              </Box>
            </Button>
          </Box>
        </GridItem>

        <GridItem>
          <Img
            className="home-img"
            src={"https://avatars.githubusercontent.com/u/112753461?v=4"}
            alt="React Logo"
            height={"100%"}
            width={"100%"}
          />
        </GridItem>
      </Grid>
    </Box>
    // </Container>
  );
}
