import { getAllPosts, getPost, MdxBody } from "writingsUtils";

import { getMDXComponent, type MDXContentProps } from "mdx-bundler/client";
import { VStack, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

type Path = {
    params: {
        slug: string;
    }
}

const Post = ({ frontmatter, code }: MdxBody) => {
    const Component: React.FunctionComponent<MDXContentProps> = React.useMemo(() => getMDXComponent(code), [code]);
    return (
        <>
            <Head>
                <title>
                    {frontmatter.title}
                </title>
                <meta name="description" content={frontmatter.description} />
            </Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossOrigin="anonymous" />
            <VStack alignItems="start" width="100%">
                <Heading as="h1">
                    {frontmatter.title}
                </Heading>
                <Text size="md" color="date">
                    {frontmatter.date}
                </Text>
                <Component />
            </VStack>
        </>
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
