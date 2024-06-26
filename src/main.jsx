import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path: "addcoffee",
    element : <AddCoffee></AddCoffee>
  },
  {
  path : 'updatecoffee',
  element: <UpdateCoffee></UpdateCoffee>

  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
