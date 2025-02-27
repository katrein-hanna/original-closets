import PageBanner from "../components/PageBanner";
import closetImage from "../assets/images/entryStorage/entry_2.jpg";
import GallerySection from "../components/GallerySection";

export default function GalleryPage() {
  return (
    <div>
      <PageBanner image={closetImage} title="Gallery" />
      <GallerySection service="all" />
    </div>
  );
}
