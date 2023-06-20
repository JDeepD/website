import fetchComment from "../lib/fetchComments";
import createComments from "../lib/createComment";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  return fetchComment(req, res);
}
export async function POST(req: NextRequest, res: NextResponse) {
  return createComments(req, res);
}
