// import React from "react";
import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";

import entryImage from "../assets/images/pantry/Pantry_square_5.webp";
import GallerySection from "../components/GallerySection";
import PromoBanner from "../components/PromoBanner";

export default function EntryStoragePage() {
  return (
    <>
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
