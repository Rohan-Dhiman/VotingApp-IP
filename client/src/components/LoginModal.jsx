import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginModal({ isOpened, setIsOpened }) {
  if (!isOpened) return null;

  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const navigate = useNavigate();

  const [isVoterLogin, setIsVoterLogin] = useState(true);
  const [voterData, setVoterData] = useState({
    name: "",
    aadharId: "",
    password: "",
  });

  const [adminData, setAdminData] = useState({
    email: "",
    region: "",
    password: "",
  });

  const handleClose = () => {
    setIsOpened(false);
    setIsAdminLogin(false); // Reset to voter login when modal is closed
  };

  const handleVoterLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/voter/login",
        voterData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);

      setVoterData({
        name: "",
        aadharId: "",
        password: "",
      });
    } catch (error) {
      console.log("Error in login:", error.response?.data || error.message);
    }
  };

  const handleAdminLogin = async () => {
    console.log("Admin Login Data:", adminData);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/admin/login",
        adminData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);

      setAdminData({
        email: "",
        region: "",
        password: "",
      });
    } catch (error) {
      console.log("Error in login:", error.response?.data || error.message);
    }
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
                    onChange={(e) =>
                      setAdminData({ ...adminData, email: e.target.value })
                    }
                    value={adminData.email}
                    placeholder="Enter admin email"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Region:
                  </label>
                  <select
                    value={adminData.region}
                    onChange={(e) =>
                      setAdminData({ ...adminData, region: e.target.value })
                    }
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                  >
                    <option value="">Select Region</option>
                    {/* You'll dynamically populate these options from your data */}
                    <option value="Patiala">Patiala</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password:
                  </label>
                  <input
                    type="password"
                    onChange={(e) =>
                      setAdminData({ ...adminData, password: e.target.value })
                    }
                    value={adminData.password}
                    placeholder="Enter admin password"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAdminLogin}
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
                    value={voterData.name}
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setVoterData({ ...voterData, name: e.target.value })
                    }
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Aadhar Number:
                  </label>
                  <input
                    type="text"
                    value={voterData.aadharId}
                    onChange={(e) =>
                      setVoterData({ ...voterData, aadharId: e.target.value })
                    }
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
                    value={voterData.password}
                    onChange={(e) =>
                      setVoterData({ ...voterData, password: e.target.value })
                    }
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
                  onClick={handleVoterLogin}
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
