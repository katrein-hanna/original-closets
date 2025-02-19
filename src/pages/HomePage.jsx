import CarouselSlider from "../components/CarouselSlider";
import AboutusSection from "../components/AboutusSection";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/pantry_square/pexels-heyho-7511700.jpg";
export default function HomePage() {
  return (
    <>
      <CarouselSlider />
      <br />
      <AboutusSection />
      <br />
      <br />
      <div className="relative w-full h-[400px] overflow-auto ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="relative  text-center flex flex-col items-center justify-center h-full gap-8 ">
            <div className=" flex justify-center items-center mx-auto lg:w-2xl w-80 ">
              <h1 className="text-fourth text-center lg:text-3xl text-xl font-bold bg-primary/80 p-4 uppercase">
                Get Your Custom Design
              </h1>
            </div>
            <button className="uppercase p-3  text-fourth bg-underLine ">
              <Link to="/">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
