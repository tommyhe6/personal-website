import MyLink from "components/MyLink";

import {
  VStack,
  Text,
  UnorderedList,
  ListItem,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tommy He</title>
        <meta
          name="description"
          content="Hey, I'm Tommy! Welcome to my site : )"
        />
      </Head>
      <VStack alignItems="start" width="100%">
        <Box lineHeight="1.7em">
          <Text>Hey, I&#39;m Tommy! I&#39;m currently working on <MyLink label="Clarum" url="https://clarum.ai" isExternal={true} />, bringing AI-powered due diligence to private equity firms. If you are or know anyone who is interested in improving their diligence workflow, I would love to hear from you.</Text>
        </Box>
      </VStack>
    </>
  );
};

export default Home;
