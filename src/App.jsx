import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Routes,
} from "react-router-dom";
import { Error } from "./components/Error";
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
import { SolicitarEstudio } from "./components/PanelesSolares/SolicitarEstudio";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Contacto>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home-care" element={<HomeCare />} />
          <Route path="/paneles-solares" element={<PanelesSolares />} />
          <Route path="/plomeria" element={<Plomeria />} />
          <Route path="/electricidad" element={<Electricidad />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/smart-home" element={<SmartHome />} />
          <Route path="/solicitar-estudio" element={<SolicitarEstudio />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Contacto>
  );
}

export default App;
