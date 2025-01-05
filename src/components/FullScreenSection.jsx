import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor || (isDarkBackground ? "gray.800" : "white")}
      color={isDarkBackground ? "white" : "black"}
      width="100%"  // Ensure it takes the full width of the screen
      alignItems="center"  // Center content horizontally
      justifyContent="center"  // Center content vertically
      py={{ base: "40px", md: "60px" }}  // Adjust vertical padding based on screen size
      px={{ base: "20px", md: "40px" }}  // Adjust horizontal padding for smaller screens
      {...boxProps}
    >
      <VStack
        maxWidth={{ base: "100%", md: "1280px" }}  // Ensure maxWidth adapts to screen size
        minHeight="100vh"  // Ensure the section covers full height of the screen
        width="100%"  // Ensure the section is full width
        alignItems="center"  // Center content horizontally
        justifyContent="center"  // Center content vertically
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
