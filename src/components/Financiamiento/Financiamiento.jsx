import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerFinanciamiento } from "./BannerFinanciamiento";
import { SolucionesFinancieras } from "./SolucionesFinancieras";
// import { CalculadoraFinanciera } from "./CalculadoraFinanciera";
import { CallAlma } from "../Almacenamiento/CallAlma";
import { Helmet } from "react-helmet-async";

export const Financiamiento = () => {
  return (
    <main>
      <Helmet>
        <title>Financiamiento | Ontu</title>
        <meta
          name="description"
          content="El mejor financiamiento para transforma tu hogar o industria con energía sostenible. Expertos en eficiencia y ahorro."
        />
        <meta
          name="Keywords"
          content="precio de paneles solares mexico, financiamiento paneles solares, costo de paneles solares para casa, casas sustentables con paneles solares, precio para paneles solares para empresas, paneles solares mexico"
        />
        <meta property="og:title" content="Financiamiento | Ontu" />
        <meta
          property="og:description"
          content="El mejor financiamiento para transforma tu hogar o industria con energía sostenible. Expertos en eficiencia y ahorro."
        />{" "}
        <meta property="og:url" content="https://www.ontu.mx/financiamiento" />
        <meta property="og:image" content="https://www.ontu.mx/ontu_logo.png" />
        <link rel="canonical" href="https://www.ontu.mx/financiamiento" />
      </Helmet>
      <NavBar />
      <BannerFinanciamiento />
      <SolucionesFinancieras />
      {/* <CalculadoraFinanciera /> */}
      <CallAlma />
      <FooterCR />
    </main>
  );
};
