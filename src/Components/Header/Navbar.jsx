import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import AuthHook from "../../Hooks/AuthHook";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Button from "../../Pages/Button/Button";
import UseUserRole from "../../Hooks/UseUserRole";
import { FaBookmark } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = AuthHook();
  const{role }=UseUserRole()
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-1 font-bold text-blue-700 dark:text-yellow-300"
              : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-400 hover:border-b-2 border-blue-400 dark:border-yellow-400 px-2 py-0.5 transition-colors duration-200"
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
              ? "border-b-2 pb-1 font-bold text-blue-700 dark:text-yellow-300"
              : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-400 hover:border-b-2 border-blue-400 dark:border-yellow-400 px-2 py-0.5 transition-colors duration-200"
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
              ? "border-b-2 pb-1 font-bold text-blue-700 dark:text-yellow-300"
              : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-400 hover:border-b-2 border-blue-400 dark:border-yellow-400 px-2 py-0.5 transition-colors duration-200"
          }
        >
          About Us
        </NavLink>
      </li>

      {/* Admin/User extra links */}
{user && (role === "admin" || role === "user") && (
  <>
    <li>
      <NavLink
        to="/all-authors"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 pb-1 font-bold text-blue-700 dark:text-yellow-300"
            : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-400 hover:border-b-2 border-blue-400 dark:border-yellow-400 px-2 py-0.5 transition-colors duration-200"
        }
      >
        All Authors
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 pb-1 font-bold text-blue-700 dark:text-yellow-300"
            : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-400 hover:border-b-2 border-blue-400 dark:border-yellow-400 px-2 py-0.5 transition-colors duration-200"
        }
      >
        Dashboard
      </NavLink>
    </li>
  </>
)}


     {/* Author dropdown */}
{user && role === "author" && (
  <li className="dropdown">
    <span className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-400 transition-colors duration-200">
      Articles ▼
    </span>
    <ul className="dropdown-content bg-base-100 dark:bg-gray-800 rounded-box p-2 shadow mt-2">
      <li>
        <NavLink
          to="/post-articles"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-yellow-300 font-bold"
              : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-400 px-2 py-0.5 rounded transition-colors duration-200"
          }
        >
          Post Article
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-posted-articles"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-yellow-300 font-bold"
              : "text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-400 px-2 py-0.5 rounded transition-colors duration-200"
          }
        >
          My Articles
        </NavLink>
      </li>
    </ul>
  </li>
)}

    </ul>
  </>
);


  return (
    <div className=" fixed z-50 top-0 left-0 w-full  flex justify-center mx-auto">
      <div className="navbar mt-5 px-2 lg:px-5 sm:px-3 mx-12 lg:mx-20  w-[90%]   bg-[#FDFBD4] rounded-full shadow-xl border border-blue-600 dark:bg-[#252728]">
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
          <Link to={"/about-us"}>
            <div>
              <img
                className="hidden sm:block lg:block dark:hidden w-50 lg:p-2"
                src={"/Logo&Name.png"}
                alt=""
              />
              <img
                className=" hidden sm:dark:block lg:dark:block w-50 p-2"
                src={"/Logo&NameDark.png"}
                alt=""
              />
              <img
                className="block sm:hidden lg:hidden  w-10"
                src={"/mainLogo.png"}
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
            {/* Bookmark Icon */}
  {user && (
    <Link to="/bookmarks" title="My Bookmarks">
      <FaBookmark className="text-yellow-500 hover:text-yellow-400 transition-colors mr-2 cursor-pointer" size={22} />
    </Link>
  )}
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
                  <li className="font-medium">
                    <Link to={"/post-articles"}>Post Articles</Link>
                  </li>

                  <li className="font-medium">
                    <Link to={"/my-posted-articles"}>My Articles</Link>
                  </li>
                  <li
                    onClick={handleLogOut}
                    className="text-blue-800 font-bold "
                  >
                    <a className="pr-1 font-bold ">
                      Logout{" "}
                      <span>
                        <i class="fa-solid fa-right-from-bracket"></i>
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="auth/Login">
              <button
                href="#_"
                className="inline-flex items-center justify-center px-3  lg:px-5  lg:text-base lg:font-bold "
              >
                <Button label="Login"></Button>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
