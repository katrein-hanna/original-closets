import reachInImage from "../assets/images/closets/reachIn/Reachin_square_2.webp";
import GallerySection from "../components/GallerySection";
import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";
import SideImageCard from "../components/SideImageCard";
import PromoBanner from "../components/PromoBanner";

const cardcontent = {
  image: reachInImage,
  title1: "Customizable",
  des1: "Choose from framed or frameless flat panels, mirror panels or glass panels.",
  title2: "Colourful",
  des2: "You can choose the colour of your panels even if they were mirrored.",
};
export default function ReachInPage() {
  return (
    <>
      <PageBanner image={reachInImage} title="Reach-In closets" />
      <PageContent
        title="You deserve more than a wire shelf and a rod!"
        description="Most houses and condos come with a basic reach-in closet that has only one hanging rod and a shelf on top of it. To some, this may be enough, to others, this is not. Custom reach-in closet will maximize the space so you can store more and be organized by adding more shelves, drawers, double hanging rods and more."
      />
      <PageContent
        title="Sliding Doors Closets"
        description="When space is limited, sliding doors are the best option for reach-in closets. They virtually take no space from the room or the closet."
      />
      <div className="content-container ">
        <SideImageCard content={cardcontent} />
      </div>
      <PromoBanner />
      <GallerySection service="Reach-in" />
    </>
  );
}
