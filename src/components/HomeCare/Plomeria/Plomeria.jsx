import { Helmet } from "react-helmet-async";
import { NavBar } from "../../NavBar/NavBar";
import { FooterCR } from "../../FooterCR";
import { BannerPlomer } from "./BannerPlomer";
import { CardPlomeria } from "./CardPlomeria";
import { Analytics } from "./Analytics";
import { CallPlomeria } from "./CallPlomeria";
export const Plomeria = () => {
  return (
    <main>
      <Helmet>
        <title>Plomería | Ontu</title>
        <meta
          name="description"
          content="Gestionar tu hogar con los mejores plomeros especializados a domicilio."
        />
        <meta
          name="Keywords"
          content="plomero, plomero cerca de mi, plomero cerca de mi ubicación, plomería"
        />
        <meta property="og:title" content="Plomería | Ontu" />
        <meta
          property="og:description"
          content="Gestionar tu hogar con los mejores plomeros especializados a domicilio."
        />
        <meta property="og:url" content="https://www.ontu.mx/plomeria" />
        <meta property="og:image" content="https://www.ontu.mx/ontu_logo.png" />
        <link rel="canonical" href="https://www.ontu.mx/plomeria" />
      </Helmet>
      <NavBar />
      <div className="w-full">
        <BannerPlomer />
      </div>
      <Analytics />
      <CardPlomeria />
      <CallPlomeria />
      <FooterCR />
    </main>
  );
};
