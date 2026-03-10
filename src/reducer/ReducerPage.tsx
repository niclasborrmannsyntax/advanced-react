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
      <p className="text-3xl font-bold">UseState Count: {count}</p>
      <div className="space-x-2 mt-4">
        <button className={buttonStyle} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className={buttonStyle} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className={buttonStyle} onClick={() => setCount(10)}>
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

const CounterEvents = {
  Increment: "increment",
  Decrement: "decrement",
  Reset: "reset",
  Custom: "custom",
} as const;

type CounterEvents = (typeof CounterEvents)[keyof typeof CounterEvents];

// enum CounterEvents {
//   Increment,
//   Decrement,
//   Reset,
//   Custom,
// }

type counterEvents = "increment" | "decrement" | "reset" | "custom";

function counterReducer(state: any, action: any): any {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "custom":
      return { count: action.count };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

function counterReducerEnum(
  state: any,
  action: { type: CounterEvents; payload?: number },
): any {
  switch (action.type) {
    case CounterEvents.Increment:
      return { count: state.count + 1 };
    case CounterEvents.Decrement:
      return { count: state.count - 1 };
    case CounterEvents.Custom:
      return { count: action.payload };
    case CounterEvents.Reset:
      return { count: 0 };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

function UseReducerCounter() {
  //   const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const [state, dispatch] = useReducer(counterReducerEnum, { count: 0 });

  return (
    <div className={carddStyle}>
      <p className="text-3xl font-bold">UseReducer Count: {state.count}</p>
      <div className="space-x-2 mt-4">
        <button
          className={buttonStyle}
          // onClick={() => dispatch({ type: "increment" })}
          onClick={() => dispatch({ type: CounterEvents.Increment })}
        >
          Increment
        </button>
        <button
          className={buttonStyle}
          // onClick={() => dispatch({ type: "decrement" })}
          onClick={() => dispatch({ type: CounterEvents.Decrement })}
        >
          Decrement
        </button>
        <button
          className={buttonStyle}
          // onClick={() => dispatch({ type: "reset" })}
          onClick={() => dispatch({ type: CounterEvents.Reset })}
        >
          Reset
        </button>
        <button
          className={buttonStyle}
          // onClick={() => dispatch({ type: "custom", count: 32 })}
          onClick={() => dispatch({ type: CounterEvents.Custom, payload: 32 })}
        >
          Set to 32
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

function immerReducer(draft: any, action: { type: string; payload: any }) {
  switch (action.type) {
    case "updateName":
      draft.user.name = action.payload;
      break;
    case "updateAge":
      draft.user.age = action.payload;
      break;
    case "updateCity":
      draft.user.address.city = action.payload;
      break;
    case "updateCountry":
      draft.user.address.country = action.payload;
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
