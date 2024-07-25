import React from "react";
import { Post } from "../hooks/useFetchData.ts";

const SelectedPost: React.FC<{ post: Post }> = ({ post }) => {
  console.log("Render SelectedPost!!");

  return (
    <div className="p-6 w-1/2 mx-auto bg-stone-800 rounded-xl shadow-md flex items-center space-x-4">
      <section>
        <div className="text-xl font-medium text-white">{post?.title}</div>
        <p className="text-gray-500">{post?.body}</p>
      </section>
    </div>
  );
};

export default SelectedPost;
