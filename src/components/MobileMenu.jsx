/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ items }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleDrawer = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="lg:hidden focus:outline-none"
        onClick={toggleDrawer}
        aria-label={isOpenMenu ? "Close menu" : "Open menu"}
        aria-expanded={isOpenMenu}
      >
        {isOpenMenu ? <IoClose size={30} /> : <FiMenu size={30} />}
      </button>

      {/* Mobile Menu */}
      {isOpenMenu && (
        <ul
          className="absolute left-0 top-24 w-full bg-secondary border border-light-gray shadow-lg shadow-primary/40 p-4 rounded-lg transition-transform duration-300"
          aria-hidden={!isOpenMenu}
        >
          {items.map((item, i) => {
            const hasSubMenu = item.submenu?.length;
            return (
              <li key={i} className="pb-3">
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpenMenu(false)} // Close menu on click
                  className="block p-2 hover:text-text-hover transition-colors"
                >
                  {item.name}
                </NavLink>

                {hasSubMenu && (
                  <>
                    {/* Submenu Toggle Button */}
                    <button
                      onClick={() => toggleSubMenu(i)}
                      className="ml-2 text-sm text-dark-gray focus:outline-none"
                      aria-expanded={openSubMenus[i]}
                    >
                      {openSubMenus[i] ? "▲ Hide" : "▼ Show"}
                    </button>

                    {openSubMenus[i] && (
                      <ul className="ml-5 border-l-2 border-third/40 pl-3 mt-2">
                        {item.submenu.map((subitem, j) => (
                          <li
                            key={j}
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <NavLink
                              to={`/${item.path}/${subitem.path}`}
                              onClick={() => setIsOpenMenu(false)}
                              className="block"
                            >
                              {subitem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
