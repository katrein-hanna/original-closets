import AboutusCards from "./AboutusCards";
import PageContent from "./PageContent";

export default function AboutusSection() {
  return (
    <section className="main-container">
      <PageContent
        title="Why Original Closets"
        description="Original Closets is a specialized carpentry company in Toronto with a
          focus on custom storage solutions for every room of your home or
          garage. We have more than 12 years experience in designing,
          manufacturing, and installing custom cabinets in your home or office
          at affordable prices. Our professionals will be pleased to offer
          creative ideas and services to assist you in designing your dream
          rooms! Give us a try, we guarantee you’ll be pleased."
      />
      <PageContent
        description="We proudly serve the Greater Toronto Area (GTA) including the City of
          Toronto, Durham, Halton, Peel and York Regions."
      />
      <AboutusCards />
    </section>
  );
}
