// import React from 'react'
import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";
import PromoBanner from "../components/PromoBanner";
import FeatureCard from "../components/FeatureCard";
import GallerySection from "../components/GallerySection";

import livingAreasImage from "../assets/images/office/Office_square_4.webp";
import image1 from "../assets/images/closets/walkIn/Walkin_square_4.webp";
import image2 from "../assets/images/pantry/Pantry_square_2.webp";
import image3 from "../assets/images/laundry/Laundryu_square_1.webp";
import image4 from "../assets/images/office/Office_square_3.webp";
import image5 from "../assets/images/garage/Garage_suqare_4.webp";
import image6 from "../assets/images/wallbed/Murhpy_square_5.webp";

const livingAreaContent = [
  { text: "Closets", bgImg: image1 },
  { text: "Kitchen Pantry", bgImg: image2 },
  { text: "Laundry Rooms", bgImg: image3 },
  { text: "Home Office", bgImg: image4 },
  { text: "Garage Cabinets", bgImg: image5 },
  { text: "Wall Beds", bgImg: image6 },
];
export default function LivingAreasPage() {
  return (
    <>
      <PageBanner image={livingAreasImage} title="Living Areas" />
      <PageContent
        title=""
        description="We offer free consultation to determine the best closet system design, finish and colour for your room. Next, we’ll carefully manufacture your custom closets at our fully-equipped facility in Scarborough, Ontario. Then we’ll inspect every piece to ensure a proper fit and meticulously install your new closets and closet organizers for you to enjoy for years to come. If you live in the Greater Toronto Area, contact us today to learn how we can help maximize your closet space. We think you’ll be pleasantly surprised by our quality, attention to detail and affordable price of our custom closet systems."
      />
      <div className="content-container grid lg:grid-cols-3 grid-cols-2 md:gap-6 gap-4 mt-10">
        {livingAreaContent.map((content, i) => (
          <FeatureCard key={i} content={content} />
        ))}
      </div>
      <PromoBanner />

      <GallerySection service="LivingAreas" />
    </>
  );
}
