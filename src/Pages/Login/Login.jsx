import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import AuthContext from "../../Provider/AuthContext";

const Login = () => {
  const { logIn, SignInWithGoogle } = use(AuthContext);
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from);
        Swal.fire({
          title: "Welcome Back!",
          text: "You have successfully logged in. ",
          icon: "success",
        });
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    SignInWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: "Welcome Back!",
          text: "You have successfully logged in. ",
          icon: "success",
        });
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("A new Password has been sent in your email.", {});
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen font-[lora] lg:pt-20 pt-15 px-5">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto  border-blue-500 border">
          <div className="">
            <div className="text-center font-semibold text-lg font-[poppins] pt-5 ">
              <h2 className="text-black text-xl">Welcome back</h2>
              <h3 className="text-blue-700 text-2xl font-[poppins]">
                Login your account{" "}
              </h3>
            </div>
            <div
              onClick={handleGoogleSignIn}
              className="flex justify-center mt-2"
            >
              <button className="btn bg-white text-black border-blue-400">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                {/* email */}
                <label className="label focus:border-blue-500">Email</label>
                <input
                  name="email"
                  type="email"
                  ref={emailRef}
                  className="input focus:border-blue-500"
                  placeholder="Email"
                  required
                />
                {/* password */}
                <label className="label focus:border-blue-500">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input focus:border-blue-500"
                  placeholder="Password"
                  required
                />
                <div onClick={handleForgetPassword}>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {error && <p className="text-red-600"> {error}</p>}

                <button type="submit" className="w-40 mx-auto">
                  <div class="relative rounded py-2 overflow-hidden group bg-blue-500  hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span class="relative text-xl font-bold">Login</span>
                  </div>
                </button>
              </fieldset>
              <div className="font-semibold text-lg text-center pt-2 ">
                <p>
                  Don't have an account?
                  <Link
                    to="/auth/register"
                    className="font-bold text-blue-700 link link-hover px-1"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
