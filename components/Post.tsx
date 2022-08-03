import NavItemText from "../components/NavItemText";
import { VStack, Flex, Text } from "@chakra-ui/react";

const Post = ({ post }: any) => {
    return (
        <VStack spacing={1} align="start">
            <Flex w="60vw" direction="row" justifyContent="space-between">
                <NavItemText label={post.frontmatter.title} url={`blog/${post.slug}`} />
                <Text>
                    {post.frontmatter.date}
                </Text>
            </Flex>
            <Text as="i">
                {post.frontmatter.description}
            </Text>
        </VStack>
    );
};

export default Post;
