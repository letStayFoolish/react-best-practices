import { useFetchData } from "./hooks/useFetchData.ts";
import Button from "./components/Button.tsx";
import PostList from "./components/PostList.tsx";
import { useState } from "react";

export default function App() {
  console.log("Rendering App!");

  const [counter, setCounter] = useState<number>(0);

  const { fetchedPosts } = useFetchData();

  return (
    <main className="bg-stone-900 antialiased text-stone-50 min-h-screen flex flex-col text-center px-2 py-5  mx-auto">
      <h1 className="text-5xl font-extrabold uppercase">Application</h1>

      <div className=" w-full mx-auto flex text-2xl justify-start items-center font-extrabold text-white">
        <div>
          Counter: <span className="ml-6 text-4xl">{counter}</span>
        </div>
        <Button handleOnClick={() => setCounter((prevState) => prevState + 1)}>
          Add
        </Button>
      </div>

      <section>
        <h2>Fetched Data:</h2>
        <PostList fetchedPosts={fetchedPosts} />
      </section>

      <Button handleOnClick={() => {}}>Click me!</Button>
    </main>
  );
}
