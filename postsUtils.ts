import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax";
// import rehypePrism from "rehype-prism";

export const postsDir = path.join(process.cwd(), "public/posts");

export const getSource = (fileName: string) => {
    return fs.readFileSync(path.join(postsDir, fileName));
};

export const getAllPosts = () => {
    return fs
    .readdirSync(postsDir)
    .map((file) => {
        const source = getSource(file);
        const slug = file.replace(/\.mdx?$/, "");
        const { data } = matter(source);

        return {
            frontmatter: data,
            slug: slug,
        };
    });
};

export const getPost = async (slug: string) => {
    const source = getSource(slug + ".mdx");

    const { code, frontmatter } = await bundleMDX({
        source: String(source),
        mdxOptions(options) {
            options.remarkPlugins = [...(options?.remarkPlugins ?? []), [remarkMath]];
            options.rehypePlugins = [...(options?.rehypePlugins ?? []), [rehypeMathjax, {
                tex: {
                    inlineMath: [              
                        ["\\(", "\\)"]
                    ],
                    displayMath: [
                        ["\\[", "\\]"]
                    ],
                }
            }]];
            return options;
        },
    });

    // console.log(frontmatter, code);

    return {
        frontmatter,
        code,
    };
};
