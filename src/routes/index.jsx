import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import MainTemplate from "../templates/MainTemplate";
import { LoginPage, HomePage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },

    ],
  },
]);

