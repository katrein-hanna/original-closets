import { FaCanadianMapleLeaf, FaRegThumbsUp } from "react-icons/fa";
import IconCard from "./IconCard";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { LuCalendarCheck2 } from "react-icons/lu";

export default function AboutusCards() {
  const cardsContent = [
    {
      text: "made in canada",
      icon: <FaCanadianMapleLeaf className="md:h-22 md:w-22 h-15 w-15" />,
    },
    {
      text: "100% Custom design",
      icon: (
        <HiOutlineWrenchScrewdriver className="md:h-22 md:w-22 h-15 w-15" />
      ),
    },
    {
      text: "One-day installation",
      icon: <LuCalendarCheck2 className="md:h-22 md:w-22 h-15 w-15" />,
    },
    {
      text: "Satisfaction guaranteed",
      icon: <FaRegThumbsUp className="md:h-22 md:w-22 h-15 w-15" />,
    },
  ];
  return (
    <section className="content-container">
      <div className=" grid grid-cols-2 lg:grid-cols-4  mx-auto lg:pt-10">
        {cardsContent.map((content, i) => (
          <IconCard key={i} content={content} />
        ))}
      </div>
    </section>
  );
}
