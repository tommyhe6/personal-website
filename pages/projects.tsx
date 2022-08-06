import type { NextPage } from "next";
import Project from "../components/Project";
import NavItemIcon from "../components/NavItemIcon";
import { Heading, VStack, HStack, Flex, Divider } from "@chakra-ui/react";
import { SiNextdotjs, SiFlask, SiExpress, SiTensorflow, SiDevpost, SiGithub  } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";

const projects: NextPage = () => {
    const projects: JSX.Element[] = [
        { id : "ThreatMap", value : <Project 
            title="ThreatMap" 
            context="Hacktech top 3 ML hack" 
            desc="Scrapes news articles to find high risk locations and levels of danger to help user safety through web app" 
            time="May 2022" 
            img="/projects/ThreatMap.png" 
            techIcons={[
                <SiNextdotjs key={0} />,
                <SiFlask key={1} />,
            ]} 
            demos={[
                <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/jezheng20/ThreatMap" />, 
                <NavItemIcon key={1} label="demo" icon={<BsBoxArrowUpRight />} url="" />, 
                <NavItemIcon key={2} label="devpost" icon={<SiDevpost />} url= "https://devpost.com/software/threatmap-p1fk0h"/>,
            ]} />
        },
        { id : "TikTok Dance Trainer", value : <Project 
            title="TikTok Dancer Trainer" 
            context="McHacks best game dev hack" 
            desc="Gives live feedback for similarity between user’s dance and target dance through web app" 
            time="Jan. 2021" 
            img="/projects/TikTok.png" 
            techIcons={[
                <SiTensorflow key={0} />,
                <SiExpress key={1} />,
            ]} demos={[
                <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/nkkoran/TikTokDanceTrainer" />,
                <NavItemIcon key={1} label="devpost" icon={<SiDevpost />} url="https://devpost.com/software/tiktok-dance-trainer" />,
            ]} />
        },
        { id : "Virtual Learning Toolbox", value : <Project 
            title="Virtual Learning Toolbox" 
            context="HackMIT Top 8" 
            desc="Toolbox for improved online learning including a virtual whiteboard, gesture detection, and automatic verbal comparison" 
            time="Sept. 2020" 
            img="/projects/Virtual.png" 
            demos={[
                <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/SooshiCircle/virtualclasstools" />,
            ]}/>
        },
        { id : "Personal Website", value : <Project 
            title="Personal Website" 
            context="Personal" 
            desc="Current Personal Website, used as a resume, contact, and blog" 
            time="Aug. 2022" 
            img="/projects/Personal.png" 
            demos={[
                <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/THe142857/personal-website" />,
                <NavItemIcon key={1} label="demo" icon={<BsBoxArrowUpRight />} url="/" />,

            ]} />
        },
        { id : "Chess logic & GUI with AI bot", value : <Project 
            title="Chess logic & GUI with AI bot" 
            context="Personal" 
            desc="Chess GUI interface with LAN playability and AI bot" 
            time="2019" 
            img="/projects/Chess.png" 
            demos={[
                <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/THe142857/Chess" />,
            ]}/>
        },
        { id : "Symphonic Cipher", value : <Project title="Symphonic Cipher" 
            context="Blueprint Advanced Division 3rd Place" 
            desc="Musical transcription with an encryption scheme based on pieces with automatic decoder" 
            time="Feb. 2020" img="/projects/Musical.png" 
            demos={[
                <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/meganfrisella/blueprint2020" />,
                <NavItemIcon key={1} label="devpost" icon={<SiDevpost />} url= "https://devpost.com/software/music-transcription-encryption-and-decryption"/>,
            ]} />
        },
        { id : "Chatting While Compiling", value: <Project 
            title="Chatting While Compiling" 
            context="Personal" 
            desc="Web app that allows users to chat in private room with live code sharing and compilation" 
            time="2021" 
            img="/projects/Compile.png" 
            demos={[
                <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/THe142857/Chatting-while-Compiling" />,
            ]}/>
        },
    ];

    const projectsTranform = projects.reduce(
        (ret, cur, i) =>  
            (i % 2 == 0 ? ret.push([cur]) : ret[ret.length - 1].push(cur)) && ret
        , []);

    return (
        <VStack spacing="5vh">
            <Heading as="h1" size="lg">
                Selected Projects
            </Heading>
            {projectsTranform.map(([i1, i2]) => 
            <Flex key = {`${i1.id} ${i2 ? i2.id : ""}`} w="60vw" direction="row" justifyContent="space-between">
                {i1.value}
                {i2 ? <Divider orientation="vertical"/> : ""}
                {i2 ? i2.value : ""}
            </Flex>
            )}
        </VStack>
    );
};

export default projects;

