import PostItem from "../components/PostItem";
import { getAllPosts, MdxMeta } from "../blogUtils";
import NextLink from "next/link";
import { Heading, VStack, Text, List, ListItem } from "@chakra-ui/react";
import type { NextPage } from "next";

type Props = {
    posts: MdxMeta[],
};

const posts: NextPage<Props> = ({ posts }) => {
    return (
        <VStack spacing="2vh">
            <Heading as="h1" size="lg">
                My Blog
            </Heading>
            <Text>
                Here will contain a collection of posts that I&#39;ve written up on interesting topics I&#39;ve found including mathematics, computer science, web dev, books, and my travel.
            </Text>
            <List spacing={5}>
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
    );
};

export const getStaticProps = async (): Promise<{ props: { posts: MdxMeta[] } }> => {
    const posts: MdxMeta[] = getAllPosts();

    return {
        props: { posts },
    };

};

export default posts;
