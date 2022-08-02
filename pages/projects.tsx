import type { NextPage } from "next";
import Project from "../components/Project";
import { Heading, VStack, HStack, Flex, Divider } from "@chakra-ui/react";

const projects: NextPage = () => {
    return (
        <VStack spacing="5vh">
            <Heading as="h1" size="lg">
                Selected Projects
            </Heading>
            <Flex w="60vw" direction="row" justifyContent="space-between">
                <Project title="ThreatMap" context="Hacktech top 3 ML hack" desc="Scrapes news articles to find high risk locations and levels of danger to help user safety through a website" time="May 2022" />
                <Divider orientation="vertical"/>
                <Project title="TikTok Dancer Trainer" context="McHacks best game dev hack" desc="Gives live feedback for similarlity between user’s dance and target dance through web app" time="Jan. 2021" />
                <Divider orientation="vertical"/>
                <Project title="Virtual Learning Toolbox" context="HackMIT Top 8" desc="Toolbox for improved online learning including a virtual whiteboard, gesture detection, and automatic verbal comparison" time="Sept. 2020" />
            </Flex>
        </VStack>
    );
};

export default projects;

