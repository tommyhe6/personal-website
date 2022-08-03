import type { NextPage } from "next";
import Project from "../components/Project";
import NavItemIcon from "../components/NavItemIcon";
import { Heading, VStack, HStack, Flex, Divider } from "@chakra-ui/react";
import { SiNextdotjs, SiFlask, SiExpress, SiTensorflow, SiDevpost, SiGithub  } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";

const projects: NextPage = () => {
    return (
        <VStack spacing="5vh">
            <Heading as="h1" size="lg">
                Selected Projects
            </Heading>
            <Flex w="60vw" direction="row" justifyContent="space-between">
                <Project title="ThreatMap" context="Hacktech top 3 ML hack" desc="Scrapes news articles to find high risk locations and levels of danger to help user safety through web app" time="May 2022" img="/ThreatMap.png" techIcons={[
                    <SiNextdotjs key={0} />,
                    <SiFlask key={1} />,
                ]} demos={[
                        <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/jezheng20/ThreatMap" />, 
                        <NavItemIcon key={1} label="demo" icon={<BsBoxArrowUpRight />} url="" />, 
                        <NavItemIcon key={2} label="devpost" icon={<SiDevpost />} url= "https://devpost.com/software/threatmap-p1fk0h"/>,
                    ]} />
                <Divider orientation="vertical"/>
                <Project title="TikTok Dancer Trainer" context="McHacks best game dev hack" desc="Gives live feedback for similarity between user’s dance and target dance through web app" time="Jan. 2021" img="/TikTok.png" techIcons={[
                    <SiTensorflow key={0} />,
                    <SiExpress key={1} />,
                ]} demos={[
                        <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/nkkoran/TikTokDanceTrainer" />,
                        <NavItemIcon key={1} label="devpost" icon={<SiDevpost />} url="https://devpost.com/software/tiktok-dance-trainer" />,
                    ]} />
            </Flex>
            <Flex w="60vw" direction="row" justifyContent="space-between">
                <Project title="Virtual Learning Toolbox" context="HackMIT Top 8" desc="Toolbox for improved online learning including a virtual whiteboard, gesture detection, and automatic verbal comparison" time="Sept. 2020" img="/Virtual.png" demos={[
                    <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/SooshiCircle/virtualclasstools" />,
                ]}/>
                <Divider orientation="vertical"/>
                <Project title="Personal Website" context="Personal" desc="Current Personal Website, used as a resume, contact, and blog" time="Aug. 2022" img="/Personal.png" demos={[
                    <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/THe142857/personal-website" />,
                    <NavItemIcon key={1} label="demo" icon={<BsBoxArrowUpRight />} url="/" />,

                ]} />
            </Flex>
            <Flex w="60vw" direction="row" justifyContent="space-between">
                <Project title="Chess GUI & AI bot" context="Personal" desc="Chess GUI interface with LAN playability and AI bot" time="2019" />
                <Divider orientation="vertical"/>
                <Project title="Musical Transcription & Encryption/Decryption" context="Blueprint Advanced Division 3rd Place" desc="Musical transcription with an encryption scheme based on pieces with automatic decoder" time="Feb. 2020" />
            </Flex>
        </VStack>
    );
};

export default projects;

