import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";
import ImageCard from "../components/ImageCard";
import FeatureCard from "../components/FeatureCard";
import GallerySection from "../components/GallerySection";

import closetImage from "../assets/images/closets/closet.jpg";

import image1 from "../assets/images/closets/feature-images/pullout.webp";
import image2 from "../assets/images/closets/feature-images/finishes.webp";
import image3 from "../assets/images/closets/feature-images/knobs.webp";
import featureImage1 from "../assets/images/closets/walkIn/Walkin_square_4.webp";
import featureImage2 from "../assets/images/closets/reachIn/Reachin_square_1.webp";
import featureImage3 from "../assets/images/closets/wardrobe/Wardrobe_square_2.jpg";

import PromoBanner from "../components/PromoBanner";
import { Link } from "react-router-dom";
import Button from "../components/Button";
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

const closetTypes = [
  { text: "Walk-In", bgImg: featureImage1, path: "closets/walkin" },
  { text: "Reach-In", bgImg: featureImage2, path: "closets/reachin" },
  { text: "Wardrobe", bgImg: featureImage3, path: "closets/wardrobe" },
];

export default function ClosetsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Closets",
    description: "High-quality custom closet designs tailored to your needs.",
    image: "https://original-closets.netlify.app/images/closets/closet.jpg",
    brand: { "@type": "Brand", name: "Original Closets" },
    url: "https://original-closets.netlify.app/closets",
  };

  return (
    <>
      <SEO
        title="Custom Closets - Original Closets "
        description="Discover custom closet designs that maximize space and style."
        keywords="custom closets, storage solutions, home organization"
        image="https://original-closets.netlify.app/images/closets/closet.jpg"
        url="https://original-closets.netlify.app/closets"
        favicon="/favicons/closet.ico"
        structuredData={structuredData}
      />
      <PageBanner image={closetImage} title="closets" />
      <PageContent
        title="TRANSFORM YOUR BASIC BEDROOM CLOSET"
        description="We take pride in our work that is why we always deliver the highest quality to ensure we meet all your needs and exceed your expectations. During our free consultation session we collect all the important details to you to come up with a functional design that will maximize the space utilization while being stylish and fit seamlessly within your room décor."
      />
      <div className="content-container grid lg:grid-cols-3 grid-cols-2 md:gap-6 gap-4 mt-10">
        {closetTypes.map((content, i) => (
          <FeatureCard key={i} content={content} />
        ))}
      </div>
      <PromoBanner />
      <PageContent title="Features" description="" />
      {/* images cards */}
      <div className="content-container grid md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-3 gap-6 mx-auto md:px-0 px-2">
        {features.map((content, i) => (
          <ImageCard key={i} content={content} />
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        <Link to="/contact-us">
          <Button btnName="Learn More" />
        </Link>
      </div>
      <GallerySection service="closets" />
    </>
  );
}
