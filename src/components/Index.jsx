import { CardPrecing } from "./CardPrecing/CardPrecing";
import { Precing } from "./CardPrecing/Precing";
import { FooterCR } from "./FooterCR";
import { NavBar } from "./NavBar/NavBar";

export const Index = () => {
  return (
    <main>
      <NavBar />
      <div className="w-full h-[70px]  bg-transparent "></div>
      <CardPrecing />
      <Precing />

      <FooterCR />
    </main>
  );
};
