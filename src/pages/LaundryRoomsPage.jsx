import GallerySection from "../components/GallerySection";
import PageContent from "../components/PageContent";
import PageBanner from "../components/PageBanner";

import laundryImage from "../assets/images/laundry/Laundry_2.jpg";
import PromoBanner from "../components/PromoBanner";
import SEO from "../components/SEO";

export default function LaundryRoomsPage() {
  //
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Laundry Room Solutions",
    description:
      "Maximize your laundry room's potential with our custom solutions, including built-in cabinets, drying racks, and smart storage options.",
    provider: {
      "@type": "Organization",
      name: "Original Closets",
      url: "https://original-closets.netlify.app/",
    },
    areaServed: {
      "@type": "Place",
      name: "Canada - Toronto",
    },
    serviceType: "Custom Laundry Room Design",
    image: "https://original-closets.netlify.app/images/laundry/Laundry.jpg",
    url: "https://original-closets.netlify.app/living-areas/laundry-rooms",
  };
  return (
    <>
      <SEO
        title="Custom Laundry Room Solutions - Original Closets"
        description="Transform your laundry room into an efficient and organized space with our custom laundry room solutions. Featuring built-in cabinets, drying racks, and ample storage."
        keywords="laundry room storage, custom laundry solutions, built-in laundry cabinets, drying racks, laundry room organization, home laundry room, laundry room design"
        image="https://original-closets.netlify.app/images/laundry/Laundry.jpg"
        url="https://original-closets.netlify.app/living-areas/laundry-rooms"
        favicon="/favicons/laundry.ico"
        structuredData={structuredData}
      />
      <PageBanner image={laundryImage} title="Laundry Rooms" />
      <PageContent
        title="Love doing laundry"
        description="Said no one ever! Until they had a custom designed and built laundry room. Custom laundry room cabinets and accessories can make you love doing laundry."
      />
      <PageContent
        title=""
        description="Imagine your laundry room with cabinets, countertop space, drawers, shelves, and other accessories that will make it beautiful and efficient. You can also add many feature like:"
      />
      <div className="content-container text-start -mt-10">
        <ol className="text-primary list-disc list-inside text-start py-2 ml-10 lg:text-xl md:text-lg">
          <li className="mb-2">Wall Mounted Ironing Board</li>
          <li className="mb-2">Glass/mirror cabinet doors</li>
          <li className="mb-2">Clothes folding space</li>
          <li className="mb-2">Foldable drying racks</li>
          <li className="mb-2">Pull-down Hanging Rod</li>
          <li className="mb-2">Ironing Board Drawer</li>
        </ol>
      </div>

      <PromoBanner />
      <GallerySection service="Laundry" />
    </>
  );
}
