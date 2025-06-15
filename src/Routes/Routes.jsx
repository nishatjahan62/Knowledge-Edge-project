import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Loading from "../Pages/Loading/Loading";

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
    ],
  },
]);
