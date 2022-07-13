import { getAllPosts } from "../postsUtils";
import NextLink from "next/link";

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
        <div className="wrapper">
            <h1>Here will contain a collection of posts that I&#39;ve written up on intresting topics I&#39;ve found including mathematics, computer science, web dev, and my travel.</h1>
            <ul>
                {posts.map((post: any, index: number) => {
                    // console.log(post.slug, index);
                    return <li key={index}>
                        <NextLink href={`posts/${post.slug}`}>{post.frontmatter.title + " date: " + post.frontmatter.date}</NextLink>
                    </li>
                })}
            </ul>
        </div>
    );
};

export const getStaticProps = async () => {
    const posts = getAllPosts();

    // console.log(posts);

    return {
        props: { posts },
    };

};
export default posts;
