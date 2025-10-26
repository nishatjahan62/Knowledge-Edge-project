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
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import Profile from "../Pages/Dashboard/Profile/Profile";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import MyFollowers from "../Pages/Dashboard/Author/MyFollowers";
import MyApplications from "../Pages/Dashboard/User/MyApplications";
import Applications from "../Pages/Dashboard/Admin/Applications";
import ApplyForAuthorRole from "../Pages/Dashboard/User/ApplyForAuthorRole";

import UpdateArticle from "../Pages/UpdateArticle/UpdateArticle";
import ForbiddenPage from "../Pages/Error/ForbiddenPage";
import Overview from "../Pages/Dashboard/Overview/Overview";
import AdminRoute from "./AdminRoutes";
import Bookmarks from "../Pages/BookMarks/BookMarks";
import AllAuthors from "../Pages/AllAuthor/AllAuthors";
import PostArticles from "../Pages/PostArticles/PostArticles";
import MyArticles from "../Pages/MyArticles/MyArticles";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", element: <Home />, hydrateFallbackElement: <Loading /> },
      { path: "all-articles", element: <AllArticles /> },
      { path: "about-us", element: <AboutUs /> },
      {
        path: "article-by-category/:category",
        element: <CategoryPage />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-sigma-lime.vercel.app/articles/?category=${params.category}`
          ),
      },
      {
        path: "article/:id",
        element: <ArticleDetails />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-sigma-lime.vercel.app/articles/${params.id}`
          ),
      },
      {
        path: "post-articles",
        element: (
          <PrivateRoute>
            <PostArticles />
          </PrivateRoute>
        ),
      },
      {
        path: "my-posted-articles",
        element: (
          <PrivateRoute>
            <MyArticles />
          </PrivateRoute>
        ),
      },{
        path: "bookmarks",
        element: (
          <PrivateRoute>
            <Bookmarks />
          </PrivateRoute>
        ),
      },
      {
        path: "all-authors",
        element: (
          <PrivateRoute>
            <AllAuthors />
          </PrivateRoute>
        ),
      },
      {
        path: "update-article/:id",
        element: (
          <PrivateRoute>
          <UpdateArticle />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-sigma-lime.vercel.app/articles/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <ErrorLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "*", element: <ErrorPage /> },
      { path: "forbidden", element: <ForbiddenPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout/>
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "overview", element: <Overview /> },
      { path: "profile", element: <Profile/> },

      // Admin Routes
      {
        path: "applications",
        element: (
       
           <AdminRoute> <Applications/></AdminRoute>
    
        ),
      },
  
      {
        path: "manage-users",
        element: (
      <AdminRoute> <ManageUsers /></AdminRoute>
           
         
        ),
      },

      // Author Routes
      {
        path: "my-followers",
        element: (
         
            <MyFollowers />
         
        ),
      },
      

      // User Routes
      {
        path: "apply-for-author",
        element: (
          <PrivateRoute>
          <ApplyForAuthorRole></ApplyForAuthorRole>
          </PrivateRoute>
        ),
      },
      {
        path: "my-application",
        element: (
          <PrivateRoute>
            <MyApplications/>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
