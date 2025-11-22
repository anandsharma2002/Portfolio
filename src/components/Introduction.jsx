import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Profile from "../assets/images/profile.png";
import { socialLinks } from "../data/portfolio.jsx";
import IntroductionContact from "./small components/introductionContact.jsx";
import IntroductionContactIcon from "./small components/IntroductionContactIcon.jsx";

export default function Introduction() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // run only in browser
    if (typeof window === "undefined") return;

    const updateMenu = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    };

    // initialize
    updateMenu();

    // listen for resize
    window.addEventListener("resize", updateMenu);

    // cleanup
    return () => window.removeEventListener("resize", updateMenu);
  }, []);

  return (
    <motion.div
      className="mainCard w-full max-w-90 sm:max-w-[260px] md:max-w-[300px] sm:mr-2 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* ===== Menu icon ===== */}
      <div
        className="profileMenu cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle contact details"
        role="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffda24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </div>

      {/* ===== Profile Info ===== */}
      <div className="flex flex-row md:flex-col items-center justify-center md:justify-start p-6 rounded-2xl shadow-lg max-w-xs mx-auto">
        <img
          src={Profile}
          alt="Anand Sharma"
          className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover mb-0 md:mb-4"
        />
        <div className="flex flex-col items-center md:items-start text-center md:text-left ml-4 md:ml-0">
          <h2 className="text-white text-[15px] md:text-2xl font-semibold">
            Anand Sharma
          </h2>
          <p className="text-gray-300 text-[10px] md:text-base internalCard px-2 py-1 mt-1 rounded-lg">
            Software Engineer
          </p>
        </div>
      </div>

      {/* ===== Contact + Social (collapsible on mobile, always visible on md+) ===== */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden md:overflow-visible md:h-auto md:opacity-100"
      >
        <hr className="w-full mt-4 mb-4" />

        {/* Staggered Container for Contact Details */}
        <motion.div
          initial="hidden"
          animate={menuOpen ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {socialLinks.map(
            (data, index) =>
              index < 3 && (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <IntroductionContact
                    icon={data.icon}
                    title={data.name}
                    value={data.url}
                  />
                </motion.div>
              )
          )}
        </motion.div>

        <hr className="w-full mt-4 mb-4" />

        {/* Staggered Container for Social Icons */}
        <motion.div
          className="flex"
          initial="hidden"
          animate={menuOpen ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3 // Delay starting until after contact details
              }
            }
          }}
        >
          {socialLinks.map(
            (data, index) =>
              index > 2 && (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                >
                  <IntroductionContactIcon
                    link={data.url}
                    image={data.icon}
                  />
                </motion.div>
              )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
