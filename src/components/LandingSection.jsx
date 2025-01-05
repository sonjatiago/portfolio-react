import React from "react";
import { Avatar, Heading, VStack, Box, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Profile from "../assets/profilephoto1.png";

const greeting = "Hello, I am Tiago!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="gray.800"
    py={{ base: "40px", md: "80px" }} // Adjust padding based on screen size
  >
    <VStack spacing={{ base: 4, md: 6 }} maxWidth="1200px" mt={{ base: "80px", md: "100px" }}>
      {/* Profile Image */}
      <Box 
        boxSize={{ base: "100px", md: "200px", lg: "250px" }} // Adjust image size based on screen width
        borderRadius="full"
        overflow="hidden"
        border="4px solid white"
        mb={{ base: 4, md: 6 }} // Adds spacing below the image on small screens
      >
        <Image
          src={Profile}
          alt="Tiago"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      
      {/* Text Sections */}
      <VStack spacing={{ base: 3, md: 6 }} textAlign="center">
        <Heading 
          size={{ base: "xl", md: "2xl" }}  // Adjust heading size based on screen width
          color="blue.300"
          fontWeight="bold"
        >
          {greeting}
        </Heading>
        
        <Heading 
          size={{ base: "lg", md: "xl" }} // Adjust bio1 size for mobile
          color="white"
          lineHeight="1.2"
        >
          {bio1}
        </Heading>
        
        <Heading 
          size={{ base: "lg", md: "xl" }} // Adjust bio2 size for mobile
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
