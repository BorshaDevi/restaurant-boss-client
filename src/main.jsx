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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard/Dashboard';
import Cart from './Pages/Dashboard/Cart/Cart';
import ManageUser from './Layout/Dashboard/ManageUser';
import AddItem from './Pages/Dashboard/AddItem/AddItem';
import AdminRoute from './AdminRoute/AdminRoute';
import ManageItem from './Pages/Dashboard/ManageItem/ManageItem';

const queryClient = new QueryClient()
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
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      // user see
      {
        path:'cart',
        element:<Cart></Cart>
      },
      // Admin see
      {
           path:'addItem',
           element:<AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path:'manageItem',
        element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path:'manageUser',
        element:<AdminRoute><ManageUser></ManageUser></AdminRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
    <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
    </HelmetProvider>
    </QueryClientProvider>
   
   </Authprovider>
  </React.StrictMode>,
)
