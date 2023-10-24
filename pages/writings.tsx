import PostItem from "components/PostItem";
import { getAllPosts, MdxMeta } from "writingsUtils";

import { VStack, List, ListItem } from "@chakra-ui/react";
import Head from "next/head";
import type { NextPage } from "next";

type Props = {
    posts: MdxMeta[],
};

const Posts: NextPage<Props> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>
                    Writings
                </title>
                <meta name="description" content="My writings mostly on interesting topics I&#39;ve found in mathematics and computer science." />
            </Head>
            <VStack alignItems="start" width="100%">
                <List spacing={5} width="100%">
                    {posts
                        .sort((a, b) => (
                            new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf()
                        ))
                        .map((post: MdxMeta, index: number) => {
                            return <ListItem key={index}>
                                <PostItem post={post} />
                            </ListItem>
                        })}
                </List>
            </VStack>
        </>
    );
};

export const getStaticProps = async (): Promise<{ props: { posts: MdxMeta[] } }> => {
    const posts: MdxMeta[] = getAllPosts();

    return {
        props: { posts },
    };

};

export default Posts;
