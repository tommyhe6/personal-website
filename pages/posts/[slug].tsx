import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getPost } from "../../postsUtils";

const Post = ({ code, frontmatter }) => {
    console.log(code);
    // const Component = React.useMemo(() => getMDXComponent(code), [code]);
    const Component = getMDXComponent(code);
    return (
        <div className="wrapper">
            <h1>{frontmatter.title}</h1>
            <Component />
        </div>
    );
};

export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug);
    return {
        props: { ...post },
    };
};

export const getStaticPaths = async () => {
    const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
    return {
        paths,
        fallback: false,
    };
};

export default Post;
