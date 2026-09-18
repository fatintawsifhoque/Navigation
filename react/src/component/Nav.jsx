import React from "react";
import { NavLink } from "react-router-dom";  

function Nav() {
  return (
    <>
      <div className="nav bg-amber-100 flex justify-evenly">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/Project"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Project
        </NavLink>
      </div>
    </>
  );
}

export default Nav;