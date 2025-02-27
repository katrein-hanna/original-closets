import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Original Closets team is professional, prompt and offer competitive pricing. They did a wonderful job for our custom closets. Highly recommended.",
    name: "Abhay Ranjan",
  },
  {
    quote:
      " Thank you for such great service and outstanding work! Would definitely recommend!",
    name: "Sarah Thompson",
  },
  {
    quote:
      "Great quality work at very competitive prices! we had some restrictions in our condo building but they managed to accommodate and complete the job faster than we had expected.  ",
    name: "John Doe",
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
    <section className="main-container py-10 lg:h-[350px] md:h-[400px] bg-light-gray">
      <div className="content-container mx-auto text-primary">
        <h1>Testimonials</h1>
        <p className="uppercase ">Our trusted clients opinions</p>
        <div className="lg:h-[150px] md:h-[200px]">
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
      </div>
    </section>
  );
}
