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
import CategoryPage from "../Components/Hero/CategoryPage";
import ArticleDetails from "../Pages/articleDetails/ArticleDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import PostArticles from "../Pages/PostArticles/PostArticles";
import MyArticles from "../Pages/MyArticles/MyArticles";
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
      {
        path: "article-by-category/:category",
        element: <CategoryPage></CategoryPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/articles/?category=${params.category}`),
      },
      {
        path: "article/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ArticleDetails></ArticleDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/articles/${params.id}`),
      },
      {
        path: "post-articles",
        element: (
          <PrivateRoute>
            <PostArticles></PostArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "my-posted-articles",
        element: (
          <PrivateRoute>
        <MyArticles></MyArticles>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth/Login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
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
