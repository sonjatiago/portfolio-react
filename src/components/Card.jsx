import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const Card = ({ title, description, imageSrc, websiteUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      width="100%" // Ensure card takes the full width of its container
      maxW="100%" // Ensure it expands to the maximum width in the grid container
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      boxShadow="lg"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.05)" }} // Optional: scaling effect on hover
    >
      <Box position="relative">
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "auto", // Ensure image scales proportionally
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
              size={{ base: "md", sm: "lg" }} // Adjust button size for responsiveness
            >
              Visit Website
            </Button>
          </Box>
        )}
      </Box>
      <Box p={{ base: 4, sm: 6 }} // Padding adjusted for different screen sizes
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
