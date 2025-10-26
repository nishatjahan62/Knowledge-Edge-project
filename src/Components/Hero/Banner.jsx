import React from "react";
import { motion, scale } from "motion/react";
import { Link } from "react-router";
import { animate } from "motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Button from "../../Pages/Button/Button";

const Banner = () => {
  return (
    <div className="hero mt-15 bg-gradient-to-b from bg-[#FDFBD4] to-[#57B9FF80] dark:bg-[#252728] dark:to-[#3a3a3a]  pt-10 py-5 lg:pb-0 rounded-4xl  shadow-2xl ">
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
          <motion.h2
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 4 }}
            className="text-xl sm:text-2xl lg:text-4xl font-bold  text-[#305CDE] max-w-xl min-w-xs pb-5 leading-normal"
          >
            <motion.span
              animate={{
                color: [
                  "#007BA7",
                  "#ffc067",
                  "#2e6f40",
                  "#B31B1B",
                  "#FF1DCE",
                  "#0000CD",
                  "#305CDE",
                ],
                transition: { duration: 5, repeat: Infinity },
              }}
            >
              {" "}
              "KnowledgeEdge"
            </motion.span>{" "}
            The MERN Stack Gateway to Student Wisdom and Collaboration
          </motion.h2>

          <motion.h2
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 4 }}
            className=" text-lg lg:text-2xl font-bold  "
          >
            Share Your Knowledge
          </motion.h2>
          <p className="py-6 text-sm lg:text-base ">
            Let your thoughts flow into the world. Write with passion. Share
            with purpose.
          </p>
          <Link to="/all-articles">
            <div
              data-tooltip-id="explore-article"
              data-tooltip-content="Click to explore all article"
              href="#_"
            >
              <Button label="Explore All articles "></Button>
            </div>
          </Link>
          <Tooltip id="explore-article"></Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Banner;
