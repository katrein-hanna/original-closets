/* eslint-disable react/prop-types */

export default function ImageCard({ content }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md shadow-primary/50  transition-transform duration-300 ">
      {/* Background image layer */}
      <img
        src={content.bgImg}
        alt={content.title}
        className="w-full lg:h-[250px] md:h-[200px] h-[250px] object-cover rounded-t-2xl"
        loading="lazy"
      />
      {/* Overlay effect */}
      {/* <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-40 transition duration-300"></div> */}

      {/* Content */}
      <div className="relative lg:p-5  md:py-5 md:px-3 p-5  text-left bg-secondary rounded-b-2xl">
        <h3 className=" uppercase lg:text-xl  text-lg font-semibold text-primary">
          {content.title}
        </h3>
        <div className="w-30 h-1 mt-2 bg-primary rounded-full transition-transform duration-200 -left-2 -right-2 scale-x-20 origin-left group-hover:scale-x-50 ease-in-out"></div>
        <p className="mt-3 text-start text-primary/70">{content.description}</p>
      </div>
    </div>
  );
}
