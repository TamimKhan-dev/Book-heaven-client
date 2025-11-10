import React from "react";
import logoImg from "../assets/book-logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 rounded-md duration-100 text-lime-400"
            : ""
        }
      >
        <span className="p-2 font-semibold">Home</span>
      </NavLink>
      <NavLink
        to="/all-books"
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 rounded-md duration-100 text-lime-400"
            : ""
        }
      >
        <span className="p-2 font-semibold">All Books</span>
      </NavLink>
      <NavLink
        to="/add-book"
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 rounded-md duration-100 text-lime-400"
            : ""
        }
      >
        <span className="p-2 font-semibold">Add Book</span>
      </NavLink>
      <NavLink
        to="/myBooks"
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 rounded-md duration-100 font-bold text-lime-400"
            : ""
        }
      >
        <span className="p-2 font-semibold">My Books</span>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm xl:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-1 items-center text-lg lg:text-xl font-semibold lg:font-bold">
          <span>Book</span>
          <img src={logoImg} alt="" className="w-10 h-10" />
          <span>Heaven</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 min-h-14 flex items-center gap-5">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end flex gap-2 sm:gap-3">
        <div>
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt="" className="w-12 h-12 rounded-full"/>
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Link className="px-3 py-2 md:px-5 md:py-2 text-sm md:text-base text-white font-semibold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
            Log In
          </Link>
          <span className="text-lg font-bold">Or</span>
          <Link className="px-3 py-2 md:px-5 md:py-2 text-sm md:text-base text-white font-semibold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
