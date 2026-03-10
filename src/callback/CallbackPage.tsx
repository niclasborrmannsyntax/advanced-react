import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

// card component receives callback and reports success or failure
interface CallbackCardProps {
  onSuccess: () => void;
}

function CallbackCard({ onSuccess }: CallbackCardProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    setError(null);
    setLoading(true);
    // simulate an asynchronous operation with a random result
    setTimeout(() => {
      const success = Math.random() < 0.5;
      setLoading(false);
      if (success) {
        onSuccess();
      } else {
        setError("Something went wrong");
      }
    }, 1000);
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-4xl shadow text-center flex flex-col items-center">
      <div className="mb-4">
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl text-blue-600">
          👤
        </div>
        <h2 className="mt-2 text-xl text-black font-semibold">Welcome back!</h2>
        <p className="text-gray-500">We're glad to see you again.</p>
      </div>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-full disabled:opacity-50 flex items-center justify-center"
        onClick={handleClick}
        disabled={loading}
      >
        {loading && (
          <span className="w-5 h-5 mr-2 border-2 border-t-transparent rounded-full animate-spin"></span>
        )}
        {loading ? "Processing..." : "Retry Login"}
      </button>

      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}

export default function CallbackPage() {
  const navigate = useNavigate();
  const handleSuccess = useCallback(() => navigate("/"), []);

  return (
    <div className="min-h-screen w-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Callback Example</h1>
      <CallbackCard onSuccess={handleSuccess} />
    </div>
  );
}
