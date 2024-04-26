import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { AnalyticsIndex } from "./AnalyticsIndex";
import { BannerIndex } from "./BannerIndex";
import { ServiciosIndex } from "./ServiciosIndex";
import { FormularioIndex } from "./FormularioIndex";
import { LogosEmpresas } from "./LogosEmpresas";
import { Helmet } from "react-helmet-async";

export const Index = () => {
  return (
    <main>
      <Helmet>

        <title>Home | Ontu</title>
        <meta
          name="description"
          content="Transforma tu hogar o industria con energía sostenible con el uso paneles solares y calderas de condensación. Energía renovada, futuro descarbonizado. Expertos en eficiencia y ahorro. "
        />
        <meta
          name="Keywords"
          content="paneles solares,  paneles solares para casa, casas sustentables con paneles solares, paneles solares para industrias, paneles solares mexico"
        />
        <meta property="og:title" content="Home | Ontu" />

        <meta
          property="og:description"
          content="Transforma tu hogar o industria con energía sostenible con el uso paneles solares y calderas de condensación. Energía renovada, futuro descarbonizado. Expertos en eficiencia y ahorro."
        />
        <meta property="og:url" content="https://www.ontu.mx/" />
        <meta property="og:image" content="https://www.ontu.mx/ontu.jpg" />
        <meta
          property="og:image:url"
          content="https://www.ontu.mx/ontu.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.ontu.mx/ontu.jpg"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta name="robots" content="index, follow"></meta>
      </Helmet>
      <NavBar />
      <BannerIndex />
      <AnalyticsIndex />
      <ServiciosIndex />
      <LogosEmpresas />
      <FormularioIndex />
      <FooterCR />
    </main>
  );
};
