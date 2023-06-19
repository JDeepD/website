import fetchComment from "../lib/fetchComments";
import createComments from "../lib/createComment";
import deleteComments from "../lib/deleteComment";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  return fetchComment(req, res);
}
export async function POST(req: NextRequest, res: NextResponse) {
  return createComments(req, res);
}
export async function DELETE(req: NextRequest, res: NextResponse) {
  return deleteComments(req, res);
}
