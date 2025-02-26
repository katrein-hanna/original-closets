import { Link } from "react-router-dom";
import Button from "./Button";

export default function PromoBanner() {
  return (
    <section className="main-container">
      {/* Background Image */}
      <div className="rectangle-container grid overflow-auto bg-light-gray">
        <div className="content-container">
          <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1  items-center">
            {/* Left Text */}
            <div className="lg:col-span-2 md:col-span-2 md:pb-0 pb-5">
              <h1>Custom Designed to Fit Your Needs & Budget</h1>
            </div>

            {/* Center Divider */}
            <div className="mx-auto md:w-[1px] md:h-28 w-0 h-0  bg-primary" />

            {/* Right Button */}
            <div className="md:text-start text-center md:pt-0 pt-5 lg:col-span-2">
              <Link to="/contact-us">
                <Button btnName="contact us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
