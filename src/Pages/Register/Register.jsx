import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import Swal from "sweetalert2";
import toast from "react-hot-toast";
import AuthHook from "../../Hooks/AuthHook";

const Register = () => {
  const { createUser, setUser, updateUser, user } = AuthHook();

  //    name & password Validation
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const email = form.email.value;

    //   Validation
    // Name Validation
    if (name.length < 6) {
      setNameError("Name must be at least  5 character");
      return;
    } else {
      setNameError("");
    }
    // password validation
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (password.length < 6) {
      setPasswordError("password  must be at least 6 character");
      return;
    } else if (!upperCase.test(password)) {
      setPasswordError("PassWord must contain at Least one Uppercase letter");
      return;
    } else if (!lowerCase.test(password)) {
      setPasswordError("PassWord must contain at Least one lowercase letter");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((res) => {
        res.user;
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate(from);
        });
        Swal.fire({
          title: "Created Account",
          text: "Your account has been registered successfully. ",
          icon: "success",
        });
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
        setError(errorMessage);
      });
  };

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
              {nameError && <p className="text-red-600"> {nameError}</p>}

              {/* Photo URL */}
              <label className="label focus:border-blue-300">PHoto URL</label>
              <input
                name="photo"
                type="url"
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
              {error && <p className="text-red-600"> {error}</p>}

              {/* password */}
              <label className="label focus:border-blue-300">Password</label>
              <input
                name="password"
                type="password"
                className="input focus:border-amber-300"
                placeholder="Password"
                required
              />
              {passwordError && (
                <p className="text-red-600"> {passwordError}</p>
              )}
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
                    to="/auth/login"
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
