import { NextRequest, NextResponse } from "next/server";
import type { User, Comment } from "./interfaces";
import { headers } from "next/headers";
import redis from "./redis";
import getUser from "./getUser";
import clearUrl from "./clearURL";

async function deleteComment(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const authorization = headersList.get("authorization");
  const referer = headersList.get("referer");
  const url = clearUrl(referer as string);
  const { comment } = await req.json();

  if (!comment || !authorization) {
    return NextResponse.json({ error: "Missing param" });
  }

  if (!redis) {
    return NextResponse.json({ error: "Redis connection failed" });
  }
  try {
    const user: User = await getUser(authorization);
    if (!user) return NextResponse.json({ error: "Unauthorized" });
    comment.user.email = user.email;
    console.log(comment)
    const isAdmin = process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL === user.email;
    const isAuthor = user.sub === comment.user.sub;
    if (!isAdmin && !isAuthor) {
      return NextResponse.json({ error: "Unauthorized" });
    }
    const result = await redis.lrem(url, 0, JSON.stringify(comment));
    console.log(result);
    return NextResponse.json({ message: "Comment deleted successfully." });
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error occurred." });
  }
}

export default deleteComment;
