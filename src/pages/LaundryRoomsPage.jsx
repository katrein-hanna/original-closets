import GallerySection from "../components/GallerySection";
import PageContent from "../components/PageContent";
import PageBanner from "../components/PageBanner";

import laundryImage from "../assets/images/laundry/Laundryu_square_2.webp";
import PromoBanner from "../components/PromoBanner";

export default function LaundryRoomsPage() {
  return (
    <>
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
