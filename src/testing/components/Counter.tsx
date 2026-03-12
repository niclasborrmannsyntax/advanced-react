import { useState } from "react";

export default function Counter({
  initialValue = 0,
}: {
  initialValue?: number;
}) {
  const [count, setCount] = useState(initialValue);
  return (
    <div className="p-4 bg-gray-700 rounded-2xl shadow flex flex-col items-center">
      <p className="text-2xl font-bold" data-testid="count">
        {count}
      </p>
      <div className="flex gap-2 mt-2">
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment
        </button>
        <button
          className="px-3 py-1 bg-yellow-500 text-white rounded"
          onClick={() => setCount((c) => c - 1)}
        >
          Decrement
        </button>
        <button
          className="px-3 py-1 bg-red-600 text-white rounded"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
