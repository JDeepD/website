import BlogPost from "../components/Bloghead/Blogpost";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export default function Blog() {
  allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <div>
      <div className="mt-6 flex justify-center font-extrabold text-6xl">Posts</div>
      <br />
      <div className="flex justify-center">
        <div className="flex flex-col w-1/2 items-start gap-3">
          {allPosts.map((item) => (
            <BlogPost
              title={item.title}
              date={item.date}
              url={item.url}
              readTime={item.readTime.text}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
