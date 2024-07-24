import { Dispatch, SetStateAction } from "react";
import { Post } from "../hooks/useFetchData.ts";

export async function fetchData(setState: Dispatch<SetStateAction<Post[]>>) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    const jsonData = await res.json();

    setState(jsonData);
  } catch (error: any) {
    console.error(error);
  }
}
