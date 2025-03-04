import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const menuItems = [
    {
      name: "Closets",
      path: "closets",
      submenu: [
        { name: "Walk-In Closets", path: "walkin" },
        { name: "Reach-In Closets", path: "reachin" },
        { name: "Wardrobe Closets", path: "wardrobe" },
      ],
    },
    {
      name: "Living Areas",
      path: "living-areas",
      submenu: [
        { name: "Home Office", path: "home-office" },
        { name: "Entryway Storage", path: "entryway-storage" },
        { name: "Murphy Beds", path: "murphy-beds" },
        { name: "Laundry Rooms", path: "laundry-rooms" },
        { name: "Kitchen Pantry", path: "kitchen-pantry" },
      ],
    },
    { name: "Garages", path: "garages" },
    { name: "Gallery", path: "gallery" },
  ];

  return (
    <header className="w-full mx-auto font-montserrat text-primary text-xl ">
      {/* Top Level Bar */}
      <div className="hidden lg:flex justify-end items-center pt-5 gap-4 w-full max-w-7xl mx-auto pr-4">
        <a
          href="tel:+1111111111"
          className="text-hover  transition-all duration-200 hover:text-text-hover"
        >
          <h3>(111) 111-1111</h3>
        </a>

        {/* Divider */}
        <div className="w-[1px]  h-5 bg-primary" />

        <Link
          to="contact-us"
          className="text-hover  transition-all duration-200 hover:text-text-hover"
        >
          <h3>Contact Us</h3>
        </Link>

        {/* Social Media Icons */}
        <Link
          to="https://twitter.com/yourprofile"
          target="_blank"
          aria-label="Twitter"
          className=" transition-all duration-200 hover:text-text-hover"
        >
          <FaFacebookSquare size={30} />
        </Link>

        <Link
          to="https://instagram.com/yourprofile"
          target="_blank"
          aria-label="Instagram"
          className=" transition-all duration-200 hover:text-text-hover"
        >
          <FaInstagram size={30} />
        </Link>
      </div>

      {/* NavBar */}
      <nav className="relative px-6 flex justify-between items-center max-w-7xl mx-auto py-4">
        <Link to="/">
          <img
            src={logo}
            className="md:w-96 w-64 lg:pb-3 transition-transform duration-300 hover:scale-105"
            alt="Logo"
          />
        </Link>

        {/* Mobile Menu */}
        <div className="lg:hidden z-50">
          <MobileMenu items={menuItems} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 items-center">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <DesktopMenu item={item} />
              {/* Underline Hover Effect */}
              <div className="absolute left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
