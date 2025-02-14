import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-semibold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2">
        Oops! The page you're looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-4 text-blue-500 text-lg font-medium hover:underline"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
