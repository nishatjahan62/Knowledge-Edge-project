import React from "react";
import { Link } from "react-router";
import AuthHook from "../../Hooks/AuthHook";

const Footer = () => {
  const {user}=AuthHook()
  return (
    <div>
      <footer
        className=" 
            bg-[#FDFBD4] dark:bg-[#252728]   lg:footer-horizontal mt-10 md:mt-15 lg:mt-20  p-5 pt-5 md:px-10 lg:px-20"
      >
        <div
          className="flex lg:flex-row flex-col lg:items-center justify-around lg:gap-10 p-2
         pt-5"
        >
          
          <div className="">
           
            <ul className="space-y-1.5">
             
              <li>
               <Link to={"/about-us"}>  <div>
            <img
              className="block  dark:hidden w-50 "
              src={"/Logo&Name.png"}
              alt=""
            />
          <img className="hidden dark:block w-50 " src={"/Logo&NameDark.png"} alt="" />
          </div></Link>
               
              </li>
              <li className="link link-hover font-semibold">
                {" "}
                <Link to="/about-us">About us</Link>
              </li>
              <li className="link link-hover font-semibold">
                {" "}
                <Link to="/all-articles">All Articles</Link>
              </li>
<li className="link link-hover font-semibold">
  {user && (
    <Link to="/my-posted-articles">My Posted Articles</Link>
  )}
</li>
            </ul>
          </div>
          <ul className="space-y-1.5">
            {" "}
            <li>
              {" "}
              <h6 className="font-semibold text-xl font-[quicksand]">Terms</h6>
            </li>
            <div className="border-b-2 border-green-500 w-20 "></div>
            <li>
              {" "}
              <a className="link link-hover font-semibold">Terms of service</a>
            </li>
            <li>
              {" "}
              <a className="link link-hover font-semibold">
                Privacy policy
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="link link-hover font-semibold">Cookie policy</a>
            </li>
            <li>
              {" "}
              <a className="link link-hover font-semibold">
                Refund policy
              </a>{" "}
            </li>
          </ul>
          <ul className="space-y-1.5">
            {" "}
            <li>
              {" "}
              <h6 className="font-bold text-xl font-[quicksand]">Help</h6>
            </li>
            <div className="border-b-2 border-green-500 w-15 "></div>
            <li>
              {" "}
              <a className="link link-hover font-semibold">Support Section</a>
            </li>
            <li>
              {" "}
              <a className="link link-hover font-semibold">FAQ</a>{" "}
            </li>
            <li>
              {" "}
              <a className="link link-hover font-semibold">Report</a>
            </li>
            <li>
              {" "}
              <a className="link link-hover font-semibold">Contact</a>{" "}
            </li>
          </ul>
          <ul className="space-y-1.5">
            {" "}
            <li>
              {" "}
              <h6 className="font-semibold text-xl font-[quicksand]">
                Follow Us
              </h6>
              <div className="border-b-2 border-green-500 w-25 "></div>
            </li>
            <li>
              <a href="http://www.facebook.com " target="_blank">
                <i className="fa-brands fa-square-facebook text-blue-700 text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="http://www.linkdin.com">
                <i className="fa-brands fa-linkedin text-[#0A66C2] text-2xl "></i>
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com">
                <i className="fa-brands fa-square-x-twitter text-2xl "></i>
              </a>
            </li>
            <li>
              {" "}
              <a href="http://www.github.com">
                <i className="fa-brands fa-square-github text-2xl "></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:text-center pt-3">
          <aside>
            <span className="text-xl">#</span> Copyright ©{" "}
            {new Date().getFullYear()} - All right reserved by GroveGardener Ltd
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
