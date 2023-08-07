import NavItemText from "components/NavItemText";
import { MdxMeta } from "../blogUtils";

import { VStack, Flex, Text } from "@chakra-ui/react";

type Props = {
    post: MdxMeta,
}

const PostItem: (props: Props) => JSX.Element = ({ post }) => {
    return (
        <VStack alignItems="start">
            <Flex width="80vw" direction="row" justifyContent="space-between">
                <NavItemText label={post.frontmatter.title} url={`blog/${post.slug}`} fontSize="lg" />
                <Text color="date">
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
