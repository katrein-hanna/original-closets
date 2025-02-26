import HeroSection from "../components/HeroSection";
import AboutusSection from "../components/AboutusSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import DisplayWorkSection from "../components/DisplayWorkSection";
import ContactForm from "../components/ContactForm";
import TestimonialsSection from "../components/TestimonialsSection";
import PromoBanner from "../components/PromoBanner";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutusSection />
      <PromoBanner />
      <ServicesSection />
      <ProcessSection />
      <DisplayWorkSection />
      <TestimonialsSection />
      {/* Contact Section */}
      <div className="pt-10 ">
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </>
  );
}
