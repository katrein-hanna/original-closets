import ImageCard from "./ImageCard";
import image1 from "../assets/images/closets/walkIn/Walkin_square_5.jpg";
import image2 from "../assets/images/closets/reachIn/Reachin_square.jpg";
import image3 from "../assets/images/closets/wardrobe/wardrobe.jpg";
import { Link } from "react-router-dom";
import Button from "./Button";

const images = [
  {
    title: "Walk-In",
    description:
      "Take control of every detail of your closet from choosing the finishes & colours to the accessories and hardware.",
    bgImg: image1,
  },
  {
    title: "Reach-In",
    description:
      "Take control of every detail of your closet from choosing the finishes & colours to the accessories and hardware.",
    bgImg: image2,
  },
  {
    title: "Wardrobe",
    description:
      "This storage solution is flexible and goes anywhere, in the bedroom, at the entrance or even in the basement.",
    bgImg: image3,
  },
];

export default function DisplayWorkSection() {
  return (
    <section className="main-container py-10 bg-secondary">
      <div className="content-container mx-auto text-center">
        <h1>Custom Closets</h1>
        <p className="uppercase font-medium text-primary/70 mt-2">
          Designed to fit your needs & budget
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-3 gap-6  mx-auto pt-10 md:px-0 px-2">
          {images.map((content, i) => (
            <ImageCard key={i} content={content} />
          ))}
        </div>

        <div className="flex justify-center items-center py-10">
          <Link to="/contact-us">
            <Button btnName="Learn More" />
          </Link>
        </div>
      </div>
    </section>
  );
}
