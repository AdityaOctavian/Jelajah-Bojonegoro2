import Navbar from "../../components/navbar/navbar";
// import Footer  from "../../components/footer/footer";
import { ButtonAI } from "../../components/button/btn-ai";
import "../../App.css";
import HeroSec from "../../components/Hero/HeroSection";
import { Footer } from "../../components/footer/footer";
import TravelPlanner from "../../components/TravelPlanner/TravelPlanner";
import WhyJelajah from "../../components/desc/descHero1";
import DestinasiPilihan from "../../components/desc/descDestination";
import WarisanBudaya from "../../components/desc/DescHero2";

const Beranda = () => {
  return (
    <>
      <Navbar />
          <HeroSec />
          <TravelPlanner />
          <WhyJelajah />
          <DestinasiPilihan />
          <WarisanBudaya/>
      <ButtonAI />
      <Footer />
    </>
  );
};

export default Beranda;
