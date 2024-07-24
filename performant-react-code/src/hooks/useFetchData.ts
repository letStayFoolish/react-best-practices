import { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData.ts";

export interface Post {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export const useFetchData = () => {
  console.log("Hook useFetchData is called!");
  const [fetchedPosts, setFetchedPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchData(setFetchedPosts);
  }, []);

  return { fetchedPosts, setFetchedPosts };
};
