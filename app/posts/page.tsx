import BlogPost from "../components/Bloghead/Blogpost";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";

export default function Blog() {
  allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const Posts = allPosts.filter((post) => post.publish);
  return (
    <div>
      <div className="mt-6 flex justify-between m-auto max-w-3xl font-extrabold text-2xl px-4">
        <span className="hover:text-blue-600 transition-colors">
          <Link href="/">Home</Link>
        </span>
        <span>Posts</span>
        <span className="hover:text-blue-600 transition-colors">
          <Link href="https://github.com/jdeepd/website" target="_blank">
            Github
          </Link>
        </span>
      </div>
      <br />
      <div className="flex justify-center">
        <div className="flex flex-col max-w-3xl mx-8 items-start gap-3">
          {Posts.map((item) => {
            if (item.redirect === "") {
              return (
                <BlogPost
                  title={item.title}
                  date={item.date}
                  url={item.url}
                  readTime={item.readTime.text}
                  key={item._id}
                />
              );
            } else {
              return (
                <div className="flex" key={item._id}>
                  <Link
                    className="text-2xl font-extrabold max-w-fit hover:text-sky-600 transition-all cursor-pointer"
                    href={item.redirect}
                  >
                    {item.title}
                  </Link>
                  <span className="text-green-600">(redirected)</span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
