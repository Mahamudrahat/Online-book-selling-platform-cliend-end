import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './router/index.jsx';
import {

  RouterProvider
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>,
)
