// NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <a href="/" className="text-blue-600 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
