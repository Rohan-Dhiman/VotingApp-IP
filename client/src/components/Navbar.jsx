import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import LoginModal from "./LoginModal";

function Navbar() {
    const [isOpened, setIsOpened] = useState(false);

    const [user, setUser] = useState({
        role: "admin", 
        isAuthenticated: true,
    });

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Redirect admin to /running-elections by default if on root
        if (user.role === "admin" && location.pathname === "/") {
            navigate("/");
        }
    }, [user, location, navigate]);

    const handleLogout = () => {
        setUser({ isAuthenticated: false, role: null });
        navigate("/");
    };

    // const handleLogin(email, )=>{


    return (
        <div>
            <nav className="bg-black p-4 shadow-lg flex justify-between items-center">
                <div className="text-gray-200 text-xl font-bold">Voting App</div>

                <ul className="flex space-x-6 text-gray-200">
                    {user.isAuthenticated && user.role === "voter" && (
                        <>
                            <li>
                                <NavLink to="/" className={navClass}>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/AvailablePolls" className={navClass}>Available Polls</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pastpolls" className={navClass}>Past Polls</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile" className={navClass}>Profile</NavLink>
                            </li>
                        </>
                    )}

                    {user.isAuthenticated && user.role === "admin" && (
                        <>
                            <li>
                                <NavLink to="/" className={navClass}>Running Elections</NavLink>
                            </li>
                            <li>
                                <NavLink to="/create/poll" className={navClass}>Create Election</NavLink>
                            </li>
                            <li>
                                <NavLink to="/create/candidate" className={navClass}>Candidates</NavLink>
                            </li>
                        </>
                    )}
                </ul>

                <div>
                    {user.isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="bg-gray-700 text-gray-200 px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsOpened(true)}
                            className="bg-gray-700 text-gray-200 px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                        >
                            Login
                        </button>
                    )}
                </div>

                <LoginModal isOpened={isOpened} setIsOpened={setIsOpened} />
            </nav>
        </div>
    );
}

// Utility className function for NavLink
const navClass = ({ isActive }) =>
    isActive
        ? "text-gray-400 hover:text-gray-400 transition duration-300"
        : "hover:text-gray-400 transition duration-300";

export default Navbar;
