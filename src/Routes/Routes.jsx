import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Loading from "../Pages/Loading/Loading";
import AllArticles from "../Pages/AllArticles/AllArticles";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorLayout from "../Layouts/ErrorLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "all-articles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "auth/login",
        element: <Login></Login>,
      },
      {
        path: "auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/",
    element: <ErrorLayout></ErrorLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
