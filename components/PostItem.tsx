import NavItemText from "../components/NavItemText";
import { VStack, Flex, Text } from "@chakra-ui/react";
import { MdxMeta } from "../blogUtils";

type Props = {
    post: MdxMeta,
}

const PostItem: (props: Props) => JSX.Element = ({ post }) => {
    return (
        <VStack spacing={1} align="start">
            <Flex w="60vw" direction="row" justifyContent="space-between">
                <NavItemText label={post.frontmatter.title} url={`blog/${post.slug}`} />
                <Text color="lightgray">
                    {post.frontmatter.date}
                </Text>
            </Flex>
            <Text as="i">
                {post.frontmatter.description}
            </Text>
        </VStack>
    );
};

export default PostItem;
