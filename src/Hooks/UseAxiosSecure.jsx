import axios from "axios";

const UseAxiosSecure = () => {
  const instance = axios.create({
    baseURL: "https://assignment-11-server-sigma-lime.vercel.app",
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

export default UseAxiosSecure;
