// import React from "react";
import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";

import garageImage from "../assets/images/garage/garage_cabbinets.jpg";

import GallerySection from "../components/GallerySection";
import PromoBanner from "../components/PromoBanner";
import SEO from "../components/SEO";
export default function GaragesPage() {
  //
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Garage Storage Solutions",
    description:
      "Transform your garage into a well-organized space with our custom solutions, including built-in cabinets, shelving, and specialized storage systems.",
    provider: {
      "@type": "Organization",
      name: "Original Closets",
      url: "https://original-closets.netlify.app/",
    },
    areaServed: {
      "@type": "Place",
      name: "Canada - Toronto",
    },
    serviceType: "Garage Cabinets Design",
    image:
      "https://original-closets.netlify.app/images/garage/garage_cabinets.jpg",
    url: "https://original-closets.netlify.app/garages",
  };

  return (
    <>
      <SEO
        title="Custom Garage Cabinets Solutions - Original Closets"
        description="Maximize your garage space with our custom storage solutions. Featuring built-in cabinets, shelves, and organizational tools for a clean and functional garage."
        keywords="garage storage, custom garage solutions, built-in garage cabinets, garage shelving, garage organization, garage storage systems, home garage design"
        image="https://original-closets.netlify.app/images/garage/garage_cabbinets.jpg"
        url="https://original-closets.netlify.app/garages"
        favicon="/favicon.ico"
        structuredData={structuredData}
      />
      <PageBanner image={garageImage} title="Garages" />
      <PageContent
        title="A SPACE FOR MORE THAN CARS"
        description="Expand the use and purpose of your garage by adding custom storage and organization solution. Add cabinets, shelves, workbenches and more. If you need space to store extra items or tools, or if you need a workspace for your hobby or business then you need to consider using your garage for other than parking your car."
      />
      <PageContent
        title=""
        description="Our Original Closets team will be glad to provide you with unique ideas to turn your garage into a clean, well-organized space."
      />
      <PageContent
        title=""
        description="Create a space for your tools, DIY project, gardening products and much more. This is possible thanks to the big variety of products you can add to your garage such as:"
      />
      <div className="content-container -mt-10">
        <ol className="text-primary list-disc list-inside text-start py-2 ml-10 lg:text-xl md:text-lg">
          <li>Cabinets</li>
          <li>Shelving</li>
          <li>Countertop</li>
          <li>Drawers</li>
          <li>Pegboard</li>
          <li>Slatwall</li>
          <li>Pull-out Trays</li>
          <li>Wire Baskets</li>
          <li>and more</li>
        </ol>
      </div>

      <PromoBanner />
      <GallerySection service="Garages" />
    </>
  );
}
