import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "./Button";

const testimonials = [
  {
    quote:
      "MANHAL is skilled and professional. He takes pride in his work and is committed to the end. Would definitely recommend",
    name: "Jan6987",
  },
  {
    quote:
      "We had an amazing experience with original closets (quality and price ),Manhal was very professional, I'll definitely be using them again, they have our highest recommendation.",
    name: "90Suhair Makdesi",
  },
  {
    quote:
      "Manhal took the time to listen to what we wanted/needed. He created a beautifully organized space with professional workmanship and great communication throughout the process! We highly recommend him and will use his services for future projects!",
    name: "Shelley Kossatz",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const autoSlide = true;
  const autoSlideInterval = 5000;

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setDirection(1);
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval]);

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="main-container py-10  md:h-[500px] bg-light-gray">
      <div className="content-container mx-auto text-primary">
        <h1>Testimonials</h1>
        <p className="uppercase font-medium text-primary/70 mt-2">
          What Our Customers Say
        </p>
        <div className="md:h-[200px]">
          <div className="flex flex-col items-center justify-center text-center p-8">
            {/* Animated Quote Text */}
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-lg lg:text-xl font-medium"
            >
              <span className="text-4xl text-dark-gray/50 mr-2">❝</span>
              {testimonials[index].quote}
              <span className="text-4xl text-dark-gray/50  ml-2">❞</span>
            </motion.blockquote>

            {/* Animated Name */}
            <motion.div
              key={index + "-name"}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-6 text-lg font-semibold text-primary"
            >
              — {testimonials[index].name}
            </motion.div>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mx-auto mt-6 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-primary hover:bg-text-hover transition"
          >
            <FaChevronLeft className="text-secondary" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-primary hover:bg-text-hover transition"
          >
            <FaChevronRight className="text-secondary" />
          </button>
        </div>
        <div className="flex justify-center items-center mx-auto mt-8">
          <a
            href="https://www.google.com/search?hl=en-US&gl=us&q=Original+closets&ludocid=1195600758612025218&lsig=AB86z5V-Q7soYLA4ds07l7UczxTJ#lrd=0x8220d6bc9ff3ac5f:0x1097a08e2e41df82,3"
            target="_blank"
          >
            <Button btnName="Review us on Google" />
          </a>
        </div>
      </div>
    </section>
  );
}
