import Post from "../components/Post";
import { getAllPosts } from "../postsUtils";
import NextLink from "next/link";
import { Heading, VStack, Text, List, ListItem } from "@chakra-ui/react";

type Props = {
    fontmatter: {
        title: string,
        date: string,
        description: string
    },
    slug: string
}[];

const posts = ({ posts }: any) => {
    return (
        <VStack spacing="2vh">
            <Heading as="h1" size="lg">
                 My Blog
             </Heading>
            <Text>
            Here will contain a collection of posts that I&#39;ve written up on interesting topics I&#39;ve found including mathematics, computer science, web dev, books, and my travel.
            </Text>
            <List spacing={5}>
                {posts.map((post: any, index: number) => {
                    // console.log(post.slug, index);
                    return <ListItem key={index}>
                        <Post post={post} />
                        {/* <NextLink href={`posts/${post.slug}`}>{post.frontmatter.title + " date: " + post.frontmatter.date}</NextLink> */}
                    </ListItem>
                })}
            </List>
        </VStack>
    );
};

export const getStaticProps = async () => {
    const posts = getAllPosts();

    return {
        props: { posts },
    };

};

export default posts;
