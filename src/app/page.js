import Image from "next/image";
import Banner from "./banner/banner";
import About from "./about-us/page";
import OurServices from "./our-services/page";
import OurProduct from "./our-product/OurProduct";
import Clock from "./clock/Clock";
import OurTeam from "./our-team/OurTeam";
import Core from "./CoreFeatures/Core";
import Testimonial from "./testomonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <OurServices />
      <Clock />
      <OurProduct />
      <OurTeam />
      <Core />
      <Testimonial/>
    </div>

  );
}
