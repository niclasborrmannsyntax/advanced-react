const buttonStyle =
  "px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors min-w-[125px]";

const carddStyle =
  "max-w-4xl mx-auto p-6 bg-gray-700 rounded-xl shadow-md text-center mb-4";

const inputStyle =
  "w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500";

/// ------------------------------------------------------ ///
/// ------------------ UseState Example ------------------ ///
/// ------------------------------------------------------ ///
import { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className={carddStyle}>
      <p className="text-3xl font-bold">Count: {count}</p>
      <div className="space-x-2 mt-4">
        <button className={buttonStyle} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className={buttonStyle} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className={buttonStyle} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
/// ------------------------------------------------------ ///
/// ------------------- Reducer Example ------------------ ///
/// ------------------------------------------------------ ///

import { useReducer } from "react";

function counterReducer(state: any, action: any): any {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

function UseReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className={carddStyle}>
      <p className="text-3xl font-bold">Count: {state.count}</p>
      <div className="space-x-2 mt-4">
        <button
          className={buttonStyle}
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className={buttonStyle}
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className={buttonStyle}
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

/// ------------------------------------------------------ ///
/// ---------------- Immer Reducer Example --------------- ///
/// ------------------------------------------------------ ///

import { useImmerReducer } from "use-immer";

const initialState = {
  user: {
    name: "Max Mustermann",
    age: 28,
    address: {
      city: "Berlin",
      country: "Germany",
    },
  },
};

function immerReducer(state: any, action: { type: string; payload: any }): any {
  switch (action.type) {
    case "updateName":
      state.user.name = action.payload;
      break;
    case "updateAge":
      state.user.age = action.payload;
      break;
    case "updateCity":
      state.user.address.city = action.payload;
      break;
    case "updateCountry":
      state.user.address.country = action.payload;
      break;
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

function ImmerReducerProfile() {
  const [state, dispatch] = useImmerReducer(immerReducer, initialState);

  return (
    <form className={carddStyle}>
      <h2 className="text-3xl font-bold">User Information</h2>
      <div className="mt-4 space-y-4">
        <input
          value={state.user.name}
          className={inputStyle}
          onChange={(e) =>
            dispatch({ type: "updateName", payload: e.target.value })
          }
        />
        <input
          value={state.user.age}
          className={inputStyle}
          onChange={(e) =>
            dispatch({ type: "updateAge", payload: parseInt(e.target.value) })
          }
        />
      </div>
    </form>
  );
}

/// ------------------------------------------------------ ///
/// -------------------- Reducer Page -------------------- ///
/// ------------------------------------------------------ ///

export default function ReducerPage() {
  return (
    <div className="h-screen- w-screen p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Reducer Example</h1>
      <UseStateCounter />
      <UseReducerCounter />
      <ImmerReducerProfile />
    </div>
  );
}
