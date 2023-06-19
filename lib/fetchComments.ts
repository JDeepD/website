import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import type { Comment } from "./interfaces";
import redis from "./redis";
import clearUrl from "./clearURL";

async function fetchComments(req: any, res: any) {
  const url = clearUrl(req.headers.referer as string);
  if (!redis) {
    console.log(redis);
    return res.status(500).json({ error: "Redis connection failed" });
  }
  try {
    const raw = await redis.lrange(url, 0, -1);
    const comments = raw.map((c) => {
      const comment: Comment = JSON.parse(c);
      delete comment.user.email;
      return comment;
    });
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(400).json({ message: "Unexpected error occurred." });
  }
}

export default fetchComments;
