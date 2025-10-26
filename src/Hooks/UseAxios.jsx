import axios from "axios";
import React from "react";
const axiosIntense = axios.create({
  baseURL: "https://assignment-11-server-sigma-lime.vercel.app",
});

const UseAxios = () => {
  return axiosIntense;
};

export default UseAxios;