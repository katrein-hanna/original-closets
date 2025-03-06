// import React from 'react'
import wardrobeImage from "../assets/images/closets/wardrobe/Wardrobe_square_1.jpg";
import image1 from "../assets/images/closets/feature-images/pullout.webp";
import image2 from "../assets/images/closets/feature-images/finishes.webp";
import image3 from "../assets/images/closets/feature-images/knobs.webp";
import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";
import PromoBanner from "../components/PromoBanner";
import ImageCard from "../components/ImageCard";
import GallerySection from "../components/GallerySection";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const features = [
  {
    title: "Accessories",
    description:
      "Customize your closet with accessories like pant racks, retractable valet rods, jewelry drawer inserts and more to maximize the space and stay organized.",
    bgImg: image1,
  },
  {
    title: "Finishes",
    description:
      "Make your new closet unique by choosing between a variety of colour, drawer fronts, pulls, knobs, handles and more that meet your design taste and budget.",
    bgImg: image2,
  },
  {
    title: "Decorative Hardware",
    description:
      "Select from a wide variety of knobs, pulls, hooks and more to add the unique finishing touch to your custom closet.",
    bgImg: image3,
  },
];
export default function WardrobePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Wardrobe Design",
    image:
      "https://original-closets.netlify.app/images/closets/wardrobe/wardrobe.jpg",
    description:
      "Elegant and functional wardrobes designed to fit your space and style.",
    brand: {
      "@type": "Brand",
      name: "Original Closets",
    },
  };

  return (
    <>
      <SEO
        title="Custom Wardrobes - Original Closets"
        description="Elegant and functional wardrobes designed to fit your space and style."
        keywords="Custom wardrobes,Built-in wardrobe,Modern wardrobe design,Closet organization,Stylish wardrobe solutions,Space-saving wardrobes,Luxury wardrobe designs,Wardrobe storage solutions,Fitted wardrobes,Sliding door wardrobes, storage ideas"
        image="https://original-closets.netlify.app/images/closets/wardrobe/wardrobe.jpg"
        url="https://original-closets.netlify.app/closets/wardrobe"
        favicon="/favicons/wardrobe.ico"
        structuredData={structuredData}
      />
      <PageBanner image={wardrobeImage} title="Wardrobe closets" />
      <PageContent
        title="The anywhere storage solution"
        description="Wardrobe closets can be installed anywhere and can be of any size. They can include hanging space, drawers and adjustable shelves and are ideal to increase the storage space to any room in your house."
      />
      <PageContent
        title="Features"
        description=""
        uppercaseDesc="Small details for the wow impact"
      />
      <div className="content-container grid md:grid-cols-3 grid-cols-1 gap-6 mx-auto">
        {features.map((content, i) => (
          <ImageCard key={i} content={content} />
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        <Link to="/contact-us">
          <Button btnName="Learn More" />
        </Link>
      </div>
      <PromoBanner />
      <GallerySection service="Wardrobe" />
    </>
  );
}
