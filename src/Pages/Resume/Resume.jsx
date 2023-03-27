import React from "react";
import { Button } from "@chakra-ui/react";

const Resume = () => {
  return (
    <div>
      <a
        rel="opener"
        target="blank"
        href="Neeraj-Bisht-Resume.pdf"
        download="neeraj-bisht-resume">
        <Button colorScheme="blue">Download</Button>
      </a>
    </div>
  );
};

export default Resume;
