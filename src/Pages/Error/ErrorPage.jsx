import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router';
import errorAnimation from '../../assets/errorAnimation.json'

const ErrorPage = () => {
    return (
       
    <div className="lg:mx-25 md:mx-15  mt-10 mx-5 dark:bg-[#252728] bg-[#FDFBD4]"> 
      {/* dynamic title */}
  
      <div className=" rounded-2xl  shadow-2xl 00 mt-15 pb-8 font-[lora] ">
        <div className= " relative z-10 h-full flex justify-center   items-center">
          <div className="hero-content text-center text-black dark:text-white ">
          
            <div className="flex flex-col items-center ">
                  <div className='w-40 lg:w-60'>
              <Lottie animationData={errorAnimation} loop={true}></Lottie>
            </div>
              <h1 className="text-4xl font-bold text-red-700">404</h1>
              <p className="mb-5">Page Not Found!</p>
              <p className="font-sm pb-5">Lost in Knowledge?</p>
              <div>
                <Link to="/">
                 <button>
                    <div href="#_" class="px-5 py-2.5 relative rounded group  text-white font-bold inline-block">
    <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-blue-600 to-blue-500"></span>
    <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-600 to-blue-500"></span>
    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-600 to-blue-500"></span>
    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-blue-600 from-blue-500"></span>
    <span class="relative font-[poppins]">   Back to Home</span>
</div>
                 </button>
                
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