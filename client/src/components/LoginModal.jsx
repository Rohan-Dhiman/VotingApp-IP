import React from 'react'

function LoginModal( { isOpened, setIsOpened } ) {
if (!isOpened) return null;

const handleClose = () => {
    setIsOpened(false);
};

return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-10 backdrop-blur-md">
        <div className="bg-white p-8 rounded-lg w-96 relative shadow-2xl border border-gray-300">
            <button
                onClick={handleClose}
                className="absolute top-4 right-6 text-gray-600 hover:text-gray-800 text-3xl focus:outline-none"
                aria-label="Close"
            >
                &times;
            </button>
            <br />
            <form>
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Name:</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Aadhar Number:</label>
                    <input
                        type="text"
                        placeholder="Enter your Aadhar number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>
                <div className="mb-6 text-center">
                    <a href="#register" className="text-gray-600 hover:text-gray-800 underline">
                        Not registered? Click here
                    </a>
                </div>
                <button
                    type="button"
                    className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
);
}

export default LoginModal