import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// // Rutas
import { Error } from "./components/Error";
import { SolicitarCalculo } from "./components/SolicitarCalculo";
import { InicioSesion } from "./components/InicioSesion/InicioSesion";
import { PanelesSolares } from "./components/PanelesSolares/PanelesSolares";
import { Estudio } from "./components/Estudio/Estudio";
import { Plomeria } from "./components/HomeCare/Plomeria/Plomeria";
import { Electricidad } from "./components/HomeCare/Electricidad/Electricidad";
import { Personal } from "./components/Formularios/personal";
import { SmartHome } from "./components/HomeCare/SmartHome/SmartHome";
import { Contacto } from "./components/Formularios/Contacto";
import { HomeCare } from "./components/HomeCare/HomeCare";
import { Index } from "./components/Index/Index";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Contacto>
    <React.StrictMode>
      <RouterProvider router={router}>
        <Index />
      </RouterProvider>
    </React.StrictMode>
  </Contacto>
);
