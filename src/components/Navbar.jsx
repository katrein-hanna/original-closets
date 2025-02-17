import logo from "../assets/logo.png";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const menuItems = [
    {
      name: "Closets",
      submenu: ["Walk-In Closets", "Walk-In Closets", "Walk-In Closets"],
    },
    {
      name: "Living Areas",
      submenu: [
        "Home Office",
        "Entryway Storage",
        "Morphy Beds",
        "Lundary Rooms",
        "Kitchen Pantry",
        "Media",
      ],
    },
    { name: "Garages" },
    { name: "Gallery" },
  ];

  return (
    <header className="w-full mx-auto font-montserrat text-primary text-xl">
      {/* Top Level Bar */}
      <div className="hidden lg:flex justify-end mt-5 gap-4 w-full max-w-7xl mx-auto font-normal pr-4">
        <h2 dir="rtl">(416) 901-2567</h2>
        <h2>| </h2>
        <h2>Contact</h2>
      </div>

      {/* NavBar  */}
      <nav className="relative mt-5 px-4 flex justify-between items-center max-w-7xl mx-auto">
        <img src={logo} className="w-70 pb-3" alt="Logo" />

        {/* Menus */}

        {/* Mobile Menu */}
        <div className="lg:hidden">
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
