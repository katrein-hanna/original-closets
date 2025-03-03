// import React from "react";
import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";

import entryImage from "../assets/images/entryStorage/entry_1.jpg";
import GallerySection from "../components/GallerySection";
import PromoBanner from "../components/PromoBanner";
import SEO from "../components/SEO";

export default function EntryStoragePage() {
  //
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Entry Storage Solutions",
    description:
      "Create a functional and stylish entryway with our custom-built storage solutions, including shoe racks, coat organizers, and built-in cabinets.",
    provider: {
      "@type": "Organization",
      name: "Original Closets",
      url: "https://original-closets.netlify.app/",
    },
    areaServed: {
      "@type": "Place",
      name: "Canada - Toronto",
    },
    serviceType: "Custom Entry Storage Design",
    image:
      "https://original-closets.netlify.app/images/entryStorage/entry_1.jpg",
    url: "https://original-closets.netlify.app/living-areas/entryway-storage",
  };
  return (
    <>
      <SEO
        title="Entry Storage Solutions - Original Closets"
        description="Keep your entryway tidy and stylish with our custom entry storage solutions. Designed for maximum organization with built-in cabinets, shoe racks, and coat storage."
        keywords="entry storage, entryway organization, custom closets, shoe racks, coat storage, hallway storage, built-in entry cabinets, mudroom solutions"
        image="https://original-closets.netlify.app/images/entryStorage/entry_1.jpg"
        url="https://original-closets.netlify.app/living-areas/entryway-storage"
        favicon="/favicon.ico"
        structuredData={structuredData}
      />
      <PageBanner image={entryImage} title="Entry Storage" />
      <PageContent
        title=""
        description="Either you are coming or going you will need to pass by this area of your home. It can become cluttered quickly with all the stuffs like shoes, jackets or even sports accessories. We can make your entryway or mudroom more functional to help you stay organized and most importantly make it reflect the rest of your home."
      />
      <PageContent
        title=""
        description="You can add drawers, closets, shelving, cubbies, hooks, benches and much
        more."
      />

      <PromoBanner />
      <GallerySection service="Entry Storage" />
    </>
  );
}
