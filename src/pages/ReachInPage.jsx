//

import reachInImage from "../assets/images/closets/reachIn/Reachin_square_4.jpg";
import reachInImage2 from "../assets/images/closets/reachIn/Reachin_square_1.webp";
import GallerySection from "../components/GallerySection";
import PageBanner from "../components/PageBanner";
import PageContent from "../components/PageContent";
import SideImageCard from "../components/SideImageCard";
import PromoBanner from "../components/PromoBanner";
import SEO from "../components/SEO";

const cardcontent = {
  image: reachInImage2,
  title1: "Customizable",
  des1: "Choose from framed or frameless flat panels, mirror panels or glass panels.",
  title2: "Colourful",
  des2: "You can choose the colour of your panels even if they were mirrored.",
};
export default function ReachInPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reach-In Closets",
    description: "Compact and efficient closet designs for smaller spaces.",
    image:
      "https://original-closets.netlify.app/images/closets/reachIn/Reachin_square.jpg",
    brand: { "@type": "Brand", name: "Original Closets" },
  };

  return (
    <>
      <SEO
        title="Reach-In Closets - Original Closets"
        description="Maximize small spaces with custom-designed reach-in closets."
        keywords="reach-in closets, small closet solutions, storage ideas"
        image="https://original-closets.netlify.app/images/closets/reachIn/Reachin_square.jpg"
        url="https://original-closets.netlify.app/closets/reachin"
        favicon="/favicons/reachin.ico"
        structuredData={structuredData}
      />
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
