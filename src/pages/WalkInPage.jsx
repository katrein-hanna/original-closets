import walkInImage from "../assets/images/closets/walkIn/Walkin_square_3.webp";
import image1 from "../assets/images/closets/feature-images/pullout.webp";
import image2 from "../assets/images/closets/feature-images/finishes.webp";
import image3 from "../assets/images/closets/feature-images/knobs.webp";

import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";
import ImageCard from "../components/ImageCard";
import GallerySection from "../components/GallerySection";
import PromoBanner from "../components/PromoBanner";

const features = [
  {
    title: "Accessories",
    description:
      "Customize your closet with accessories like pant racks, retractable valet rods, jewelry drawer inserts and more to maximize the space and stay organized.",
    bgImg: image1,
  },
  {
    title: "Finishes",
    description:
      "Make your new closet unique by choosing between a variety of colour, drawer fronts, pulls, knobs, handles and more that meet your design taste and budget.",
    bgImg: image2,
  },
  {
    title: "Decorative Hardware",
    description:
      "Select from a wide variety of knobs, pulls, hooks and more to add the unique finishing touch to your custom closet.",
    bgImg: image3,
  },
];
export default function WalkInPage() {
  return (
    <>
      <PageBanner image={walkInImage} title="Walk-In closets" />
      <PageContent
        title="Luxurious feeling everyday"
        description="Custom designed Walk-in closet is definitely going to add a luxurious and unique feeling every time you walk into it to get dressed or just to look how beautiful your own dressing room is. Transform any spare space to a walk-in closet with custom design features that will organize the space and beautifully display your unique collection of clothes, shoes, purses and more."
      />
      <PageContent title="Features" description="" />
      <div className="content-container grid md:grid-cols-3 grid-cols-1 gap-6 mx-auto">
        {features.map((content, i) => (
          <ImageCard key={i} content={content} />
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        <button className="uppercase py-3 px-8 rounded-2xl border-2 border-text-hover text-secondary bg-text-hover font-bold transition-all hover:bg-secondary hover:text-text-hover  duration-300">
          Learn More
        </button>
      </div>

      <PromoBanner />
      <GallerySection service="Walk-in" />
    </>
  );
}
