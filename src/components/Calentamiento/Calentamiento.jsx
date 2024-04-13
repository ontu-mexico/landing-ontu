import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerCalentamiento } from "./BannerCalentamiento";
import { CallCalen } from "./CallCalen";
import { ServiciosCalen } from "./ServiciosCalen";
import { DiseñoCalen } from "./DiseñoCalen";
import { Helmet } from "react-helmet-async";
export const Calentamiento = () => {
  return (
    <main>
      <Helmet>
        <title>Calentamiento de agua | Ontu</title>
        <meta
          name="description"
          content="Calentamiento de agua. Aprovecha el sol y ahorra con cada gota ques calientes para bañarte y tu alberca. "
        />
        <meta
          name="Keywords"
          content="calentador de agua, calentador de agua solar, calentador de agua con panel solar, calentador de agua solar precio"
        />
      </Helmet>
      <NavBar />
      <BannerCalentamiento />
      <ServiciosCalen />
      <DiseñoCalen />
      <CallCalen />
      <FooterCR />
    </main>
  );
};
