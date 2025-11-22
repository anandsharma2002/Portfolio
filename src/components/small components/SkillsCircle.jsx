import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SkillCircle = ({ name, percentage }) => {
  const [offset, setOffset] = useState(0);
  const [circumference, setCircumference] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      let size = 48; // w-12 (mobile default)
      if (window.innerWidth >= 1024) size = 80; // lg:w-20
      else if (window.innerWidth >= 768) size = 64; // md:w-16
      else if (window.innerWidth >= 640) size = 56; // sm:w-14

      // r is 45% of size (matching the SVG r="45%")
      const r = size * 0.45;
      setCircumference(2 * Math.PI * r);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    // Calculate stroke offset based on percentage
    const progress = (100 - percentage) / 100;
    setOffset(circumference * progress);
  }, [percentage, circumference]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
    >
      {/* Background Circle */}
      <svg className="absolute w-full h-full rotate-[-90deg]">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#2e2e2e"
          strokeWidth="4"
          fill="none"
        />
        {/* Progress Circle */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#ffda24"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-in-out"
        />
      </svg>

      {/* Center Text */}
      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-white px-1 text-[8px] sm:text-[10px] md:text-xs font-semibold">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillCircle;
