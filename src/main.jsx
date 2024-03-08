import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// // Rutas
import { Sustentabilidad } from "./components/Sustentabilidad";
import { Error } from "./components/Error";
import { SolicitarCalculo } from "./components/SolicitarCalculo";
import { InicioSesion } from "./components/InicioSesion/InicioSesion";
import { Index } from "./components";
import { PanelesSolares } from "./components/PanelesSolares/PanelesSolares";
import { Estudio } from "./components/Estudio/Estudio";
import { Plomeria } from "./components/HomeCare/Plomeria";
import { Electricidad } from "./components/HomeCare/Electricidad/Electricidad";
import { Personal } from "./components/Formularios/personal";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PanelesSolares />,
    errorElement: <Error />,
  },
  {
    path: "/Sustentabilidad",
    element: <Sustentabilidad />,
  },
  {
    path: "/SolicitarEstudio",
    element: <SolicitarCalculo />,
  },
  {
    path: "/InicioSesion",
    element: <InicioSesion />,
  },
  {
    path: "/PanelesSolares",
    element: <PanelesSolares />,
  },
  {
    path: "/Estudio",
    element: <Estudio />,
  },
  {
    path: "/Plomeria",
    element: <Plomeria />,
  },
  {
    path: "/Electricidad",
    element: <Electricidad />,
  },
  {
    path: "/Personal",
    element: <Personal />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
