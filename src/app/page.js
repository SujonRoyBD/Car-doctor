import Image from "next/image";
import Banner from "./banner/banner";
import About from "./about-us/about";
import OurServices from "./our-services/ourServices";
import OurProduct from "./our-product/OurProduct";
import Clock from "./clock/Clock";
import OurTeam from "./our-team/OurTeam";

export default function Home() {
  return (
   <div>
  <Banner/>
  <About/>
  <OurServices/>
  <Clock/>
  <OurProduct/>
  <OurTeam/>
   </div>
   
  );
}
