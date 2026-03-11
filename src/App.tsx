import { Link, Route, Routes } from "react-router-dom";
import ReducerPage from "./reducer/ReducerPage";
import CallbackPage from "./callback/CallbackPage";
import CallbackPageAdvanced from "./callback/CallbackPageAdvanced";
import HighOrderComponentPage from "./patterns/HighOrderComponentPage";

function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Advanced React
        </h1>

        <div className="flex flex-col gap-4 mt-6 text-center">
          <Link
            to="/reducer"
            className="text-blue-600 hover:underline font-medium"
          >
            Go to Reducer Example
          </Link>
          <Link
            to="/callback"
            className="text-blue-600 hover:underline font-medium"
          >
            Go to Callback Example
          </Link>
          <Link
            to="/callback-advanced"
            className="text-blue-600 hover:underline font-medium"
          >
            Go to Advanced Callback Demo
          </Link>
          <Link
            to="/high-order-components"
            className="text-blue-600 hover:underline font-medium"
          >
            Go to High-Order Components Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reducer" element={<ReducerPage />} />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="/callback-advanced" element={<CallbackPageAdvanced />} />
      <Route
        path="/high-order-components"
        element={<HighOrderComponentPage />}
      />
    </Routes>
  );
}
