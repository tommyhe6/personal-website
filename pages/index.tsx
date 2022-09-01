import NavBar from "../components/NavBar";
import NavItemButton from "../components/NavItemButton";
import NavItemText from "../components/NavItemText";
import { Text, Box, Flex, Heading, Spacer, VStack, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";
import Typewriter from "typewriter-effect";
import type { NextPage } from "next";
import styles from "./index.module.css";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Home
                </title>
                <meta name="description" content="Hey, I'm Tommy! I am a U3 B.Sc. Honors Mathematics & Computer Science student with a Cognitive Science minor at McGill University. I'm most interested in new technologies with potential for high impact; I'm currently looking into areas of cryptography and machine learning. I also enjoy learning about math, mostly discete math and algebra. I aim to take my strong math background to help gain a deeeper understanding and explore novelties in computer science. Outside of academics, I like playing tennis, ping pong, poker, and trying new things." />
            </Head>
            <Flex h = "100%" direction="column" alignItems="center" justifyContent="space-evenly" p={3}>
                <Heading as="h1" size="4xl">
                    TOMMY HE
                </Heading>
                <Box className={styles.typewriter}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(80)
                                .typeString("Curious learner passionate about")
                                .typeString("<br>mathematics and computer science")
                                .start();
                        }}
                        />
                </Box>
                <Text>
                    Hey, I&#39;m Tommy! I am a U3 B.Sc. Honors Mathematics & Computer Science student with a Cognitive Science minor at McGill University. I&#39;m most interested in new technologies with potential for high impact; I&#39;m currently looking into areas of cryptography and machine learning. I also enjoy learning about math, mostly discete math and algebra. I aim to take my strong math background to help gain a deeeper understanding and explore novelties in computer science. Outside of academics, I like playing tennis, ping pong, poker, and trying new things. If you ever want to discuss anything, feel free to reach out at {" "}
                    <NavItemText label="tommy@tommyhe.com" url="mailto:tommy@tommyhe.com" />
                    .
                </Text>
                <NavItemButton navName="Resume" variant="outline" url="Tommy_He_Resume.pdf" size="md" isExternal={true}/>
            </Flex>
            </>
    );
};

export default Home;
