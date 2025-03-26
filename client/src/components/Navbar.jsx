import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./LoginModal";

function Navbar() {
    const [isOpened, setIsOpened] = useState(false);

return (
    <div>
        <nav className="bg-black p-4 shadow-lg flex justify-between items-center">
            {/* Voting App Mark */}
            <div className="text-gray-200 text-xl font-bold">Voting App</div>
            {/* Navigation Links */}
            <ul className="flex space-x-6 text-gray-200">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-gray-400 hover:text-gray-400 transition duration-300"
                                : "hover:text-gray-400 transition duration-300"
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/AvailablePolls"
                        className={({ isActive }) =>
                            isActive
                                ? "text-gray-400 hover:text-gray-400 transition duration-300"
                                : "hover:text-gray-400 transition duration-300"
                        }
                    >
                        Available Polls
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pastpolls"
                        className={({ isActive }) =>
                            isActive
                                ? "text-gray-400 hover:text-gray-400 transition duration-300"
                                : "hover:text-gray-400 transition duration-300"
                        }
                    >
                        Past Polls
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive
                                ? "text-gray-400 hover:text-gray-400 transition duration-300"
                                : "hover:text-gray-400 transition duration-300"
                        }
                    >
                        Profile
                    </NavLink>
                </li>
            </ul>

            <div>
                <button
                    onClick={() => setIsOpened((prev) => !prev)}
                    className="bg-gray-700 text-gray-200 px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                >
                    Login
                </button>
            </div>

            <LoginModal isOpened={isOpened} setIsOpened={setIsOpened}/>

        </nav>
    </div>
);
}

export default Navbar;
