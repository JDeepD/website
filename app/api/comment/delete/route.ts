import { NextRequest, NextResponse } from "next/server";
import deleteComment from "../../lib/deleteComment";

export async function POST(req: NextRequest, res: NextResponse) {
  return deleteComment(req, res);
}