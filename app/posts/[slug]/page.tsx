import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import Link from "next/link";
import CommentBox from "@/app/components/Comment";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post) =>
      post.slug === params.slug || post._raw.flattenedPath === params.slug,
  );
  if (!post) notFound();
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => {
    return post._raw.flattenedPath === params.slug || post.slug === params.slug;
  });
  if (!post || post?.publish === false) notFound();
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <article className="mx-auto max-w-fit py-8">
      <div className="flex text-lg font-semibold justify-between px-5">
        <Link className="hover:text-blue-600 transition-colors" href={"/"}>
          Home
        </Link>
        <Link className="hover:text-blue-600 transition-colors" href={"/posts"}>
          All Posts
        </Link>
      </div>
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-base text-gray-600">
          {format(parseISO(post.date), "d LLLL, yyyy")}
        </time>
        <div className="mb-1 text-base text-gray-600">{post.readTime.text}</div>
        <h1 className="text-3xl font-bold px-8 whitespace-pre-wrap w-full mx-auto">
          {post.title}
        </h1>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 px-4 prose prose-invert prose-a:text-blue-700 mx-auto">
        <MDXContent />
      </div>
      <br />
      {/* <CommentBox /> */}
    </article>
  );
};

export default PostLayout;
