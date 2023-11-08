import React from 'react';
//Styles
import './index.css';
//Router
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//Components
import HomePage from './pages/HomePage';
import DataLayout from './pages/DataLayout';
import Nosotros from './pages/Nosotros';
import Anuncios from './pages/Anuncios';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';

const router = createBrowserRouter([
  {
    //Layout principal
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/data',
    element: <DataLayout />,
    children: [
      {
        path: '/data/nosotros',
        element: <Nosotros />,
      },
      {
        path: '/data/anuncios',
        element: <Anuncios />,
      },
      {
        path: '/data/blog',
        element: <Blog />,
      },
      {
        path: '/data/contacto',
        element: <Contacto />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
