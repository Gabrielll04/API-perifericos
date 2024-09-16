import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./Root";
import CadastroUsuario from "./CadastroUsuario";
import "../index.css"


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
        path: "/cadastroUsuario",
        element: <CadastroUsuario />
    }
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;