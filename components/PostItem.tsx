import NavItemText from "components/NavItemText";
import { MdxMeta } from "../writingsUtils";

import { VStack, HStack, Text } from "@chakra-ui/react";

type Props = {
    post: MdxMeta,
}

const PostItem: (props: Props) => JSX.Element = ({ post }) => {
    return (
        <VStack alignItems="start">
            <HStack justifyContent="space-between" width="100%">
                <NavItemText label={post.frontmatter.title} url={`writings/${post.slug}`} />
                <Text color="date">
                    {post.frontmatter.date}
                </Text>
            </HStack>
            <Text as="i">
                {post.frontmatter.description}
            </Text>
        </VStack>
    );
};

export default PostItem;
