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
                    Tommy He
                </title>
                <meta name="description" content="Hey, I'm Tommy! I am a U3 B.Sc. Honors Mathematics & Computer Science student at McGill University. I'm most interested in new technologies with potential for high impact." />
            </Head>
            <Flex flex={1} direction="column" alignItems="center" justify="space-evenly" alignSelf="center">
                <Spacer />
                <Spacer />
                <Spacer />
                <Heading flex={2} as="h1" textAlign="center">
                    TOMMY HE
                </Heading>
                <Box flex={1} className={styles.typewriter}>
                    <Typewriter
                        options={{
                            cursor: ""
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(80)
                                .typeString("Invariably curious. Always learning.")
                                .start();
                        }}
                        />
                </Box>
                {/* <Text flex={2}> */}
                {/*     Interested in new technologies with potential for high impact{" "} */}
                {/*     Interested in taking my math background to gain a stronger understanding and explore novelties in CS */}
                {/*     <NavItemText label="tommy@tommyhe.com" url="mailto:tommy@tommyhe.com" /> */}
                {/*     ! */}
                {/* </Text> */}
                <NavItemButton navName="Resume" variant="outline" url="Tommy_He_Resume.pdf" size="md" isExternal={true}/>
            </Flex>
            </>
    );
};

export default Home;
