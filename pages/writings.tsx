import NavItemText from "../components/NavItemText";
import { Box, List, VStack, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import type { NextPage } from "next";

const Writings: NextPage = () => {
    return (
        <>
            <Head>
                <title>Writings</title>
            </Head>
            <VStack spacing="2vh">
                <Heading as="h1">
                    Writings
                </Heading>
                <meta name="description" content="Various reports, papers, and notes that I've written up that may be of value" />
                <Text>
                    Various reports, papers, and notes that I&#39;ve written up that may be of value
                </Text>
                <VStack w="60vw" align="start">
                    <Heading as="h3" size="md">
                        Projects
                    </Heading>
                    <NavItemText label="Introduction to Isogeny Based Cryptography" url="/writings/COMP400Paper.pdf" isExternal={true} />
                    <NavItemText label="Introduction to Graph Neural Networks and Their Expressive Power" url="/writings/GNNs.pdf" isExternal={true} />
                    <NavItemText label="Spectral Norm Regularization for Improving the the Generalizability of Deep Learning" url="/writings/COMP562Report.pdf" isExternal={true} />
                    <Heading as="h3" size="md">
                        Notes
                    </Heading>
                    <NavItemText label="COMP562 Theory of Machine Learning Notes" url="/writings/COMP562Notes.pdf" isExternal={true} />
                    <NavItemText label="Solutions to Selected Exercises in Marcus and Others" url="/writings/DRPPaper.pdf" isExternal={true} />
                </VStack>
            </VStack>
            </>
    );
};

export default Writings;

