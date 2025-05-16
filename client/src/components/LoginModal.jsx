import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginModal({ isOpened, setIsOpened }) {
  if (!isOpened) return null;

  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpened(false);
    setIsAdminLogin(false); // Reset to voter login when modal is closed
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-md">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative border border-gray-200">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAdminLogin(false)}
            className={`px-6 py-2 rounded-t-md text-sm font-semibold focus:outline-none ${
              !isAdminLogin
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Voter Login
          </button>
          <button
            onClick={() => setIsAdminLogin(true)}
            className={`px-6 py-2 rounded-t-md text-sm font-semibold focus:outline-none ${
              isAdminLogin
                ? "bg-gray-800 text-white" // Changed to bg-gray-800
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Admin Login
          </button>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            {isAdminLogin ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Enter admin email"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Region:
                  </label>
                  <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm">
                    <option value="">Select Region</option>
                    {/* You'll dynamically populate these options from your data */}
                    <option value="region1">Region 1</option>
                    <option value="region2">Region 2</option>
                    <option value="region3">Region 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password:
                  </label>
                  <input
                    type="password"
                    placeholder="Enter admin password"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 font-semibold text-sm" // Changed to bg-gray-800
                >
                  Admin Login
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Aadhar Number:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Aadhar number"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password:
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                  />
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      handleClose(); // close modal before navigating
                      navigate("/signup");
                    }}
                    className="text-gray-600 hover:text-gray-800 underline text-sm"
                  >
                    Not registered? Click here
                  </button>
                </div>
                <button
                  type="button"
                  className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 font-semibold text-sm"
                >
                  Voter Login
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
