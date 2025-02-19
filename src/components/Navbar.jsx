import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const menuItems = [
    {
      name: "Closets",
      path: "/closets",
      submenu: [
        { name: "Walk-In Closets", path: "walkin" },
        { name: "Walk-In Closets", path: "walkin" },
        { name: "Walk-In Closets", path: "walkin" },
      ],
    },
    {
      name: "Living Areas",
      path: "/livig-areas",
      submenu: [
        { name: "Home Office", path: "home-office" },
        { name: "Entryway Storage", path: "entryway-storage" },
        { name: "Morphy Beds", path: "morphy-beds" },
        { name: "Lundary Rooms", path: "lundary-rooms" },
        { name: "Kitchen Pantry", path: "kitchen-pantry" },
        { name: "Media", path: "media" },
      ],
    },
    { name: "Garages", path: "/garages" },

    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className="w-full mx-auto font-montserrat text-primary text-xl ">
      {/* Top Level Bar */}

      <div className="hidden lg:flex justify-end mt-5 gap-4 w-full max-w-7xl mx-auto font-normal pr-4 ">
        <h2 dir="rtl">
          <Link className="hover:text-underLine rounded-2xl p-1 transition-normal duration-200">
            (416) 901-2567
          </Link>
        </h2>
        <h2>| </h2>
        <h2>
          <Link className="hover:text-underLine rounded-2xl p-1 transition-normal duration-200">
            Contact
          </Link>
        </h2>
      </div>

      {/* NavBar  */}
      <nav className="relative m-5 px-4 flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/">
          <img src={logo} className="w-70 pb-3" alt="Logo" />
        </Link>

        {/* Menus */}

        {/* Mobile Menu */}
        <div className="lg:hidden z-50 ">
          <MobileMenu items={menuItems} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:gap-8 lg:items-center absolute lg:static left-0 top-25 w-full lg:w-auto bg-fourth lg:bg-transparent shadow-lg shadow-secondary lg:border-none lg:shadow-none p-4 lg:p-0 rounded-lg lg:rounded-none transition-all duration-300">
          {menuItems.map((item) => (
            <DesktopMenu key={item.name} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
