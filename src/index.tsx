import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home'
import { GerenciarUsuarios } from './pages/GerenciarUsuarios/index';
import { DetalheDePessoas } from './pages/GerenciarUsuarios/DetalheDePessoas';

import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/gerenciarUsuarios",
        element: <GerenciarUsuarios />
      },
      {
        path: "/pessoas/detalhe/:id",
        element: <DetalheDePessoas />
      }
    ]
  }
])

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
