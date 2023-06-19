import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import type { Comment } from "./interfaces";
import redis from "./redis";
import clearUrl from "./clearURL";
import { headers } from "next/headers";

async function fetchComments(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const referer = headersList.get("referer");
  const url = clearUrl(referer as string);
  if (!redis) {
    return NextResponse.json({ error: "Redis connection failed" });
  }
  try {
    const rawComments = await redis.lrange(url, 0, -1);

    const comments = rawComments.map((c) => {
      const comment: Comment = JSON.parse(JSON.stringify(c));
      delete comment.user.email;
      return comment;
    });
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export default fetchComments;
