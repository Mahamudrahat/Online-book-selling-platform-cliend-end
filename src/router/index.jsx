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
import DashboardLayout from "../layout/DashboardLayout";
import Category from "../components/category/Category";
import Profile from "../components/profile/Profile";
import Product from "../components/product/Product";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductListByCategory from "../pages/ProductListByCategory";
import SingleProductDetailPage from "../pages/SingleProductDetailPage";
//import CategoryForm from "../components/category/Category";


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
          path: `${ROUTES.ALLPRODUCT}`,
          element: <ProductDetailsPage/>
         
      },
      {
        path:`${ROUTES.PRODUCT_BY_CATEGORY.STATIC}`,
        element:<ProductListByCategory/>
      },
      {
        path:`${ROUTES.SINGLE_PRODUCT.STATIC}`,
        element:<PrivateRoute>
          <SingleProductDetailPage/>
        </PrivateRoute>
        
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
    {
      path: `${ROUTES.DASHBOARD}`,
      element: <DashboardLayout />,
      children:[
        {
          path: "",
          element: <Profile />,
        },
      
        {
          path:`${ROUTES.Category}`,
          element:<Category/>,
        },
        {
          path:`${ROUTES.PRODUCT}`,
          element:<Product/>,
        },
      ],
    }
  ]);