import type { MDXContentProps } from "mdx-bundler/client";
import { getAllPosts, getPost, MdxBody } from "../../blogUtils";
import { VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Path = {
    params: {
        slug: string;
    }
}

const Post = ({ frontmatter, code }: MdxBody) => {
    const Component: React.FunctionComponent<MDXContentProps> = React.useMemo(() => getMDXComponent(code), [code]);
    return (
        <VStack spacing={3} align="front">
            <Heading as="h1" size="lg">
                {frontmatter.title}
            </Heading>
            <Text size="md" color="lightgray">
                {frontmatter.date}
            </Text>
            <Component />
        </VStack>
    );
};

export const getStaticProps = async ({ params }: Path) => {
    const post: MdxBody = await getPost(params.slug);
    return {
        props: { ...post },
    };
};

export const getStaticPaths = async () => {
    const paths: Path[] = getAllPosts().map(({ slug }: { slug: string }) => ({ params: { slug } }));
    return {
        paths,
        fallback: false,
    };
};

export default Post;
