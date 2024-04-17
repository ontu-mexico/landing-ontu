import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { SectionCalculo } from "../sustentabilidad/SectionCalculo";
import { BannerHC } from "./BannerHC";
import { ServiciosHC } from "./ServiciosHC";
import { Helmet } from "react-helmet-async";

export const HomeCare = () => {
  return (
    <main>
      <Helmet>
        <title>Home Care | Ontu</title>
        <meta
          name="description"
          content="Transforma tu hogar con los mejores servicios de Electricidad, Plomería y Smart Home."
        />
        <meta
          name="Keywords"
          content="cuidado del hogar, plomeria cerca de mi, electricidad, electricista cerca de mi, plomería, hogar inteligente, dispositivos inteligentes para el hogar"
        />
        <meta property="og:title" content="Home Care | Ontu" />
        <meta
          property="og:description"
          content="Transforma tu hogar con los mejores servicios de Electricidad, Plomería y Smart Home."
        />
        <meta property="og:url" content="https://www.ontu.mx/home-care" />
        <meta property="og:image" content="https://www.ontu.mx/logo_ontu-DO4XE2sa.png" />
        <link rel="canonical" href="https://www.ontu.mx/home-care" />
      </Helmet>
      <NavBar />
      <div className="w-full">
        <BannerHC />
      </div>
      <ServiciosHC />
      <SectionCalculo />
      <FooterCR />
    </main>
  );
};
