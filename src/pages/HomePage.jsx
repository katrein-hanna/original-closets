import HeroSection from "../components/HeroSection";
import AboutusSection from "../components/AboutusSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import DisplayWorkSection from "../components/DisplayWorkSection";
import ContactForm from "../components/ContactForm";
import TestimonialsSection from "../components/TestimonialsSection";
import PromoBanner from "../components/PromoBanner";
import SEO from "../components/SEO";
export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Original Closets",
    url: "https://original-closets.netlify.app/",
    description: "High-quality custom closet designs tailored to your needs.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://original-closets.netlify.app/search?q={query}",
      "query-input": "required name=query",
    },
  };
  return (
    <>
      <SEO
        title="Original Closets - Custom Closets & Storage Solutions "
        description="Discover beautifully designed custom closets for every room in your home."
        keywords="custom closets, storage solutions, home organization"
        image="https://original-closets.netlify.app/images/home-page.jpg"
        url="https://original-closets.netlify.app/"
        favicon="/favicons/home.ico"
        structuredData={structuredData}
      />
      <HeroSection />
      <AboutusSection />
      <PromoBanner />
      <ServicesSection />
      <ProcessSection />
      <DisplayWorkSection />
      <TestimonialsSection />
      <section className="main-container py-10 bg-secondary">
        <div className="content-container mx-auto text-center">
          <h1>Testimonials</h1>
          {/* Elfsight Google Reviews | Untitled Google Reviews   */}
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            className="elfsight-app-16c351b3-1633-4fe4-bf9e-3b61710b0077"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
      {/* Contact Section */}
      <div className="pt-10 ">
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </>
  );
}
