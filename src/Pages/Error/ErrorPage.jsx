import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router";
import errorAnimation from "../../assets/errorAnimation.json";
import Button from "../Button/Button";

const ErrorPage = () => {
  return (
    <div className="lg:mx-25 md:mx-15  mt-10 mx-5 dark:bg-[#252728] bg-[#FDFBD4]">
      {/* dynamic title */}

      <div className=" rounded-2xl  shadow-2xl 00 mt-15 pb-8 font-[lora] ">
        <div className=" relative z-10 h-full flex justify-center   items-center">
          <div className="hero-content text-center text-black dark:text-white ">
            <div className="flex flex-col items-center ">
              <div className="w-40 lg:w-60">
                <Lottie animationData={errorAnimation} loop={true}></Lottie>
              </div>
              <h1 className="text-4xl font-bold text-red-700">404</h1>
              <p className="mb-5">Page Not Found!</p>
              <p className="font-sm pb-5">Lost in Knowledge?</p>
              <div>
                <Link to="/">
                  <Button label="Back to home "></Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
