import { Link } from "react-router-dom";
import logo from "../assets/footerLogo.png";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BiMobile, BiPhone, BiTime } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const menuItems = [
  { name: "Closets", path: "/closets" },
  { name: "Home Officce", path: "living-areas/home-office" },
  { name: "Kitchen Pantry", path: "living-areas/kitchen-pantry" },
  { name: "Murphy Beds", path: "living-areas/murphy-beds" },
  { name: "Laundry Room", path: "living-areas/laundry-rooms" },
  { name: "Garage Cabinets", path: "/garages" },
  { name: "Contact", path: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="w-full p-8 bg-primary text-secondary">
      <div className="content-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col lg:col-span-1 md:col-span-2 items-center">
          <Link to="/" className="-ml-5 md:mt-10">
            <img src={logo} className="w-70 md:w-80 mb-4 " alt="Logo" />
          </Link>
          <p className=" text-center ">
            Original Closets specializes in custom storage solutions for every
            room in your home or garage.
          </p>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-center">
          <h3 className="md:text-lg text-md font-semibold mb-4 uppercase">
            some of our services
          </h3>
          <ul className="text-secondary space-y-2 text-center">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link to={item.path} className="hover:text-text-hover">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col text-center md:items-start lg:ml-10 md:ml-20">
          <h3 className="md:text-lg text-md font-semibold mb-4">
            CONTACT INFORMATION
          </h3>
          <div className="flex justify-center pb-1">
            <CiLocationOn className=" md:mr-1" size={30} />
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977211375!2d-79.54286779713875!3d43.71837095824505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1740394210624!5m2!1sen!2sus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-hover"
            >
              <p>Toronto, Canada</p>
            </a>
          </div>
          <div className="flex justify-center pb-1">
            <BiPhone className="mt-1 mr-1" size={25} />
            <p>
              Office:{" "}
              <a href="tel:+1111111111" className="hover:text-text-hover">
                (111) 111-1111
              </a>
            </p>
          </div>
          <div className="flex justify-center pb-1">
            <BiMobile className="mt-1 mr-1" size={25} />
            <p>
              Mobile:{" "}
              <a href="tel:+1111111111" className="hover:text-text-hover">
                (111) 111-1111
              </a>
            </p>
          </div>
          <div className="flex justify-center pb-1">
            <MdOutlineEmail className="mt-1 mr-1" size={25} />
            <a
              href="mailto:info@originalclosets.ca"
              className="hover:text-text-hover"
            >
              <p> info@originalclosets.ca</p>
            </a>
          </div>

          <div className="flex justify-center pb-1">
            <BiTime className="mt-1 mr-1" size={25} />
            <p>Monday to Friday: 9AM - 5PM</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4  mt-8">
            <Link to="https://facebook.com" target="_blank">
              <FaFacebookSquare
                size={28}
                className="text-secondary hover:text-text-hover"
              />
            </Link>
            <Link to="https://instagram.com" target="_blank">
              <BsInstagram
                size={28}
                className="text-secondary hover:text-text-hover"
              />
            </Link>

            <Link to="https://instagram.com" target="_blank">
              <BsTwitterX
                size={28}
                className="text-secondary hover:text-text-hover"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-secondary text-sm">
        © 2025 ALL RIGHTS RESERVED. ORIGINAL CLOSETS
      </div>
    </footer>
  );
}
