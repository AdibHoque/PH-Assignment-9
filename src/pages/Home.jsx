import {Helmet} from "react-helmet-async";
import Cards from "../components/Cards";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LE - HOME</title>
      </Helmet>
      <Slider></Slider>
      <Cards></Cards>
    </>
  );
}
