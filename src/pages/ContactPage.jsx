// import React from "react";
import ContactForm from "../components/ContactForm";
import PageBanner from "../components/PageBanner";

import contactImage from "../assets/images/pantry/Pantry_square_3.webp";
import ServicesSection from "../components/ServicesSection";
import SEO from "../components/SEO";

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Original Closets",
    url: "https://original-closets.netlify.app/contact-us",
    logo: "https://original-closets.netlify.app/svgLogo2.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-5555",
      contactType: "customer service",
    },
  };

  return (
    <>
      <SEO
        title="Contact Us - Get a Free Consultation - Original Closets"
        description="Contact us today to schedule a free consultation for your custom closets."
        keywords="contact, custom closets consultation, closet design"
        image="https://original-closets.netlify.app/images/pantry/Pantry_square_3.webp"
        url="https://original-closets.netlify.app/contact-us"
        structuredData={structuredData}
      />
      <PageBanner image={contactImage} title="Contact" />
      <div className=" pt-10  text-primary ">
        <p className="content-container text-start">
          We are available to answer all your questions, please fill the form
          below and we will get back to you as soon as possible.
        </p>
        <ContactForm />
        <p>
          Need a faster answer? Give us a call and you can speak to someone from
          our team right away
        </p>
        <h1>
          <a href="tel:+1111111111" className="hover:text-text-hover">
            (111) 111-1111
          </a>
        </h1>
      </div>
      {/*Todo embed map location */}
      <div className=" mt-10">
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Business Location"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977211375!2d-79.54286779713875!3d43.71837095824505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1740394210624!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* services section */}
      <ServicesSection />
    </>
  );
}
