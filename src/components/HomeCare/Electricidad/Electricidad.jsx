import { NavBar } from "../../NavBar/NavBar";
import { BannerElec } from "./BannerElec";
import { AnalyticsElec } from "./AnalyticsElec";
import { CardElec } from "./CardElec";
import { CallElec } from "./CallElec";
import { FooterCR } from "../../FooterCR";
import { Helmet } from "react-helmet-async";

export const Electricidad = () => {
  return (
    <main>
       <Helmet>
        <title>Electricidad | Ontu</title>
        <meta
          name="description"
          content="Gestionar tu hogar con los mejores electricista especializados a domicilio."
        />
        <meta
          name="Keywords"
          content="electricista cerca de mi, electricista, electricista a domicilio "
        />
         <meta property="og:title" content="Electricidad  | Ontu" />
        <meta
          property="og:description"
          content="Gestionar tu hogar con los mejores electricista especializados a domicilio."
        />
        <meta property="og:url" content="https://www.ontu.mx/electricidad" />
        <meta property="og:image" content="https://www.ontu.mx/ontu_logo.png" />
        <link
          rel="canonical"
          href="https://www.ontu.mx/electricidad"
        />
      </Helmet>
      <NavBar />
      <div className="w-full">
        <BannerElec />
      </div>
      <AnalyticsElec />
      <CardElec />
      <CallElec />
      <FooterCR />
    </main>
  );
};
