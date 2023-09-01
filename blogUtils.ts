import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

type Frontmatter = {
    [key: string]: string,
};

export type MdxMeta = {
    frontmatter: Frontmatter,
    slug: string,
};

export type MdxBody = {
    frontmatter: Frontmatter,
    code: string,
};

export const postsDir: string = path.join(process.cwd(), "public/writings");

export const getSource = (fileName: string): Buffer => {
    return fs.readFileSync(path.join(postsDir, fileName));
};

export const getAllPosts = (): MdxMeta[] => {
    if (!fs.existsSync(postsDir)) {
        return [];
    }
    return fs
        .readdirSync(postsDir)
        .map((file) => {
            const source: Buffer = getSource(file);
            const slug: string = file.replace(/\.mdx?$/, "");
            const { data }: { data: Frontmatter } = matter(source);

            return {
                frontmatter: data,
                slug: slug,
            };
        });
};

export const getPost = async (slug: string): Promise<MdxBody> => {
    const source = getSource(slug + ".mdx");

    const { code, frontmatter }: { code: string, frontmatter: Frontmatter } = await bundleMDX({
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

    return {
        frontmatter: frontmatter,
        code: code,
    };
};
