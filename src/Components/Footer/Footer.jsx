import React from "react";
import { Link } from "react-router";
import AuthHook from "../../Hooks/AuthHook";

const Footer = () => {
  const { user } = AuthHook();

  return (
    <footer className="bg-[#FDFBD4] dark:bg-[#1b1b1b] dark:to-[#2c2c2c] mt-10 md:mt-15 lg:mt-20 p-6 md:px-10 lg:px-20 rounded-t-3xl shadow-2xl transition-colors duration-500 border-t border-[#e2e0b8] dark:border-gray-700">
      <div className="flex flex-col lg:flex-row lg:items-start justify-around gap-10 py-5">
        
        {/* Logo & Links */}
        <div>
          <Link to="/about-us">
            <div>
              <img
                className="block dark:hidden w-48"
                src="/Logo&Name.png"
                alt="KnowledgeEdge Logo"
              />
              <img
                className="hidden dark:block w-48"
                src="/Logo&NameDark.png"
                alt="KnowledgeEdge Dark Logo"
              />
            </div>
          </Link>
          <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300 font-semibold transition-colors duration-300">
            <li>
              <Link to="/about-us" className="hover:text-blue-600 dark:hover:text-blue-400">
                About us
              </Link>
            </li>
            <li>
              <Link to="/all-articles" className="hover:text-blue-600 dark:hover:text-blue-400">
                All Articles
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/my-posted-articles"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  My Posted Articles
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Terms Section */}
        <div>
          <h6 className="font-semibold text-xl font-[quicksand] text-gray-900 dark:text-gray-200">
            Terms
          </h6>
          <div className="border-b-2 border-green-500 w-20 my-2"></div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-400 font-semibold transition-colors duration-300">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Terms of service
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Privacy policy
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Cookie policy
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Refund policy
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h6 className="font-semibold text-xl font-[quicksand] text-gray-900 dark:text-gray-200">
            Help
          </h6>
          <div className="border-b-2 border-green-500 w-16 my-2"></div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-400 font-semibold transition-colors duration-300">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Support Section
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              FAQ
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Report
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h6 className="font-semibold text-xl font-[quicksand] text-gray-900 dark:text-gray-200">
            Follow Us
          </h6>
          <div className="border-b-2 border-green-500 w-24 my-2"></div>
          <ul className="flex gap-4 mt-2">
            <li>
              <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-facebook text-blue-700 dark:text-blue-500 text-2xl hover:scale-110 transition-transform"></i>
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin text-[#0A66C2] dark:text-blue-400 text-2xl hover:scale-110 transition-transform"></i>
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-x-twitter text-2xl text-black dark:text-gray-300 hover:scale-110 transition-transform"></i>
              </a>
            </li>
            <li>
              <a href="http://www.github.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-github text-2xl text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-5 border-t border-gray-300 dark:border-gray-700 mt-4">
        <aside className="text-gray-700 dark:text-gray-400 text-sm md:text-base transition-colors duration-300">
          <span className="font-bold text-[#305CDE] dark:text-blue-400">#</span>{" "}
          Copyright © {new Date().getFullYear()} — All rights reserved by{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-200">
            KnowledgeEdge
          </span>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
