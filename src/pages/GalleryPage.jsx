import PageBanner from "../components/PageBanner";
import closetImage from "../assets/images/closets/walkIn/Walkin_square_1.webp";
import GallerySection from "../components/GallerySection";

export default function GalleryPage() {
  return (
    <div>
      <PageBanner image={closetImage} title="Gallery" />
      <GallerySection service="all" />
    </div>
  );
}
