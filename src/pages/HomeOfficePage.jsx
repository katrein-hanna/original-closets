// import React from "react";
import GallerySection from "../components/GallerySection";

import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";
import ImageCard from "../components/ImageCard";

import officeImage from "../assets/images/office/Office_square_6.webp";
import image1 from "../assets/images/office/Office_square_1.webp";
import image2 from "../assets/images/office/Office_square_7.webp";
import image3 from "../assets/images/office/Office_square_3.webp";
import PromoBanner from "../components/PromoBanner";

const features = [
  {
    title: "Bookshelves",
    description:
      "Practical and decorative, bookshelves offer open display space for more than just books. Custom-designed to your style, open shelf cabinetry takes advantage of vertical space from any wall.    ",
    bgImg: image1,
  },
  {
    title: "Cabinets",
    description:
      "Custom cabinets provide excellent file space for all your paper work and office supplies. With both drawers with doors you have ample storage to keep work stuff tidy and out of the way when you don’t need it.",
    bgImg: image2,
  },
  {
    title: "Desk Tops",
    description:
      "Your work surface has to be the right combination of material, height and size to handle everything you can throw on it. With customization, you get to choose exactly what you want to work on.",
    bgImg: image3,
  },
];
export default function HomeOfficePage() {
  return (
    <>
      <PageBanner image={officeImage} title="Home Office" />
      <PageContent
        title="WORKSPACE THAT INSPIRES PRODUCTIVITY"
        description="Working at home? Let us show you how we can create a new home office, or turn your existing home office, into an attractive and functional space you’ll love. You can count on our team to design, manufacture and install a custom home office that will inspire you day after day. If you live in the Greater Toronto Area, contact us today to set up a free, no-obligation consultation. We’re sure you’ll be pleasantly surprised by our top-quality craftsmanship, attention to detail and affordable price."
      />
      <div className="content-container grid md:grid-cols-3 grid-cols-1 gap-6 mx-auto">
        {features.map((content, i) => (
          <ImageCard key={i} content={content} />
        ))}
      </div>
      <PromoBanner />
      <GallerySection service="Home Office" />
    </>
  );
}
