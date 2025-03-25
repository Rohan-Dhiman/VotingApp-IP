import React from 'react'

function Login() {
const [isModalOpen, setIsModalOpen] = React.useState(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

return (
    <div className="flex justify-center items-center h-screen">
        <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            Login
        </button>
        {isModalOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                onClick={closeModal}
            >
                <div
                    className="bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-300"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={closeModal}
                        className="float-right text-gray-500 hover:text-gray-700 text-lg"
                    >
                        &times;
                    </button>
                    <h2 className="text-xl font-bold mb-4">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Name:</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Aadhar Number:</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Password:</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </form>
                    <a
                        href="#"
                        className="block text-center text-blue-500 mt-4 hover:underline"
                    >
                        Create Account / Signup
                    </a>
                </div>
            </div>
        )}
    </div>
);
}

export default Login