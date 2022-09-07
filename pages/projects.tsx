import Project from "../components/Project";
import NavItemIcon from "../components/NavItemIcon";
import { Heading, VStack, HStack, Flex, Divider } from "@chakra-ui/react";
import { SiNextdotjs, SiFlask, SiExpress, SiTensorflow, SiDevpost, SiGithub  } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Head from "next/head";
import type { NextPage } from "next";

type Project = {
    id: string,
    value: JSX.Element,
}

const projects: NextPage = () => {
    const projects: Project[] = [
        { id : "ThreatMap", value : <Project 
            title="ThreatMap" 
            context="Hacktech top 3 ML hack" 
            desc="Scrapes news articles to find high risk locations and levels of danger to help user safety through web app" 
            time="May 2022" 
            img="/projects/ThreatMap.png" 
            techStack={["Next.js", "Flask", "nltk", "Newspaper.py"]}
            techLang={["javascript", "python"]}
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
            techStack={["Tensorflow", "Express.js"]}
            techLang={["HTML", "CSS", "javascript"]}
            demos={[
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
            techStack={["OpenCV", "Tensorflow", "SpeechRecognition.py", "GloVe"]}
            techLang={["python"]}
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
            techStack={["Next.js", "Chakra UI", "mdx-bundler"]} 
            techLang={["typescript"]}
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
            techStack={["tkinter", "PIL", "socket.py", "minimax"]}
            techLang={["python"]}
            demos={[
                <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/THe142857/Chess" />,
            ]}/>
        },
        { id : "Symphonic Cipher", value : <Project title="Symphonic Cipher" 
            context="Blueprint Advanced Division 3rd Place" 
            desc="Musical transcription with an encryption scheme based on pieces with automatic decoder" 
            time="Feb. 2020" img="/projects/Musical.png" 
            techStack={["Pyaudio", "FFT", "lilypond", "MCMC"]}
            techLang={["python"]}
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
            techStack={["Express.js", "Socket.IO", "docker"]}
            techLang={["HTML", "CSS", "javascript"]}
            demos={[
                <NavItemIcon key={0} label="github" icon={<SiGithub />} url="https://github.com/THe142857/Chatting-while-Compiling" />,
            ]}/>
        },
    ];

    const projectsTranform = projects.reduce<Project[][]>(
        (ret: Project[][], cur: Project, i: number) => {
            if (i % 2 == 0) {
                ret.push([cur])
            } else {
                ret[ret.length - 1].push(cur);
            }
            return ret;
        }, []);

    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Selected projects I've done in the past including hackathon and personal projects" />
            </Head>
            <VStack spacing="5vh">
                <Heading as="h1">
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
            </>
    );
};

export default projects;

