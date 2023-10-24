import { VStack, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import type { NextPage } from "next";

const Page404: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    404 Error
                </title>
                <meta name="description" content="404 Error!" />
            </Head>
            <VStack>
                <Heading as="h1">
                    404
                </Heading>
                <br />
                <Text>
                    Woops! This page does not exist.
                </Text>
            </VStack>
        </>
    );
};

export default Page404;
