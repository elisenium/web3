import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './components/App/App'
import Page from './components/Page/Page'
import Joke from './components/Joke/Joke'
import { JokesProvider } from './contexts/jokeContext'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Page title="Page d’accueil des blagues les plus célèbres !"/>,
      },
      {
        path: "/famous-jokes",
        element: (
        <Page title="Manage Jokes">
          <JokesProvider>
            <Joke />
          </JokesProvider>
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
