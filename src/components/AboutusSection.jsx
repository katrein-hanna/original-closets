import AboutusCards from "./AboutusCards";

export default function AboutusSection() {
  return (
    <section className="main-container">
      <div className="content-container flex flex-col justify-center items-center gap-10 mx-auto p-5 text-primary ">
        <h1>Why Original Closets</h1>

        <p>
          Original Closets is a specialized carpentry company in Toronto with a
          focus on custom storage solutions for every room of your home or
          garage. We have more than 12 years experience in designing,
          manufacturing, and installing custom cabinets in your home or office
          at affordable prices. Our professionals will be pleased to offer
          creative ideas and services to assist you in designing your dream
          rooms! Give us a try, we guarantee you’ll be pleased.
        </p>
        <p>
          We proudly serve the Greater Toronto Area (GTA) including the City of
          Toronto, Durham, Halton, Peel and York Regions.
        </p>
      </div>
      <AboutusCards />
    </section>
  );
}
