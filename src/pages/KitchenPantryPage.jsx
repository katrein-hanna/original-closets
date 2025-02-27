import GallerySection from "../components/GallerySection";
import PageBanner from "../components/PageBanner";
import PromoBanner from "../components/PromoBanner";

import pantryImage from "../assets/images/pantry/Pantry_square.jpg";

export default function KitchenPantryPage() {
  return (
    <>
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
