import { useMemo, useState } from "react";

export default function SortedList() {
  const [items, setItems] = useState(["apple", "banana", "cherry", "date"]);
  const [numbers, setNumbers] = useState([9, 3, 5]);
  const [headerColor, setHeaderColor] = useState("blue");
  const [wasRendered, setWasRendered] = useState(false);

  const showRenderMessage = useMemo(() => {
    setWasRendered(true);
    setTimeout(() => setWasRendered(false), 1000);
    return true;
  }, [items, numbers]);

  const sortedItems = useMemo(() => {
    showRenderMessage;
    return [...items].sort();
  }, [items]);

  const sortedNumbers = useMemo(() => {
    showRenderMessage;
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <div className="min-h-screen w-screen p-8 flex flex-col items-center justify-start">
      <h1
        className={`text-3xl text-center font-bold mb-4`}
        style={{ color: headerColor }}
      >
        Sorted List
      </h1>
      {/* {sortedItems.map((item, index) => (
        <span
          key={index}
          className="inline-block bg-gray-200 text-gray-800 py-1 px-3 rounded-full mb-2"
        >
          {item}
        </span>
      ))} */}
      {sortedNumbers.map((number, index) => (
        <span
          key={index}
          className="inline-block bg-gray-200 text-gray-800 py-1 px-3 rounded-full mb-2"
        >
          {number}
        </span>
      ))}
      {/* <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full"
        onClick={() => setItems((prevItems) => [...prevItems, item]);}
      >
        Add Item
      </button> */}
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full"
        onClick={() => setNumbers((prev) => [...prev, 7])}
      >
        Add 7
      </button>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full"
        onClick={() => setHeaderColor(headerColor === "blue" ? "red" : "blue")}
      >
        Change Header Color
      </button>
      {wasRendered && (
        <p className="mt-2 text-sm text-green-600">List was sorted</p>
      )}
    </div>
  );
}
