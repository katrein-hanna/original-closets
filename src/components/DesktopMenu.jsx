/* eslint-disable react/prop-types */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function DesktopMenu({ item }) {
  const [open, setOpen] = useState(false);

  const showFlyout = open && item.submenu;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <li className="relative p-2">
        {item.name}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-1 -left-2 -right-2 h-1 origin-left rounded-full bg-underLine transition-transform duration-300 ease-out "
        />
      </li>
      <AnimatePresence>
        <div className="absolute rounded-2xl  top-16 left-1/2 -translate-x-1/2 bg-third/30">
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-52 p-2 align-middle rounded-2xl shadow-md shadow-third"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4  -translate-x-1/2 -translate-y-1/2 rotate-45 bg-fourth" />
              <ul>
                {item.submenu.map((subItem, i) => (
                  <li key={i} className="block text-md hover:underline p-2">
                    <a href="#">{subItem}</a>
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
