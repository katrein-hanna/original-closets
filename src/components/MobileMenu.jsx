/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

export default function MobileMenu({ items }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpenMenu(!isOpenMenu);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
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

      {/* <div className="fixed block border-1 border-secondary/20  left-0 top-25 w-full bg-fourth lg:bg-transparent shadow-lg shadow-third/40  p-4 rounded-lg "> */}
      <ul
        className={`${
          isOpenMenu
            ? "block border-1 border-secondary/20 absolute left-0 top-25 w-full bg-fourth lg:bg-transparent shadow-lg shadow-third/40  p-4 rounded-lg  transition-all duration-300"
            : "hidden"
        }`}
      >
        {items.map((item, i) => {
          const isClicked = clicked === i;
          const hasSubMenu = item.submenu?.length;
          return (
            <li key={i} className="">
              <span
                className="flex justify-between items-center p-4 hover:bg-third rounded-md cursor-pointer relative"
                onClick={() => setClicked(isClicked ? null : i)}
              >
                {item.name}
                {hasSubMenu && (
                  <BiChevronDown
                    className={`ml-auto ${isClicked && "rotate-180"} `}
                  />
                )}
              </span>
              {hasSubMenu && (
                <motion.ul
                  initial="exit"
                  animate={isClicked ? "enter" : "exit"}
                  variants={subMenuDrawer}
                  className="ml-5"
                >
                  {item.submenu.map((name) => (
                    <li
                      key={name}
                      className="p-2 flex-center hover:underline rounded-md gap-x-2 cursor-pointer"
                    >
                      <a href="#">{name}</a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </>
  );
}
