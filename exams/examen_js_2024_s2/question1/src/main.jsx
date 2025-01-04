import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/App/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page from "./components/Page/Page";
import Books from "./components/Books/Books";
import { BooksProvider } from "./contexts/booksContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Page title="Page d’accueil de la bibliothèque personnelle"/>,
      },
      {
        path: "/books",
        element: (
        <Page title="Gestion de livres">
          <BooksProvider>
            <Books />
          </BooksProvider>
        </Page>),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);
