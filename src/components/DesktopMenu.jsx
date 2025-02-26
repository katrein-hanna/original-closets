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
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}
      className="group relative z-50 h-fit w-fit"
    >
      <div className="relative p-2 hover:text-text-hover">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `text-hover p-1  ${isActive ? "font-semibold text-text-hover" : ""}`
          }
          aria-haspopup={item.submenu ? "true" : "false"}
          aria-expanded={showFlyout ? "true" : "false"}
        >
          {item.name}
        </NavLink>
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-1 -left-2 -right-2 h-1 origin-left rounded-full bg-primary transition-transform duration-300 ease-out"
        />
      </div>

      {/* Render submenu only if it exists */}
      {showFlyout && (
        <AnimatePresence>
          <nav
            className="absolute rounded-2xl top-16 left-1/2 -translate-x-1/2 bg-secondary shadow-sm shadow-primary"
            role="menu"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-56 p-2 align-middle rounded-2xl"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <ul className="text-base">
                {item.submenu.map((subItem, i) => (
                  <li
                    key={i}
                    className="block text-base hover:bg-light-gray p-2"
                  >
                    <NavLink
                      to={`/${item.path}/${subItem.path}`}
                      className="block p-1"
                    >
                      {subItem.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </nav>
        </AnimatePresence>
      )}
    </div>
  );
}
