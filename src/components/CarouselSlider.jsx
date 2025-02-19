import { useEffect, useState } from "react";
import image1 from "../assets/images/Garage/Capture3.jpg";
import image2 from "../assets/images/Laundry/laundary-white.jpg";
import image3 from "../assets/images/office/Office_square_4.jpg";
import image4 from "../assets/images/pantry_square/pexels-heyho-7511700.jpg";
import image5 from "../assets/images/walkin_square/pexels-heyho-8135001.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function CarouselSlider() {
  const images = [
    { image: image1, title: "Garages " },
    { image: image2, title: "Laundry Rooms" },
    { image: image3, title: "Home Offices" },
    { image: image4, title: "Kitchen Pantries" },
    { image: image5, title: "Walk-In Closets" },
  ];
  const autoSlide = true;
  const autoSlideInterval = 5000;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className=" relative w-full mx-auto ">
      {/* Overlay Div */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-20 mx-auto lg:w-2xl w-70 h-1.5 my-auto">
        <h1 className="text-fourth lg:text-3xl text-2xl font-bold bg-primary/80 p-4 uppercase">
          {images[currentIndex].title}
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden relative h-[550px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <img
              src={image.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full hover:bg-fourth text-primary p-2"
        onClick={prevSlide}
      >
        <AiOutlineLeft className="text-primary" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full hover:bg-fourth text-primary  p-2"
        onClick={nextSlide}
      >
        <AiOutlineRight className="text-primary" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-0.5 rounded-2xl mx-1 cursor-pointer ${
              index === currentIndex ? "bg-primary" : "bg-third"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
