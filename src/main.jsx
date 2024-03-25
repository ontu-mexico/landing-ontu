import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// // Rutas
import { Error } from "./components/Error";
import { SolicitarCalculo } from "./components/SolicitarCalculo";
import { InicioSesion } from "./components/InicioSesion/InicioSesion";
import { Index } from "./components";
import { PanelesSolares } from "./components/PanelesSolares/PanelesSolares";
import { Estudio } from "./components/Estudio/Estudio";
import { Plomeria } from "./components/HomeCare/Plomeria/Plomeria";
import { Electricidad } from "./components/HomeCare/Electricidad/Electricidad";
import { Personal } from "./components/Formularios/personal";
import { SmartHome } from "./components/HomeCare/SmartHome/SmartHome";
import { UnderConstruction } from "./components/UnderConstruction";
import { Contacto } from "./components/Formularios/Contacto";
import { HomeCare } from "./components/HomeCare/HomeCare";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeCare />,
    errorElement: <Error />,
  },
  {
    path: "/HomeCare",
    element: <HomeCare />,
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
  {
    path: "/SmartCare",
    element: <SmartHome />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Contacto>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Contacto>
);
