import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Layout from './pages/layout';

//Creating Router instance
const router = createBrowserRouter([
  {
    //Navbar showing on each page
    path: "/",
    element: <Layout />,
    children: [
      //All pages belong here, import component and replace element
      {
        path: "/home",
        element: <div>Home page</div>
      },
      {
        path: "/map",
        element: <div>Map page</div>
      },
      {
        path: "/community",
        element: <div>Community page</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
