/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function FeatureCard({ content }) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md shadow-primary/50  cursor-pointer">
      <Link to={content.path}>
        <img
          src={content.bgImg}
          alt={content.text}
          className="w-full lg:h-80 md:h-60 h-50 object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-light-gray flex items-center justify-center">
          <h2 className="text-secondary bg-primary/90 p-2 rounded-2xl">
            {content.text}
          </h2>
        </div>
      </Link>
    </div>
  );
}
