import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * FullScreenSection Component
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor || (isDarkBackground ? "gray.800" : "white")}
      color={isDarkBackground ? "white" : "black"}
      width="100%"  // Ensure it takes full width
      alignItems="center"  // Center horizontally
      justifyContent="center"  // Center vertically
      py={{ base: "40px", md: "60px" }}  // Adjust vertical padding for mobile and laptop sizes
      px={{ base: "20px", md: "40px" }}  // Adjust horizontal padding for mobile and laptop sizes
      {...boxProps}
    >
      <VStack
        maxWidth="100%"  // Allow max width to be 100%
        minHeight="auto"  // Auto height to fit content
        width="100%"  // Ensure full width on all screen sizes
        alignItems="center"
        justifyContent="flex-start"  // Align content to top
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
