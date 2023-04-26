import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import Theme from "../../Components/Theme";
import { useColorMode } from "@chakra-ui/react";

const name = " < Neeraj Singh Bisht />";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(colorMode);

  return (
    <Box
      id="nav-menu"
      position="sticky"
      top="0"
      zIndex="100"
      bg={colorMode === "light" ? "white" : "#1d2022"}
      color={colorMode === "light" ? "black" : "white"}
    >
      <Flex minWidth="max-content" p={5} alignItems="center" gap="30">
        <Box p="2">
          <Heading id="user-detail-name" size="md">
            {name}
          </Heading>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Flex alignItems="center" gap="10">
            <Box p="2">
              <Button colorScheme="black" variant="link">
                <NavLink className="nav-link home" to="/">
                  Home
                </NavLink>
              </Button>
            </Box>
            <Box p="2">
              <Button colorScheme="black" variant="link">
                <NavLink className="nav-link about" to="/about">
                  About
                </NavLink>
              </Button>
            </Box>
            <Box p="2">
              <Button colorScheme="black" variant="link">
                <NavLink className="nav-link skills" to="/skills">
                  Skills
                </NavLink>
              </Button>
            </Box>
            <Box p="2">
              <Button colorScheme="black" variant="link">
                <NavLink className="nav-link projects" to="/projects">
                  Projects
                </NavLink>
              </Button>
            </Box>
            <Box p="2">
              <Button colorScheme="black" variant="link">
                <NavLink className="nav-link contact" to="/contact">
                  Contact
                </NavLink>
              </Button>
            </Box>
            <Box p="2">
              <Button colorScheme="black" variant="link" id="resume-button-1">
                <a
                  id="resume-link-1"
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
            <Box>
              <Theme />
            </Box>
          </Flex>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            size="lg"
            onClick={onOpen}
            aria-label="Open menu drawer"
          />
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Flex direction="column" alignItems="center" gap="5">
                  <Box p="2">
                    <Button colorScheme="teal" variant="link" onClick={onClose}>
                      <NavLink to="/">Home</NavLink>
                    </Button>
                  </Box>
                  <Box p="2">
                    <Button colorScheme="teal" variant="link" onClick={onClose}>
                      <NavLink to="/about">About</NavLink>
                    </Button>
                  </Box>
                  <Box p="2">
                    <Button colorScheme="teal" variant="link" onClick={onClose}>
                      <NavLink to="/skills">Skills</NavLink>
                    </Button>
                  </Box>
                  <Box p="2">
                    <Button colorScheme="teal" variant="link" onClick={onClose}>
                      <NavLink to="/projects">Projects</NavLink>
                    </Button>
                  </Box>
                  <Box p="2">
                    <Button colorScheme="teal" variant="link" onClick={onClose}>
                      <NavLink to="/contact">Contact</NavLink>
                    </Button>
                  </Box>
                  <Box p="2">
                    <Button
                      colorScheme="black"
                      variant="link"
                      id="resume-button-2"
                    >
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
                  <Box p="2">
                    <Theme />
                  </Box>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
