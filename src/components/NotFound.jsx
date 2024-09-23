// src/components/NotFound.js
import React from 'react';
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <p className="text-2xl font-semibold mb-4">Oops! Page not found.</p>
      <p className="text-base text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link to={ROUTES.Home} className="bg-orange-500 text-white px-4 py-2 rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
}
