import {Helmet} from "react-helmet-async";
import Cards from "../components/Cards";
import Slider from "../components/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import "animate.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up">
      <Helmet>
        <title>LE - HOME</title>
      </Helmet>
      <Slider></Slider>
      <Cards></Cards>
    </div>
  );
}
