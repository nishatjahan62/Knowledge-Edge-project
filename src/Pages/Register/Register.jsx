import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = () => {};
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen font-[lora]">
        <div className="card  border border-blue-600 bg-base-100 items-center max-w-sm shrink-0 shadow-2xl mt-30 lg:px-5">
          <form onSubmit={handleRegister} className="card-body">
            <div className="text-center font-semibold text-lg font-[poppins]">
              <h2 className="text-black">Welcome</h2>
              <h3 className="text-blue-700 text-xl font-[poppins]">
                Register your account{" "}
              </h3>
            </div>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label focus:border-blue-300">Name</label>
              <input
                name="name"
                type="name"
                className="input focus:border-blue-400"
                placeholder="Name"
                required
              />

              {/* Photo URL */}
              <label className="label focus:border-blue-300">PHoto URL</label>
              <input
                name="photo"
                type="PhotoURL"
                className="input focus:border-blue-300"
                placeholder="PhotoURL"
                required
              />

              {/* Email */}
              <label className="label focus:border-blue-300">Email</label>
              <input
                name="email"
                type="email"
                className="input focus:border-blue-300"
                placeholder="Email"
                required
              />

              {/* password */}
              <label className="label focus:border-blue-300">Password</label>
              <input
                name="password"
                type="password"
                className="input focus:border-amber-300"
                placeholder="Password"
                required
              />

              <button type="submit" className="w-40 mx-auto pt-4">
                <div class="relative rounded py-2 overflow-hidden group bg-blue-500  hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                  <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span class="relative text-xl font-bold">Register</span>
                </div>
              </button>

              <div className="font-semibold text-lg text-center pt-2 ">
                <p>
                  Already have an account?
                  <Link
                    className="font-bold text-blue-700 link link-hover "
                    to="/auth/Login"
                  >
                    {" "}
                    Login
                  </Link>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
