import NavItemText from "../components/NavItemText";
import { Box, List, VStack, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const papers: NextPage = () => {
    return (
        <VStack spacing="2vh">
            <Heading as="h1" size="lg">
                Writeups
            </Heading>
            <Text>
                Here will contain various reports, papers, and notes that I&#39;ve written up that may be of value.
            </Text>
            <VStack w="60vw" align="start">
                <Heading as="h3" size="sm">
                    Projects
                </Heading>
                <NavItemText label="Introduction to Isogeny Based Cryptography" url="/writeups/COMP400Paper.pdf" isExternal={true} />
                <NavItemText label="Introduction to Graph Neural Networks and Their Expressive Power" url="/writeups//GNNs.pdf" isExternal={true} />
                <NavItemText label="Spectral Norm Regularization for Improving the the Generalizability of Deep Learning" url="/writeups/COMP562Report.pdf" isExternal={true} />
                <Heading as="h3" size="sm">
                    Notes
                </Heading>
                <NavItemText label="COMP562 Theory of Machine Learning Notes" url="/writeups/COMP562Notes.pdf" isExternal={true} />
                <NavItemText label="Solutions to Selected Exercises in Marcus and Others" url="/writeups/DRPPaper.pdf" isExternal={true} />
            </VStack>
        </VStack>
    );
};

export default papers;

