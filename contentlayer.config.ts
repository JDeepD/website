import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { json } from "stream/consumers";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: 'mdx',
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
    readTime:{
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw)
    }
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypePrettyCode, rehypeAutolinkHeadings],
  },
});
