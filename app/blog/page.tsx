import BlogPost from "../components/bloghead/blogpost"
import {allPosts, Post} from "contentlayer/generated"

export default function Blog() {
    console.log(allPosts);
    
    return (
        <div className="flex flex-col items-center gap-3">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </div>
    )
}