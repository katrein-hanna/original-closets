import { FaCanadianMapleLeaf, FaRegThumbsUp } from "react-icons/fa";
import IconCard from "./IconCard";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { LuCalendarCheck2 } from "react-icons/lu";
import Container from "./Container";

export default function AboutusCards() {
  const cardsContent = [
    { text: "made in canada", icon: <FaCanadianMapleLeaf size={90} /> },
    {
      text: "100% Custom design",
      icon: <HiOutlineWrenchScrewdriver size={90} />,
    },
    { text: "One-day installation", icon: <LuCalendarCheck2 size={90} /> },
    { text: "Satisfaction guaranteed", icon: <FaRegThumbsUp size={90} /> },
  ];
  return (
    <div className=" w-full  ">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto lg:pt-10">
          {cardsContent.map((content, i) => (
            <IconCard key={i} content={content} />
          ))}
        </div>
      </Container>
    </div>
  );
}
