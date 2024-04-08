import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Routes,
} from "react-router-dom";
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
import { Almacenamiento } from "./components/Almacenamiento/Almacenamiento";
import { Calentamiento } from "./components/Calentamiento/Calentamiento";
import { PanelesEmpresas } from "./components/PanelesEmpresas/PanelesEmpresas";
import { Financiamiento } from "./components/Financiamiento/Financiamiento";
import { Calderas } from "./components/Calderas/Calderas";
import { Ahorro } from "./components/Ahorro/Ahorro";
import { Faqs } from "./components/Faqs/Faqs";
import { AvisoPrivacidad } from "./components/Legales/AvisoPrivacidad";

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
          <Route path="/solicitar-estudio" element={<SolicitarCalculo />} />
          <Route path="/paneles-solares" element={<PanelesSolares />} />
          <Route path="/estudio" element={<Estudio />} />
          <Route path="/plomeria" element={<Plomeria />} />
          <Route path="/electricidad" element={<Electricidad />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/smart-home" element={<SmartHome />} />
          <Route
            path="/almacenamiento-de-energia"
            element={<Almacenamiento />}
          />
          <Route path="/calentamiento-de-agua" element={<Calentamiento />} />
          <Route path="/ahorro-de-agua" element={<Ahorro />} />
          <Route path="/calderas-de-condensacion" element={<Calderas />} />
          <Route path="/financiamiento" element={<Financiamiento />} />
          <Route
            path="/paneles-solares-empresas"
            element={<PanelesEmpresas />}
          />
          <Route path="/preguntas-frecuentes" element={<Faqs />} />
          <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Contacto>
  );
}

export default App;
