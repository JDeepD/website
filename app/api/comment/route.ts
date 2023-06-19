import type { NextApiRequest, NextApiResponse } from "next";
import fetchComment from "../../../lib/fetchComments";
import createComments from "../../../lib/createComment";
import deleteComments from "../../../lib/deleteComment";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return fetchComment(req, res);
}
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return createComments(req, res);
}
export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  return deleteComments(req, res);
}
