import NavBar from "../components/NavBar";
import { Box, Flex, Text, Spacer, VStack, Button, Icon, Image, Link } from "@chakra-ui/react";
import NextLink from "next/Link";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Flex height="100vh" direction="column" alignItems="center" justifyContent="space-evenly" p={3}>
            <Spacer />
            <VStack>
                {/* <Image src="/PIC.jpg" boxSize="150px" borderRadius="full" /> */}
                <Text>
                    TOMMY HE
                </Text>
                <Text>
                    U2 Math & CS Student at McGill
                </Text>
            </VStack>
            <Spacer />
        </Flex>
    );
};

export default Home;
