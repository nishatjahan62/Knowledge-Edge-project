import React from "react";
import { motion, scale } from "motion/react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero  bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a]  pt-10 py-5 lg:pb-0 rounded-4xl  shadow-2xl ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex flex-col gap-4 items-center lg:items-end relative justify-center">
          <img
            src="/article01.jpg"
            className="lg:max-w-md w-70 md:w-80 lg:w-[90%] rounded-2xl shadow-2xl "
          />
            <img
            src="/article02.jpg"
            className="lg:max-w-md rounded-2xl w-70 md:w-80 lg:w-[90%] shadow-2xl lg:relative lg:-top-20 lg:left-20 relative -top-15 left-5 "
          />

        </div>
        <div className="flex-1 lg:text-left text-center">
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 4 }}
            className="text-5xl font-bold  text-[#305CDE]"
          >
            Share Your Knowledge 
          </motion.h1>
          <p className="py-6 ">
            Let your thoughts flow into the world. Write with passion. 
            Share with purpose.
          </p>
          <Link to="/all-articles">
            <button
              href="#_"
              class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
            >
              <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span class="relative z-20 flex items-center text-sm">
                <svg
                  class="relative w-5 h-5 mr-2 text-white"
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
                Explore Articles
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
