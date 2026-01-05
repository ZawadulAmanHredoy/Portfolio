import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4">
      <h1 className="text-3xl font-bold text-gray-900">404</h1>
      <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-4 text-indigo-600 hover:text-indigo-700">
        Go home
      </Link>
    </div>
  );
}
