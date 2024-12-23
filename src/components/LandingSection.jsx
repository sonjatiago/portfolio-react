import React from "react";
import { Avatar, Heading, VStack, Box, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Profile from "../assets/profilephoto.jpg";

const greeting = "Hello, I am Tiago!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="gray.800"
  >
    <VStack spacing={3} maxWidth="1200px" mt={{ base: "80px", md: "100px" }}>
      <Box 
        boxSize={{ base: "100px", md: "200px", lg: "300px" }}
        borderRadius="full"
        overflow="hidden"
        border="4px solid white"
      >
        <Image
          src={Profile}
          alt="Tiago"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      
      <VStack spacing={6}>
        <Heading 
          size="2xl" 
          color="blue.300"
          fontWeight="bold"
        >
          {greeting}
        </Heading>
        <Heading 
          size="xl" 
          color="white"
          textAlign="center"
          lineHeight="1.2"
        >
          {bio1}
        </Heading>
        <Heading 
          size="xl"
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