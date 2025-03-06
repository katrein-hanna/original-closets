// import React from 'react'
import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";
import PromoBanner from "../components/PromoBanner";
import FeatureCard from "../components/FeatureCard";
import GallerySection from "../components/GallerySection";

import livingAreasImage from "../assets/images/entryStorage/livingArea.jpg";
import image1 from "../assets/images/office/Office_square_1.jpg";
import image2 from "../assets/images/entryStorage/entry_1.jpg";
import image3 from "../assets/images/wallbed/Murphy_square_2.jpg";
import image4 from "../assets/images/laundry/Laundry.jpg";
import image5 from "../assets/images/pantry/Pantry_square_3.webp";
import SEO from "../components/SEO";

const livingAreaContent = [
  { text: "Home Office", bgImg: image1, path: "living-areas/home-office" },
  {
    text: "Entryway Storage",
    bgImg: image2,
    path: "living-areas/entryway-storage",
  },
  { text: "Murphy Beds", bgImg: image3, path: "living-areas/murphy-beds" },
  { text: "Laundry Rooms", bgImg: image4, path: "living-areas/laundry-rooms" },
  {
    text: "Kitchen Pantry",
    bgImg: image5,
    path: "living-areas/kitchen-pantry",
  },
];
export default function LivingAreasPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Storage Solutions for Living Areas",
    description:
      "Enhance your living space with beautifully designed, custom storage solutions that blend seamlessly with your home decor.",
    provider: {
      "@type": "Organization",
      name: "Original Closets",
      url: "https://example.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Canada - Toronto",
    },
    serviceType: "Custom Storage Design",
    image:
      "https://original-closets.netlify.app/images/closets/living-area.jpg",
    url: "https://original-closets.netlify.app/living-areas",
  };

  return (
    <>
      <SEO
        title="Custom Storage for Living Areas - Original Closets"
        description="Upgrade your living areas with custom storage solutions that maximize space and style. Tailored to fit your home’s design and organization needs."
        keywords="custom living area storage, built-in shelves, wall units, entertainment center storage, home organization, closet systems"
        image="https://original-closets.netlify.app/images/closets/living-area.jpg"
        url="https://original-closets.netlify.app/living-areas"
        favicon="/favicons/sofa.ico"
        structuredData={structuredData}
      />
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
