/* eslint-disable react/prop-types */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export default function DesktopMenu({ item }) {
  const [open, setOpen] = useState(false);

  const showFlyout = open && item.submenu;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative z-50 h-fit w-fit "
    >
      <li className="relative p-2 ">
        <NavLink
          to={item.path}
          className="hover:text-underLine rounded-2xl p-1 transition-normal duration-200"
        >
          {item.name}
        </NavLink>
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-1 -left-2 -right-2 h-1 origin-left rounded-full bg-underLine transition-transform duration-300 ease-out "
        />
      </li>
      <AnimatePresence>
        <div className="absolute rounded-2xl  top-16 left-1/2 -translate-x-1/2 bg-fourth shadow-sm shadow-primary">
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-52 p-2 align-middle rounded-2xl  "
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <ul>
                {item.submenu.map((subItem, i) => (
                  <li key={i} className="block text-md hover:bg-third p-2">
                    <NavLink to={subItem.path}>{subItem.name}</NavLink>
                  </li>
                ))}
              </ul>
              {/* {item.submenu} */}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}
