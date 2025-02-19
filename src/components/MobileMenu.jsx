/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
// import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ items }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleDrawer = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="lg:hidden focus:outline-none"
        onClick={() => toggleDrawer()}
      >
        {isOpenMenu ? <IoClose size={30} /> : <FiMenu size={30} />}
      </button>

      <ul
        className={`${
          isOpenMenu
            ? "block border-1 border-secondary/20 absolute left-0 top-25 w-full bg-fourth lg:bg-transparent shadow-lg shadow-third/40  p-4 rounded-lg  transition-transform duration-300"
            : "hidden"
        }`}
      >
        {items.map((item, i) => {
          const hasSubMenu = item.submenu?.length;
          return (
            <li key={i} className="pb-3 ">
              <NavLink to={item.path}>{item.name}</NavLink>

              {hasSubMenu && (
                <ul className="ml-5 border-b-1 border-third/40 ">
                  {item.submenu.map((subitem, i) => (
                    <li
                      key={i}
                      className="p-1 flex-center hover:underline rounded-md ursor-pointer"
                    >
                      <NavLink to={subitem.path}>{subitem.name}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
