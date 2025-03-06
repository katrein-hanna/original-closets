// import React from "react";
import GallerySection from "../components/GallerySection";

import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";
import ImageCard from "../components/ImageCard";

import officeImage from "../assets/images/office/Office_square_1.jpg";
import image1 from "../assets/images/office/book_shelfs.jpg";
import image2 from "../assets/images/office/Office_square.jpg";
import image3 from "../assets/images/office/Office_square_3.webp";
import PromoBanner from "../components/PromoBanner";
import SEO from "../components/SEO";

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
  //
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Home Office Solutions",
    description:
      "Design your ideal home office with our custom-built storage solutions, including desks, shelving, and organizational features that enhance your productivity.",
    provider: {
      "@type": "Organization",
      name: "Original Closets",
      url: "https://original-closets.netlify.app/",
    },
    areaServed: {
      "@type": "Place",
      name: "Canada - Toronto",
    },
    serviceType: "Custom Home Office Design",
    image:
      "https://original-closets.netlify.app/images/office/Office_square_3.webp",
    url: "https://original-closets.netlify.app/living-areas/home-office",
  };
  return (
    <>
      <SEO
        title="Custom Home Office Solutions - Original Closets"
        description="Create a productive and organized workspace with our custom home office solutions. Featuring built-in desks, shelves, and storage options for all your office needs."
        keywords="home office storage, custom office design, built-in desks, office shelving, home office organization, workspace design, office storage solutions"
        image="https://original-closets.netlify.app/images/office/Office_square_3.webp"
        url="https://original-closets.netlify.app/living-areas/home-office"
        favicon="/favicons/office.ico"
        structuredData={structuredData}
      />
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
