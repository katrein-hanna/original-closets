import { FaCog, FaComments, FaPalette, FaTools } from "react-icons/fa";

const processContent = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We will listen & discuss your needs to design your custom storage solution.",
    icon: (
      <FaComments className="text-4xl text-primary group-hover:text-text-hover" />
    ),
  },
  {
    id: 2,
    title: "Design",
    description:
      "This is when you get to choose the color, finishes, and features.",
    icon: (
      <FaPalette className="text-4xl text-primary group-hover:text-text-hover" />
    ),
  },
  {
    id: 3,
    title: "Manufacture",
    description:
      "We will make your design a reality by cutting and preparing the pieces at our local GTA facility.",
    icon: (
      <FaCog className="text-4xl text-primary group-hover:text-text-hover" />
    ),
  },
  {
    id: 4,
    title: "Install",
    description:
      "Our team will come to your home and professionally install your new custom organization solution.",
    icon: (
      <FaTools className="text-4xl text-primary group-hover:text-text-hover" />
    ),
  },
];
export default function ProcessSection() {
  return (
    <section className="main-container py-10 bg-light-gray text-primary ">
      <div className="content-container text-center">
        <h1>Our Process</h1>
        <p className="uppercase  font-medium text-primary/70 mt-2">
          We follow a simple & effective four-step process.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-5 gap-4 md:px-0 px-2 mt-10 ">
          {processContent.map((step) => (
            <div
              key={step.id}
              className="bg-secondary group shadow-md shadow-primary/50  rounded-2xl md:px-6 px-2 py-4 text-center hover:shadow-lg transition-transform duration-200 hover:translate-y-[-10px]"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h2>{step.title}</h2>
              <p className="text-primary/70 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
