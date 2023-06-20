import type { Comment } from "../api/lib/interfaces";
import React, { useState } from "react";
import useSWR from "swr";
import { useAuth0 } from "@auth0/auth0-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useComments = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [text, setText] = useState("");
  const { data: comments, mutate } = useSWR<Comment[]>(
    "/api/comment",
    fetcher,
    {
      fallbackData: [],
    }
  );
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();
    try {
      await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      setText("");
      await mutate();
    } catch (error) {
      console.log(error);
    }
  };
  const onDelete = async (comment: Comment) => {
    const token = await getAccessTokenSilently();
    try {
      await fetch("/api/comment/delete", {
        method: "POST",
        body: JSON.stringify({ comment }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      await mutate();
    } catch (error) {
      console.log(error);
    }
  };
  return { text, setText, comments, onSubmit, onDelete };
}

export default useComments;