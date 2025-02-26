import image1 from "../assets/images/closets/walkIn/Walkin_square_4.webp";
import image2 from "../assets/images/pantry/Pantry_square_2.webp";
import image3 from "../assets/images/laundry/Laundryu_square_1.webp";
import image4 from "../assets/images/office/Office_square_3.webp";
import image5 from "../assets/images/garage/Garage_suqare_4.webp";
import image6 from "../assets/images/wallbed/Murhpy_square_5.webp";

import FeatureCard from "./FeatureCard";

export default function ServicesSection() {
  const servicesContent = [
    { text: "Closets", bgImg: image1 },
    { text: "Kitchen Pantry", bgImg: image2 },
    { text: "Laundry Rooms", bgImg: image3 },
    { text: "Home Office", bgImg: image4 },
    { text: "Garage Cabinets", bgImg: image5 },
    { text: "Murphy Beds", bgImg: image6 },
  ];

  return (
    <section className="main-container py-16 bg-secondary">
      <div className="content-container mx-auto text-center">
        <h1>Our Services</h1>
        <p className="uppercase text-primary/70 mt-2">
          Explore our range of solutions for a well-organized home.
        </p>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 md:px-0 px-2 mt-10">
          {servicesContent.map((service, i) => (
            <FeatureCard key={i} content={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
