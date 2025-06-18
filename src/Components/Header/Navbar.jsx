import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import AuthHook from "../../Hooks/AuthHook";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = AuthHook();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "You have successfully logged Out. ",
          icon: "info",
          draggable: true,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "custom-button",
          },
        });
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const NavLinks = (
    <>
      <ul className="flex lg:flex-row flex-col items-center justify-center gap-2 lg:gap-4 text-lg ">
        <li>
          {" "}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " border-b-3 pb-1 font-bold text-blue-700"
                : "hover:border  hover:border-none hover:rounded-2xl  hover:bg-blue-100 dark:hover:bg-gray-700 px-2 py-0.5 "
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all-articles"
            className={({ isActive }) =>
              isActive
                ? " border-b-3 pb-1 text-blue-700 font-bold "
                : " hover:border  hover:border-none hover:rounded-2xl  hover:bg-blue-100 dark:hover:bg-gray-700 px-2 py-0.5 "
            }
          >
            All Articles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? " border-b-3 pb-1 text-blue-700 font-bold"
                : "hover:border  hover:border-none hover:rounded-2xl  hover:bg-blue-100 dark:hover:bg-gray-700 px-2 py-0.5"
            }
          >
            {" "}
            About us
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div className="flex justify-center ">
      <div className="navbar mt-5 mx-12 lg:mx-20  w-full   bg-[#FDFBD4] rounded-full shadow-xl border border-blue-600 dark:bg-[#252728]">
        <div className="navbar-start ">
          <div className="dropdown cursor-pointer">
            <div tabIndex={0} role="button" className="px-2 lg:hidden">
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
          <a className=" text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="pr-2">
            <label className="toggle text-blue-700 ">
              <input
                type="checkbox"
                value="synthwave"
                onClick={handleTheme}
                className=""
              />
              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>
          {user ? (
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center">
                <h3 className="pr-2 font-semibold text-base ">Hello</h3>
                <p className="font-semibold text-green-800 text-lg ">
                  {(user && user.displayName?.split(" ")[0]) || ""}
                </p>
              </div>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="user's photo"
                      src={`${user ? user.photoURL : "/userIcon"}`}
                      title={user && user.displayName}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/userIcon.png";
                      }}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-1 mt-3 w-36 p-3 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li  onClick={handleLogOut} className="text-blue-800 font-bold ">
                    <a className="pr-1 font-bold ">Logout </a><i class="fa-solid fa-right-from-bracket"></i>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="auth/Login">
              <button
                href="#_"
                className="inline-flex items-center justify-center px-3 py-2 lg:px-5 lg:py-3 lg:text-base lg:font-bold text-center  border border-blue-500 rounded-full shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-blue-500 via-blue-500 to-blue-500 text-white"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <span className="relative font-bold font-[poppins]">
                  Login{" "}
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
