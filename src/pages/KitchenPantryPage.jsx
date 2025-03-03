import GallerySection from "../components/GallerySection";
import PageBanner from "../components/PageBanner";
import PromoBanner from "../components/PromoBanner";

import pantryImage from "../assets/images/pantry/Pantry_square.jpg";
import SEO from "../components/SEO";

export default function KitchenPantryPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Kitchen Pantry Design",
    description:
      "Transform your kitchen with a custom pantry solution tailored to maximize space and enhance organization.",
    provider: {
      "@type": "Organization",
      name: "Original Closets",
      url: "https://original-closets.netlify.app/",
    },
    areaServed: {
      "@type": "Place",
      name: "Canada - Toronto",
    },
    serviceType: "Custom Closet Design",
    image:
      "https://original-closets.netlify.app/images/pantry/Pantry_square.jpg",
    url: "https://original-closets.netlify.app/living-areas/kitchen-pantry",
  };
  return (
    <>
      <SEO
        title="Kitchen Pantries - Original Closets"
        description="Maximize your kitchen space with our custom pantry storage solutions designed for efficiency and style."
        keywords="custom kitchen pantry, pantry storage solutions, modern pantry design, space-saving pantry, kitchen pantry cabinets, organized pantry shelving, walk-in pantry ideas, built-in pantry storage, functional pantry design, small pantry organization"
        image="https://original-closets.netlify.app/images/pantry/Pantry_square.jpg"
        url="https://original-closets.netlify.app/living-areas/kitchen-pantry"
        favicon="/favicon.ico"
        structuredData={structuredData}
      />
      <PageBanner image={pantryImage} title="Kitchen Pantry" />

      <div className="content-container  p-10">
        <p className="text-primary text-start">
          We design custom kitchen pantries that are both attractive and
          functional to keep your kitchen organized. And, we pay particular
          attention to ensure that your most frequently used supplies are within
          easy reach.
        </p>
        <br />
        <p className="text-primary text-start">
          Custom design kitchen pantry will not only maximize the storage space
          in your kitchen, but also make finding things more efficient, easily
          see when some items are running low, and fun to design.
        </p>
        <br />

        <p className="text-primary text-start">
          You can add adjustable shelving, drawers, wire baskets, racks, and
          more. Need space for kitchen accessories and supplies? Let our team of
          craftsmen design, build and install a custom kitchen pantry that meets
          all your needs. We’re sure you’ll be pleasantly surprised by our
          top-quality craftsmanship, attention to detail and affordable price.
        </p>
      </div>

      <PromoBanner />
      <GallerySection service="Pantry" />
    </>
  );
}
