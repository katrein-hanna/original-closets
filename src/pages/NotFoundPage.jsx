// import React from "react";

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  //
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "404 Page",
    description: "This page could not be found.",
  };
  return (
    <>
      <SEO
        title="404 - Page Not Found - Original Closets"
        description="The page you are looking for does not exist."
        keywords="404 error, page not found"
        image="https://original-closets.netlify.app/not-found.svg"
        url="https://original-closets.netlify.app/*"
        favicon="/favicon.ico"
        structuredData={structuredData}
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-light-gray text-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <h2 className="text-2xl text-gray-700 mt-4">Oops! Page Not Found</h2>
        <p className="text-gray-500 mt-2">
          {`The page you're looking for doesn't exist or has been moved.`}
        </p>

        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-text-hover transition"
        >
          Go Back Home
        </Link>

        <img
          src="/not-found.svg"
          alt="Lost Astronaut"
          className="mt-8 w-80 slow-bounce"
        />
      </div>
    </>
  );
}
