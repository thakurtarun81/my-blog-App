import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [userdata, setUserdata] = useState(localStorage.getItem("user"));
  const HandleDeleteUser = () => {
    localStorage.removeItem("user");
    setUserdata(undefined);
  };
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <nav className="max-w-8xl mx-auto px-3 py-3 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">MyBlog</h1>
        <ul className="  text-white  text-2xl font-bold flex space-x-17">
          <li className="text-white">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
              style={{ color: "white" }}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-yellow-300 transition-colors duration-300 text-white">
            <Link
              to="/about"
              style={{ color: "white" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-yellow-300 "
              style={{ color: "white" }}
            >
              Blog
            </Link>
          </li>
          {userdata && (
            <li className="cursor-pointer hover:text-yellow-300"  onClick={HandleDeleteUser}>
              Logout
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
