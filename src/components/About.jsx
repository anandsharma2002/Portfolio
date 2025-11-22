import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <motion.div
      className="mainCard max-w-90 mt-4 sm:max-w-full w-full sm:mt-0 p-4"
      initial={{ opacity: 0, y: -20 }}  // start hidden slightly above
      animate={{ opacity: 1, y: 0 }}    // fade in and slide down
      transition={{ duration: 1 }}      // 1 second animation
    >
      {/* Section title with underline */}
      <p className="relative inline-block text-[24px] after:content-[''] after:block after:w-[30%] after:border-b-2 after:border-yellow-400 after:mt-1">
        <b>About Me</b>
      </p>

      {/* Description */}
      <div className="mt-2">
        {personalInfo.about.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
            {index < personalInfo.about.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
      <br />
    </motion.div>
  );
}
