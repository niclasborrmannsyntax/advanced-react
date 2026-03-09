import { Link, Route, Routes } from "react-router-dom";
import Reducer from "./reducer/ReducerPage";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Advanced React
        </h1>

        <div className="mt-6 text-center">
          <Link
            to="/reducer"
            className="text-blue-600 hover:underline font-medium"
          >
            Go to Reducer Example
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
      <Route path="/reducer" element={<Reducer />} />
    </Routes>
  );
}
