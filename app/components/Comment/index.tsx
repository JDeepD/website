"use client";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import useComments from "@/app/hooks/useComments";
import { Auth0Provider } from "@auth0/auth0-react";

function CommentBox() {
  const { text, setText, comments, onSubmit, onDelete } = useComments();

  return (
    <div className="mt-20">
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </div>
  );
}

export default function CommentBoxWrapped() {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
    >
      <CommentBox />
    </Auth0Provider>
  );
}
