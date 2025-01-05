import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b" width="100%">
      <footer>
        <Flex
          margin="0 auto"
          px={{ base: 4, sm: 8, md: 12 }} // Adjust padding for small to medium devices
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={{ base: "auto", sm: "60px", md: "80px" }} // Responsive height
          py={{ base: 4, sm: 6 }} // Responsive vertical padding
        >
          <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} textAlign="center">
            Tiago Guimaraes • © 2025
          </Text>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
