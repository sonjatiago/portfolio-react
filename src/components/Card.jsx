import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const Card = ({ title, description, imageSrc, websiteUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      maxW={{ base: "100%", sm: "48%", md: "30%" }} // Adjust card width for different screen sizes
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      boxShadow="lg"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.05)" }} // Optional: add a scaling effect when hovered
    >
      <Box position="relative">
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "auto", // Make sure the image adjusts to the container's width
          }}
        />
        {isHovered && (
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0, 0, 0, 0.7)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s"
          >
            <Button
              as="a"
              href={websiteUrl}
              target="_blank"
              colorScheme="blue"
              size={{ base: "md", sm: "lg" }} // Adjust button size for mobile and larger screens
            >
              Visit Website
            </Button>
          </Box>
        )}
      </Box>
      <Box p={{ base: 4, sm: 6 }} // Adjust padding for different screen sizes
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Heading color="black" size="md" mb={2}>
          {title}
        </Heading>
        <Text color="gray.600" fontSize={{ base: "sm", sm: "md" }}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
