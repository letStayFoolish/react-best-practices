import { useEffect, useState } from "react";

export interface Post {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export const useFetchData = () => {
  const [fetchedPosts, setFetchedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const jsonData = await res.json();

        setFetchedPosts(jsonData);
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { fetchedPosts, setFetchedPosts };
};
