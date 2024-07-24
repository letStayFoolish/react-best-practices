import React from "react";
import { Post } from "../hooks/useFetchData.ts";

const PostList: React.FC<{ fetchedPosts: Post[] }> = ({ fetchedPosts }) => {
  console.log("Rendering PostList!");

  return (
    <div>
      {!fetchedPosts.length && <p>No Data.</p>}

      {fetchedPosts.splice(0, 7).map((item) => (
        <article
          key={item.id}
          className="flex flex-col items-center justify-center mt-2 mb-3 w-full border-b-2 border-stone-50"
        >
          <h3 className="text-3xl bg-stone-800 w-full uppercase py-5">
            {item.title}
          </h3>
          <p className="text-lg mt-3 font-mono">{item.body}</p>
        </article>
      ))}
    </div>
  );
};

export default PostList;
