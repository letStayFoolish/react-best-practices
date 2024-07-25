import { Post, useFetchData } from "./hooks/useFetchData.ts";
import Button from "./components/Button.tsx";
import PostList from "./components/PostList.tsx";
import { useCallback, useMemo, useState } from "react";
import SelectedPost from "./components/SelectedPost.tsx";

export default function App() {
  console.log("Rendering App!");

  const [counter, setCounter] = useState<number>(0);

  const { fetchedPosts } = useFetchData();

  const [selectedPost, setSelectedPost] = useState<Post>(fetchedPosts[0]);

  const onSelectPost = useCallback(() => {
    const index = Math.floor(Math.random() * 10) + 1;

    setSelectedPost(fetchedPosts[index]);
  }, [fetchedPosts]);

  /**
   * Rule #1
   * If the only reason you want to extract your inline functions
   * in props into useCallback is to avoid re-renders of children components: don’t.
   * It doesn’t work.
   */

  // const list = useMemo(() => {
  //   return <CountriesList counter={counter} />;
  // }, [counter]);

  /**
   * Rule #2
   * If your component manages state,
   * find parts of the render tree that don’t depend on the changed state and memoise them to minimize their re-renders.
   * */

  /**
   * Rule #4: When using context, make sure that value property is always memoised if it’s not a number, string or boolean.
   * */

  // Memoization to avoid re-render of children if parent got re-rendered
  const singlePost = useMemo(() => {
    return <SelectedPost post={selectedPost} />;
  }, [selectedPost]);

  const list = useMemo(() => {
    return <PostList posts={fetchedPosts} />;
  }, [fetchedPosts]);

  return (
    <main className="bg-gray-900 antialiased text-gray-50 min-h-screen flex flex-col text-center p-5 mx-auto">
      <h1 className="text-5xl font-extrabold uppercase">Application</h1>

      <div className="w-full mx-auto flex text-2xl justify-start items-center font-extrabold text-white">
        <div>
          Counter: <span className="ml-6 text-4xl">{counter}</span>
        </div>
        <Button
          className="ml-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md"
          handleOnClick={() => setCounter((prevState) => prevState + 1)}
        >
          Add
        </Button>
      </div>

      <section className="mx-auto w-full mt-8">
        <h2 className="text-4xl mb-8">Fetched Data:</h2>

        {/* Before memoization */}
        {/*<PostList posts={fetchedPosts} />*/}

        {/* After memoization */}
        {list}
      </section>

      <Button
        className="mt-8 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md"
        handleOnClick={onSelectPost}
      >
        Select One Post
      </Button>

      {/* Before memoization */}
      {/*<PostList fetchedPosts={fetchedPosts} />*/}

      {/* After memoization */}
      {singlePost}
    </main>
  );
}
