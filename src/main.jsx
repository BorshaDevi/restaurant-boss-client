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
        path:'/order',
        element:<Order></Order>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

    <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
    </HelmetProvider>
  </React.StrictMode>,
)
