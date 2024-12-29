import React from "react";
import ReactDOM from "react-dom/client";
import { CinemaPage, MovieListPage, HomePage } from "../src/components/App/App";
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "components/App/App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cinema",
        element: <CinemaPage />,
      },
      {
        path: "/movielist",
        element: <MovieListPage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);
