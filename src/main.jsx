import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root';
import Home from './Pages/Home/Home';
import OurMenu from './Pages/OurMenu/OurMenu';
import {  HelmetProvider } from 'react-helmet-async';
import Order from './Pages/Order/Order';
import Login from './Pages/Login/Login';
import Authprovider from './Authprovider/Authprovider';
import SignUp from './Pages/Register/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Secreat from './Pages/Secreat/Secreat';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/ourMenu',
        element:<OurMenu></OurMenu>
      },
      {
        path:'/order/:category',
        element:<Order></Order>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/secret',
        element:<PrivateRoute><Secreat></Secreat></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <HelmetProvider>
    <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
    </HelmetProvider>
   </Authprovider>
  </React.StrictMode>,
)
