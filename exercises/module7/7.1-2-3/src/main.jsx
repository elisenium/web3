import React from "react";
import ReactDOM from "react-dom/client";
import AddMoviePage from "../src/components/Pages/AddMoviePage";
import CinemaPage from "../src/components/Pages/CinemaPage";
import MovieListPage from "../src/components/Pages/MovieListPage";
import HomePage from "../src/components/Pages/HomePage";
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
        path: "/cinemas",
        element: <CinemaPage />,
      },
      {
        path: "/movies",
        element: <MovieListPage />,
      },
      {
        path: "/movies/add",
        element: <AddMoviePage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);
