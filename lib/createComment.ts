import type { NextApiRequest, NextApiResponse } from "next";
import redis from "./redis";
import getUser from "./getUser";
import clearUrl from "./clearURL";
import { randomUUID } from "crypto";
import { Comment } from "./interfaces";

async function createComment(req: any, res: any) {
  const url = clearUrl(req.headers.referer as string);
  const { commenttext, postId } = req.body;
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!commenttext || !postId) {
    return res.status(400).json({ error: "Missing required parameter(s)" });
  }
  if (!redis) {
    return res.status(500).json({ error: "Redis connection failed" });
  }
  try {
    const user = await getUser(authorization);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { name, picture, email, sub } = user;
    const comment: Comment = {
      id: randomUUID(),
      created_at: Date.now(),
      url,
      text: commenttext,
      user: { name, picture, email, sub },
    };

    await redis.lpush(url, JSON.stringify(comment));
    res.status(200).json(comment);

  } catch (e) {
    return res.status(500).json({ error: "Unexpected Error" });
  }
}

export default createComment;
