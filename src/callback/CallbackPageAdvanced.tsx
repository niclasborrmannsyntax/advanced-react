import React from "react";
import { useState, useRef, useMemo } from "react";

// a small component to display how many times it rendered
const RenderCounter = ({ label }: { label: string }) => {
  const renders = useRef(0);
  renders.current += 1;
  return (
    <p className="text-sm text-gray-700">
      {label} renders: {renders.current}
    </p>
  );
};

// const MemoizedCallbackCard = useMemo(() => CallbackCard, []);

export default function CallbackPageAdvanced() {
  const [parentCount, setParentCount] = useState(0);

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

  // render counter for list component
  const listRenders = useRef(0);
  const ListDisplay = React.memo(({ items }: { items: string[] }) => {
    listRenders.current += 1;
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
        <p className="mt-2 text-sm">
          List component renders: {listRenders.current}
        </p>
        <ListDisplay items={shuffled} />
      </div>{" "}
    </div>
  );
}
