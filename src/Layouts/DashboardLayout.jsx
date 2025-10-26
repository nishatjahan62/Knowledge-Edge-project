import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

import Swal from "sweetalert2";

// Assets
import UserIcon from "../../public/userIcon.png";
import LightLogo from "../../public/Logo&Name.png";
import DarkLogo from "../../public/Logo&NameDark.png";
import OnlyLogo from "../../public/mainLogo.png";

// React Icons
import { FaHome, FaUser, FaUsers, FaChartPie, FaMoon, FaSun, FaBars } from "react-icons/fa";
import AuthHook from "../Hooks/AuthHook";

// Nav Section Title Component
const NavSectionTitle = ({ children }) => (
  <li className="menu-title mt-4 mb-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
    {children}
  </li>
);

const DashboardLayout = () => {
  const { user, logOut } = AuthHook();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    html.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => Swal.fire("Logged Out!", "You have successfully logged out.", "info"))
      .catch(console.error);
  };

  const NavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 text-sm font-medium rounded-lg transition-all duration-200 p-3 mx-2 ${
      isActive
        ? "bg-primary text-white shadow-md transform scale-[1.02]"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary"
    }`;

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-800 px-4 py-3 flex justify-between items-center shadow-lg border-b border-gray-200 dark:border-gray-700 rounded-2xl">
          <div className="flex items-center gap-4">
            <label htmlFor="dashboard-drawer" className="lg:hidden text-gray-700 dark:text-gray-300 cursor-pointer">
              <FaBars className="w-6 h-6" />
            </label>
            <Link to="/dashboard" className="flex items-center gap-2">
              <img src={OnlyLogo} alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-white hidden sm:block">
                KnowledgeEdge
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <label className="swap swap-rotate text-2xl text-gray-600 dark:text-gray-300">
              <input
                type="checkbox"
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />
              <FaMoon className="swap-on fill-current text-indigo-400" />
              <FaSun className="swap-off fill-current text-yellow-500" />
            </label>

            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-primary">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || UserIcon} alt={user.displayName} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-white dark:bg-gray-700 rounded-2xl w-52 border border-gray-100 dark:border-gray-600"
                >
                  <li className="menu-title text-sm font-bold text-gray-800 dark:text-gray-100 p-2">
                    {user.displayName?.split(" ")[0] || "User"}
                  </li>
                  <div className="divider my-0"></div>
                  <li>
                    <Link to="/dashboard/profile" className="justify-between text-gray-700 dark:text-gray-200">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a
                      onClick={handleLogOut}
                      className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/auth/Login">
                <Button label="Sign In" />
              </Link>
            )}
          </div>
        </nav>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-6">
          <Outlet />
        </main>

        <footer className="bg-white/90 dark:bg-gray-800 text-center p-3 text-gray-600 dark:text-gray-400 border-t rounded-2xl border-gray-200 dark:border-gray-700">
          &copy; {new Date().getFullYear()} KnowledgeEdge. All rights reserved.
        </footer>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="menu w-64 min-h-full bg-white dark:bg-gray-800 p-0 shadow-2xl border-r border-gray-100 dark:border-gray-700">
          <Link
            to={"/"}
            className="flex items-center justify-center py-6 border-b border-gray-100 dark:border-gray-700"
          >
            <img src={theme === "light" ? LightLogo : DarkLogo} alt="Logo" className="w-32 h-auto" />
          </Link>

          {user && (
            <div className="flex flex-col items-center p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="w-20 h-20 rounded-full border-4 border-primary shadow-xl overflow-hidden">
                <img className="w-full h-full object-cover" src={user?.photoURL || UserIcon} alt={user?.displayName || "User"} />
              </div>
              <h2 className="font-bold text-xl mt-3 text-gray-900 dark:text-gray-100">{user.displayName || "Welcome"}</h2>
              <span className="text-sm font-semibold text-primary dark:text-primary-focus capitalize mt-1 px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full">
                User
              </span>
            </div>
          )}

          <ul className="py-4 space-y-1">
            <NavSectionTitle>Navigation</NavSectionTitle>
            <li>
              <NavLink to="/" className={NavLinkClass}>
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/overview" className={NavLinkClass}>
                <FaChartPie /> Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/profile" className={NavLinkClass}>
                <FaUser /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manage-users" className={NavLinkClass}>
                <FaUsers /> Manage Users
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
