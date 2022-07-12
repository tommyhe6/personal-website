import { getAllPosts } from "../postsUtils";
import NextLink from "next/Link";

export default function BlogList({ posts }) {
    return (
        <div className="wrapper">
            <h1>Here will contain a collection of posts that I've written up on intresting topics I've found including mathematics, computer science, web dev, and my travel.</h1>
            <ul>
                {posts.map((post, index) => {
                    console.log(post.slug, index);
                    return <li key={index}>
                        <NextLink href={`posts/${post.slug}`}>{post.frontmatter.title + " date: " + post.frontmatter.date}</NextLink>
                    </li>
                })}
            </ul>
        </div>

    );
}

export const getStaticProps = async () => {
    const posts = getAllPosts();

    return {
        props: { posts },
    };
};
