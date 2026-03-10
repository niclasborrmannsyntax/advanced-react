import React from "react";
import { useState, useMemo } from "react";
import SortedList from "./SortedList";

export default function CallbackPageAdvanced() {
  const [parentCount, setParentCount] = useState(0);
  console.log("Parent rendered with count:", parentCount);

  // simple list shuffle example
  const baseList = ["apple", "banana", "cherry", "date"];
  const [shuffleKey, setShuffleKey] = useState(0);
  const shuffled = useMemo(() => {
    const copy = [...baseList];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [shuffleKey]);

  const ListDisplay = React.memo(({ items }: { items: string[] }) => {
    return (
      <ul className="text-center">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    );
  });

  return (
    <div className="min-h-screen w-screen p-8 flex flex-col items-center justify-start">
      <h1 className="text-3xl text-center font-bold">Callback + memo demo</h1>
      <div className="flex flex-col items-center justify-center text-black gap-4 mt-12 w-full max-w-md p-4 bg-white rounded-4xl shadow">
        <h2 className="text-xl font-semibold mb-2">List shuffle demo</h2>
        <p className="text-sm mb-2">
          Press shuffle to reorder; parent re-render doesn't change list.
        </p>
        <button
          className="mx-auto px-3 py-1 bg-green-500 text-white rounded-full"
          onClick={() => setShuffleKey((k) => k + 1)}
        >
          Shuffle list
        </button>
        <button
          className="mx-auto px-3 py-1 bg-gray-500 text-white rounded-full"
          onClick={() => setParentCount((c) => c + 1)}
        >
          Rerender parent ({parentCount})
        </button>
        <ListDisplay items={shuffled} />
      </div>
      <SortedList />
    </div>
  );
}
