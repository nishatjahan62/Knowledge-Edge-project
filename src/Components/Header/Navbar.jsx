import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const NavLinks = (
    <ul className="flex lg:flex-row flex-col items-center justify-center gap-2 lg:gap-4 text-lg ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " border-b-3 pb-1 font-bold text-blue-700"
            : "hover:border  hover:border-none hover:rounded-2xl  hover:bg-blue-100 px-2 py-0.5"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-articles"
        className={({ isActive }) =>
          isActive
            ? " border-b-3 pb-1 text-blue-700 font-bold "
            : " hover:border  hover:border-none hover:rounded-2xl  hover:bg-blue-100 px-2 py-0.5"
        }
      >
        All Articles
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          isActive
            ? " border-b-3 pb-1 text-blue-700 font-bold"
            : "hover:border  hover:border-none hover:rounded-2xl  hover:bg-blue-100 px-2 py-0.5"
        }
      >
        {" "}
        About us
      </NavLink>
    </ul>
  );

  return (
    <div className="flex justify-center">
      <div className="fixed top-5 w-10/12 mx-auto z-50 ">
        <div className="flex justify-between gap-20  w-full px-5 py-2  bg-white rounded-full shadow-xl border border-blue-600">
          <div className="navbar-start">
            <div className="dropdown block p-0">
              <div
                tabIndex={0}
                role="button"
                className="btn p-0 btn-ghost lg:hidden"
              >
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
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {NavLinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-vertical px-1">{NavLinks}</ul>
          </div>
          <div className="navbar-end">
            <Link to="/auth/login">
            <button
              href="#_"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center  border border-blue-500 rounded-full shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-blue-500 via-blue-500 to-blue-500 text-white"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              <span class="relative font-bold font-[poppins]">Login </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
