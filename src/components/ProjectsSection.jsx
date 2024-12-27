import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "OKOA Gallery v2.0",
    description: "A React-powered online art gallery with dynamic galleries, responsive design, and seamless navigation, showcasing modern web development skills.",
    getImageSrc: () => require("../assets/img1.png"),
    type: "React Projects",
    websiteUrl: "http://okoagallery.netlify.app",
  },
  {
    title: "Little Lemon Restaurant",
    description: "A React-based platform for Little Lemon restaurant, featuring restaurant info, an online menu, and table booking. Showcasing responsive design and modern web development.",
    getImageSrc: () => require("../assets/img2.png"),
    type: "React Projects",
    websiteUrl: "https://littlelemontallinn.netlify.app//",
  },
  {
    title: "OKOA Gallery v1.0",
    description: "A platform for Okoa Art Gallery, built with HTML, CSS, and JavaScript, showcasing artworks, artist details, and an interactive gallery. Highlights responsive design and user engagement.",
    getImageSrc: () => require("../assets/img3.png"),
    type: "HTML Projects",
    websiteUrl: "https://little-lemon-i27glbutf-tiagos-projects-f43babc9.vercel.app/",
  },
];

const ProjectsSection = () => {
  const projectTypes = ["React Projects", "HTML Projects", "Other Projects"];

  return (
    <FullScreenSection
      backgroundColor="black"
      isDarkBackground
      p={8}
      alignItems="center"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Tabs variant="soft-rounded" colorScheme="blue" align="center" width="100%">
        <TabList justifyContent="center">
          {projectTypes.map((type) => (
            <Tab key={type}>{type}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {projectTypes.map((type) => (
            <TabPanel key={type}>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridGap={8}
              >
                {projects
                  .filter((project) => project.type === type)
                  .map((project) => (
                    <Card
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      imageSrc={project.getImageSrc()}
                      websiteUrl={project.websiteUrl}
                    />
                  ))}
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </FullScreenSection>
  );
};

export default ProjectsSection;