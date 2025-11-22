// src/components/Skills.jsx
import { skills } from "../data/portfolio.jsx";
import { motion } from "framer-motion";

const SkillChart = () => {
  return (
    <motion.section
      id="skills"
      className="mainCard w-full mx-auto mt-4 px-4 py-16"
      initial={{ opacity: 0, y: -20 }}    // section starts hidden above
      animate={{ opacity: 1, y: 0 }}      // fade in + slide down
      transition={{ duration: 1 }}        // 1 second
    >
      {/* Section Title */}
      <p className="relative mb-4 inline-block text-[24px] after:content-[''] after:block after:w-[30%] after:border-b-2 after:border-yellow-400 after:mt-1">
        <b>Skills</b>
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-base md:text-lg font-medium">{skill.name}</span>
              <span className="text-sm md:text-base">{skill.level}%</span>
            </div>

            {/* Skill Bar Container */}
            <div className="w-full h-3 md:h-4 bg-[#3f3f3f] rounded-xl overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-[#ffda24] rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillChart;
