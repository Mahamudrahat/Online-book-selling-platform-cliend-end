import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { ROUTES } from "../routes";
import Homepage from "../pages/Homepage";
import CommonLayout from "../layout/CommonLayout";
import BookDetailpage from "../pages/BookDetailpage";
import Faqpage from "../pages/Faqpage";
import NotFound from "../components/NotFound";
import Login from "../login/Login";
import Register from "../register/Register";


export const router = createBrowserRouter([
    {
      path: `${ROUTES.Home}`,
      element: <CommonLayout />,
      children: [
        {
            path: `${ROUTES.Home}`,
            element: <Homepage />,
          },
          {
            path: `${ROUTES.FAQ}`,
            element: <Faqpage />,
          },

        {
            path: `${ROUTES.SINGLE_BOOKS.STATIC}`,
            element: <BookDetailpage />, 
        },
        {
            path: "*",
            element: <NotFound />, 
        },
        {
          path:`${ROUTES.LOGIN}`,
          element:<Login/>,
        },
        {
          path:`${ROUTES.REGISTER}`,
          element:<Register/>,
        },

        ]
    },
  ]);