/* eslint-disable react/prop-types */

export default function PageBanner({ title, image }) {
  return (
    <section
      className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:bg-fixed flex justify-center items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-10 bg-light-gray">
        <h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-semibold uppercase"
          style={{
            textShadow: "3px 3px 0 #1E3A5F",
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
