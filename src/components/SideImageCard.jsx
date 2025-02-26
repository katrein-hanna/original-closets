/* eslint-disable react/prop-types */
// import React from "react";

export default function SideImageCard({ content }) {
  return (
    <div className="md:flex">
      <div className="md:w-1/2 relative overflow-hidden cursor-pointer ">
        <img
          className="w-full lg:h-90 md:h-60 h-50 object-cover transition-transform duration-300 hover:scale-110"
          src={content.image}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-start items-start md:pl-10 md:w-1/2 leading-normal  md:px-0 px-2 text-primary">
        <h2 className="lg:pt-4 md:pt-0 pt-5">{content.title1}</h2>
        <p className="text-start lg:pt-8 pt-4">{content.des1}</p>
        <h2 className="lg:pt-8 pt-4">{content.title2}</h2>
        <p className="text-start lg:pt-8 pt-4">{content.des2}</p>
      </div>
    </div>
  );
}
