import React from "react";
import { Post } from "../hooks/useFetchData.ts";

const PostList: React.FC<{ fetchedPosts: Post[] }> = ({ fetchedPosts }) => {
  console.log("Rendering PostList!");

  return (
    <div>
      {!fetchedPosts.length && (
        <p className="text-xl text-center font-medium">No Data.</p>
      )}

      {fetchedPosts.slice(0, 7).map((item) => (
        <article
          key={item.id}
          className="flex flex-col items-center justify-center mt-2 mb-3 w-full border-b-2 border-gray-50 p-5"
        >
          <h3 className="text-3xl bg-gray-800 w-full uppercase py-5 text-white">
            {item.title}
          </h3>
          <p className="text-lg mt-3 font-mono text-gray-200">{item.body}</p>
        </article>
      ))}
    </div>
  );
};

export default PostList;
