import React, { useEffect } from "react";
import { Post } from "../hooks/useFetchData.ts";

type PostListProps = {
  posts: Post[];
};

// Rule #3. Never create new components inside the render function of another component.
const Item = ({ post }: { post: Post }) => {
  useEffect(() => {
    console.log("Mounted!");
  }, []);
  /**
   * In normal circumstances, useEffect with an empty dependencies array would be triggered only once
   * - after the component finished its mounting and very first rendering.
   * After that, the light-weight re-rendering process in React kicks in, and component is not created from scratch,
   * but only updated when needed (that’s what makes React so fast btw)
   * */

  console.log("Render");

  return (
    <article
      key={post.id}
      className="flex flex-col items-center justify-center mt-2 mb-3 w-full border-b-2 border-gray-50 p-5"
    >
      <h3 className="text-3xl bg-gray-800 w-full uppercase py-5 text-white">
        {post.title}
      </h3>
      <p className="text-lg mt-3 font-mono text-gray-200">{post.body}</p>
    </article>
  );
};

// const ItemMemoized = memo(Item); // With this we prevent rendering 7 times

const PostList: React.FC<PostListProps> = ({ posts }) => {
  console.log("Rendering PostList!");

  // Rule #3. Never create new components inside the render function of another component.
  // const Item = ({ post }: { post: Post }) => {
  //   const onItemClick = () => onPostChange(post);
  //
  //   useEffect(() => {
  //     console.log("Mounted!");
  //   }, []);
  //   /**
  //    * In normal circumstances, useEffect with an empty dependencies array would be triggered only once
  //    * - after the component finished its mounting and very first rendering.
  //    * After that, the light-weight re-rendering process in React kicks in, and component is not created from scratch,
  //    * but only updated when needed (that’s what makes React so fast btw)
  //    * */
  //
  //   console.log("Render");
  //
  //   return (
  //     <article
  //       key={post.id}
  //       className="flex flex-col items-center justify-center mt-2 mb-3 w-full border-b-2 border-gray-50 p-5"
  //     >
  //       <h3 className="text-3xl bg-gray-800 w-full uppercase py-5 text-white">
  //         {post.title}
  //       </h3>
  //       <p className="text-lg mt-3 font-mono text-gray-200">{post.body}</p>
  //       <button
  //         type={"button"}
  //         className="flex justify-center items-center text-center bg-stone-700 rounded-md text-xl text-white hover:opacity-70 px-4 py-2"
  //         onClick={onItemClick}
  //       >
  //         Click
  //       </button>
  //     </article>
  //   );
  // };

  return (
    <div>
      {!posts.length && (
        <p className="text-xl text-center font-medium">No Data.</p>
      )}

      {posts.slice(0, 7).map((item) => (
        <Item key={item.id} post={item} />
        // <ItemMemoized key={item.id} post={item} /> // With this we prevent rendering 7 times
      ))}
    </div>
  );
};

export default PostList;
