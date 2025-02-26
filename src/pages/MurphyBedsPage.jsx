// import React from "react";
import GallerySection from "../components/GallerySection";
import PageContent from "../components/PageContent";
import PageBanner from "../components/PageBanner";
import PromoBanner from "../components/PromoBanner";

import murphyImage from "../assets/images/wallbed/Murhpy_square_5.webp";
export default function MurphyBedsPage() {
  return (
    <>
      <PageBanner image={murphyImage} title="Murphy Beds" />
      <PageContent
        title="Hidden & Multifunctional"
        description="Not all homes have space for a dedicated guest room, that is where wall beds (also known as Murphy beds) are the perfect solution. Their simple design let them blend and be hidden when not in use. Custom built-in cabinetry can also be added to maximize the storage space. Pull the wall bed down and you have a guest room ready, pull the bed up and the space can now be used as a home office or a library or even a dining room."
      />
      <PageContent
        title=""
        description="We offer a variety of designs and sizes such as single, double and even queen size wall beds to best fit your space and needs."
      />
      <PageContent
        title=""
        description="Custom built-in cabinetry on both sides of the best and above it maximizes the storage space, so you can store blankets, pillows, sheets and more. Choose from wood or glass adjustable shelves, the colour to match your space decor and the hardware such as the knobs,
          pulls and handles."
      />

      <PromoBanner />
      <GallerySection service="Murphy Beds" />
    </>
  );
}
