import redis from "./redis";
import getUser from "./getUser";
import clearUrl from "./clearURL";
import { randomUUID } from "crypto";
import { Comment } from "./interfaces";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

async function createComment(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const authorization = headersList.get("authorization");
  const referer = headersList.get("referer");
  const url = clearUrl(referer as string);
  const { text } = await req.json();
  if (!authorization) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!text) {
    return NextResponse.json(
      { error: "Missing required parameter(s)" },
      { status: 400 }
    );
  }
  if (!redis) {
    return NextResponse.json(
      { error: "Redis connection failed" },
      { status: 500 }
    );
  }
  try {
    const user = await getUser(authorization);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { name, picture, email, sub } = user;
    const comment: Comment = {
      id: randomUUID(),
      created_at: Date.now(),
      url,
      text: text,
      // Make sure email is the last param!
      user: { name, picture, sub, email },
    };
    await redis.lpush(url, JSON.stringify(comment));
    return NextResponse.json(comment, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "Unexpected Error" }, { status: 500 });
  }
}

export default createComment;
