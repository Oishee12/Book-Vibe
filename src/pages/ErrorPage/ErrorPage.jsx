import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black px-6">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-white">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-lg">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-800 transition duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Element */}
        <div className="mt-12">
          <span className="text-6xl">🚀</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;