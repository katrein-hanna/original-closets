import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import image1 from "../assets/images/garage/Garage_suqare_2.webp";
import image2 from "../assets/images/laundry/Laundryu_square_1.webp";
import image3 from "../assets/images/office/Office_square_1.webp";
import image4 from "../assets/images/pantry/Pantry_square_1.webp";
import image5 from "../assets/images/closets/walkIn/Walkin_square_1.webp";

export default function HeroSection() {
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
    <section className="relative w-full mx-auto bg-light-gray">
      {/* Overlay with Title */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 bg-primary/10">
        <h2 className="text-white bg-primary/90 p-4 rounded-2xl uppercase ">
          {images[currentIndex].title}
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden md:h-[550px] h-[500px] w-full">
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
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute hidden md:block top-1/2 left-5 transform -translate-y-1/2 rounded-full bg-primary/50 hover:bg-primary text-white p-3 z-20"
        onClick={prevSlide}
      >
        <AiOutlineLeft className="md:text-3xl  text-xs" />
      </button>
      <button
        className="absolute hidden md:block top-1/2 right-5 transform -translate-y-1/2 rounded-full bg-primary/50 hover:bg-primary text-white p-3 z-20"
        onClick={nextSlide}
      >
        <AiOutlineRight className="md:text-3xl text-xs" />
      </button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "bg-primary scale-125" : "bg-light-gray"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
