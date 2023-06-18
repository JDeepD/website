import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { json } from "stream/consumers";

type Theme =
  | "css-variables"
  | "dark-plus"
  | "dracula-soft"
  | "dracula"
  | "github-dark-dimmed"
  | "github-dark"
  | "github-light"
  | "hc_light"
  | "light-plus"
  | "material-theme-darker"
  | "material-theme-lighter"
  | "material-theme-ocean"
  | "material-theme-palenight"
  | "material-theme"
  | "min-dark"
  | "min-light"
  | "monokai"
  | "nord"
  | "one-dark-pro"
  | "poimandres"
  | "rose-pine-dawn"
  | "rose-pine-moon"
  | "rose-pine"
  | "slack-dark"
  | "slack-ochin"
  | "solarized-dark"
  | "solarized-light"
  | "vitesse-dark"
  | "vitesse-light";

const currentTheme: Theme = "github-dark-dimmed"

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    slug: { type: "string", required: false },
    draft: { type: "boolean", default: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", ""),
    },
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    readTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: currentTheme,
          keepBackground: true,
          onVisitHighlightedWord(element: any, id: any) {
            element.properties.className = ["word"];

            if (id) {
              // If the word spans across syntax boundaries (e.g. punctuation), remove
              // colors from the child elements.
              if (element.properties["data-rehype-pretty-code-wrapper"]) {
                element.children.forEach((child: any) => {
                  child.properties.style = "";
                });
              }

              element.properties.style = "";
              element.properties["data-word-id"] = id;
            }
          },
        },
      ],
      rehypeAutolinkHeadings,
    ],
  },
});
