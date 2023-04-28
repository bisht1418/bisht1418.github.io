import { Box, Flex, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Theme() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box>
        <Flex alignItems={"center"}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Box>
    </>
  );
}
