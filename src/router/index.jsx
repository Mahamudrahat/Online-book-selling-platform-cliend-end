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
import PrivateRoute from "./PrivateRoutes";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import SingleCourseDetailPage from "../pages/SingleCourseDetailPage";
import AboutUs from "../components/aboutus/AboutUs";
import ContactUs from "../components/contactus/ContactUs";


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
            element: <PrivateRoute>
                <BookDetailpage />, 
            </PrivateRoute>
           
        },
        {
          path: `${ROUTES.SINGLE_COURSES.STATIC}`,
          element: <PrivateRoute>
             <SingleCourseDetailPage />, 
          </PrivateRoute>
         
         
      },
        {
          path: `${ROUTES.COURSE}`,
          element: <CourseDetailsPage/>
         
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
        {
          path:`${ROUTES.ABOUTUS}`,
          element:<AboutUs/>,
        },
        {
          path:`${ROUTES.CONTACTUS}`,
          element:<ContactUs/>,
        },

        ]
    },
  ]);