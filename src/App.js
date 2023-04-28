import { Box } from "@chakra-ui/react";
import "./App.css";
import MainRoute from "./MainRoutes/MainRoute";
import NavBar from "./Pages/NavBar/Navbar";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { CONFETTI_LIGHT, CONFETTI_DARK } from "./Components/confetti_light";

function App() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
    >
      <div className="App">
        <NavBar id="nav-menu" />
        <hr />
        <MainRoute />
      </div>
    </Box>
  );
}

export default App;
