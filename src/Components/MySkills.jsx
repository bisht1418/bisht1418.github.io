import React from "react";
import {
  Container,
  Text,
  Grid,
  GridItem,
  Image,
  Heading,
} from "@chakra-ui/react";
import { IoLogoJavascript } from "react-icons/io";
import { GrNode } from "react-icons/gr";

import { BsGithub } from "react-icons/bs";
import {
  SiCss3,
  SiReact,
  SiChakraui,
  SiMongodb,
  SiHtml5,
} from "react-icons/si";

const MySkills = () => {
  return (
    <div mt={10} id="skills">
      <Container maxW={"4xl"}>
        <Heading style={{ textAlign: "center" }}>{`{ Skills }`}</Heading>
        <Grid
          className="skills-card"
          marginTop={10}
          templateColumns={{
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(5,1fr)",
          }}
          gap={6}
        >
          <GridItem
            w="100%"
            h="100%"
            bg="#bee3f8"
            textAlign={"center"}
            padding={4}
            borderRadius={30}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            border={"2px solid teal"}
            _hover={{
              transform: "scale(1.05)",
              border: "1px solid gray",
              bg: "#d0ecfc",
            }}
          >
            <IoLogoJavascript
              className="skills-card-img"
              style={{ fontSize: "30px", margin: "auto", color: "black" }}
            />

            <Text
              fontWeight={"bold"}
              color={"black"}
              className="skills-card-name"
              as="u"
            >
              JavaScript
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            h="100%"
            textAlign={"center"}
            bg="#bee3f8"
            padding={4}
            borderRadius={30}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            border={"2px solid teal"}
            _hover={{
              transform: "scale(1.05)",
              bg: "#d0ecfc",
              border: "1px solid gray",
            }}
          >
            <SiHtml5
              className="skills-card-img"
              style={{ fontSize: "30px", margin: "auto", color: "black" }}
            />
            <Text
              fontWeight={"bold"}
              color={"black"}
              className="skills-card-name"
              as="u"
            >
              HTML
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            h="100%"
            bg="#bee3f8"
            textAlign={"center"}
            padding={4}
            borderRadius={30}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            border={"2px solid teal"}
            _hover={{
              transform: "scale(1.05)",
              border: "1px solid gray",
              bg: "#d0ecfc",
            }}
          >
            <SiCss3
              className="skills-card-img"
              style={{ fontSize: "30px", margin: "auto", color: "black" }}
            />
            <Text
              fontWeight={"bold"}
              color={"black"}
              className="skills-card-name"
              as="u"
            >
              CSS
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            h="100%"
            bg="#bee3f8"
            padding={4}
            borderRadius={30}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            border={"2px solid teal"}
            textAlign={"center"}
            _hover={{
              transform: "scale(1.05)",
              border: "1px solid gray",
              bg: "#d0ecfc",
            }}
          >
            <SiReact
              className="skills-card-img"
              style={{ fontSize: "30px", margin: "auto", color: "black" }}
            />
            <Text
              fontWeight={"bold"}
              color={"black"}
              className="skills-card-name"
              as="u"
            >
              React
            </Text>
          </GridItem>

          <GridItem
            w="100%"
            h="100%"
            bg="#bee3f8"
            padding={4}
            borderRadius={30}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            border={"2px solid teal"}
            textAlign={"center"}
            _hover={{
              transform: "scale(1.05)",
              border: "1px solid gray",
              bg: "#d0ecfc",
            }}
          >
            <SiChakraui
              className="skills-card-img"
              style={{ fontSize: "30px", margin: "auto", color: "black" }}
            />
            <Text
              fontWeight={"bold"}
              color={"black"}
              className="skills-card-name"
              as="u"
            >
              Chakra UI
            </Text>
          </GridItem>

          <GridItem
            w="100%"
            h="100%"
            bg="#bee3f8"
            padding={4}
            borderRadius={30}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            border={"2px solid teal"}
            textAlign={"center"}
            _hover={{
              transform: "scale(1.05)",
              border: "1px solid gray",
              bg: "#d0ecfc",
            }}
          >
            <Image
              // bg={"white"}
              borderRadius="full"
              boxSize="50px"
              src="typescript.svg"
              alt="Dan Abramov"
              margin={"auto"}
              color={"whiteAlpha.100"}
              textAlign={"center"}
            />
            <Text
              fontWeight={"bold"}
              color={"black"}
              className="skills-card-name"
              as="u"
            >
              Typescript
            </Text>
          </GridItem>

          <GridItem
            w="100%"
            h="100%"
            bg="#bee3f8"
            padding={4}
            borderRadius={30}
            textAlign={"center"}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            border={"2px solid teal"}
            _hover={{
              transform: "scale(1.05)",
              border: "1px solid gray",
              bg: "#d0ecfc",
            }}
          >
            <GrNode
              className="skills-card-img"
              style={{ fontSize: "30px", margin: "auto", color: "black" }}
            />
            <Text
              fontWeight={"bold"}
              color={"black"}
              className="skills-card-name"
              as="u"
            >
              Nodejs
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            h="100%"
            bg="#bee3f8"
            padding={4}
            borderRadius={30}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            border={"2px solid teal"}
            textAlign={"center"}
            _hover={{
              transform: "scale(1.05)",
              border: "1px solid gray",
              bg: "#d0ecfc",
            }}
          >
            <SiMongodb
              className="skills-card-img"
              style={{ fontSize: "30px", margin: "auto", color: "black" }}
            />
            <Text
              fontWeight={"bold"}
              color={"black"}
              className="skills-card-name"
              as="u"
            >
              MongoDB
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            h="100%"
            bg="#bee3f8"
            padding={4}
            borderRadius={30}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            border={"2px solid teal"}
            textAlign={"center"}
            _hover={{
              transform: "scale(1.05)",
              border: "1px solid gray",
              bg: "#d0ecfc",
            }}
          >
            <BsGithub
              className="skills-card-img"
              style={{ fontSize: "30px", margin: "auto", color: "black" }}
            />
            <Text
              fontWeight={"bold"}
              color={"black"}
              className="skills-card-name"
              as="u"
            >
              GitHub
            </Text>
          </GridItem>

          <GridItem
            w="100%"
            h="100%"
            bg="#bee3f8"
            padding={4}
            borderRadius={30}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            border={"2px solid teal"}
            textAlign={"center"}
            _hover={{
              transform: "scale(1.05)",
              border: "1px solid gray",
              bg: "#d0ecfc",
            }}
          >
            <Image
              borderRadius="full"
              boxSize="50px"
              src="redux.svg"
              alt="Dan Abramov"
              margin={"auto"}
            />
            <Text
              fontWeight={"bold"}
              color={"black"}
              className="skills-card-name"
              as="u"
            >
              Redux
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default MySkills;
