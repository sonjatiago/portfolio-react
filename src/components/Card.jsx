import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const Card = ({ title, description, imageSrc, websiteUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      maxW="100%"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box position="relative">
        <img src={imageSrc} alt={title} style={{ width: "100%" }} />
        {isHovered && (
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0,0,0,0.7)"
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
              size="lg"
            >
              Visit Website
            </Button>
          </Box>
        )}
      </Box>
      <Box p={6}>
        <Heading color="black" size="md" mb={2}>
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </Box>
    </Box>
  );
};

export default Card;