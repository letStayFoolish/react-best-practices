import { useFetchData } from "./hooks/useFetchData.ts";
import Button from "./components/Button.tsx";
import PostList from "./components/PostList.tsx";
import { useState } from "react";

export default function App() {
  console.log("Rendering App!");

  const [counter, setCounter] = useState<number>(0);

  const { fetchedPosts } = useFetchData();

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
        <PostList fetchedPosts={fetchedPosts} />
      </section>

      <Button
        className="mt-8 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md"
        handleOnClick={() => {}}
      >
        Click me!
      </Button>
    </main>
  );
}
