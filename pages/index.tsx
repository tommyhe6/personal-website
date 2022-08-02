import NavBar from "../components/NavBar";
import NavItemLink from "../components/NavItemLink";
import { Text, Box, Flex, Heading, Spacer, VStack, Button, Icon, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Typewriter from "typewriter-effect";
import type { NextPage } from "next";
import styles from "./index.module.css";


const Home: NextPage = () => {
    return (
        <Flex h="97vh" direction="column" alignItems="center" justifyContent="space-evenly" p={3}>
            <Spacer />
            <Flex h="50vh" direction="column" alignItems="center">
                <Heading h="100px" as="h1" size="4xl">
                    TOMMY HE
                </Heading>
                <div className={styles.typewriter}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(70)
                                .typeString("Curious learner passionate about")
                                .typeString("<br>mathematics and computer science")
                                .start();
                        }}
                        />
                </div>
                <Spacer />
                <Text>
                    Hey, I&#39;m Tommy! I am a U3 B.Sc. Honors Mathematics & Computer Science student with a Cognitive Science minor at McGill University. I&#39;m most interested in new technologies with potential for high impact; I&#39;m currently looking into areas of cryptography and machine learning. I also enjoy learning about math, mostly discete math and algebra. I aim to take my strong math background to help gain a deeeper understanding and explore novelties in computer science. Outside of academics, I like playing tennis, ping pong, poker, and trying new things.
                </Text>
            </Flex>
            <Flex h="15vh" flexDirection="column" alignItems="center">
            <Spacer />
            <NavItemLink navName="Resume" variant="outline" url="Tommy_He_Resume.pdf" size="md" isExternal={true}/>
            <Spacer />
            </Flex>
        </Flex>
    );
};

export default Home;
