import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SkillCircle from "./small components/SkillsCircle";
import { skills } from '../data/portfolio.jsx'
import AnimatedStark from '../assets/images/Animated Stark.png'

export default function Skills() {
    const [radius, setRadius] = useState(200);
    const controls = useAnimation();

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 640) {
                // mobile - smaller radius to fit screen
                setRadius(100);
            } else if (window.innerWidth < 1024) {
                // tablet
                setRadius(160);
            } else {
                // laptop and higher
                setRadius(200);
            }
        };

        updateRadius();
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    useEffect(() => {
        controls.start({
            rotate: 360,
            transition: { repeat: Infinity, duration: 20, ease: "linear" },
        });
    }, [controls]);

    return (
        <div className="mainCard mt-4 py-4 px-1">
            <p className="relative px-3 mb-4 inline-block text-[24px] after:content-[''] after:block after:w-[30%] after:border-b-2 after:border-yellow-400 after:mt-1">
                <b>Skills</b>
            </p>
            <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[500px] overflow-hidden">
                <div className="absolute rounded-full flex items-center justify-center text-white text-lg font-semibold">
                    <img src={AnimatedStark} className="w-[80px] sm:w-[150px] md:w-[200px]" alt="" />
                </div>

                {/* Single Rotating Orbit with all skills */}
                <motion.div
                    animate={controls}
                    className="absolute"
                    style={{
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                    }}
                >
                    {skills.map((skill, index) => {
                        // Calculate angle for equal spacing
                        const angle = (index / skills.length) * 2 * Math.PI - Math.PI / 2;
                        const x = radius * Math.cos(angle);
                        const y = radius * Math.sin(angle);

                        return (
                            <div
                                key={index}
                                className="absolute top-1/2 left-1/2"
                                style={{
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                }}
                            >
                                {/* Counter-rotate to keep skill circles upright */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                >
                                    <SkillCircle name={skill.name} percentage={skill.percentage} />
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>

                <div
                    className="absolute rounded-full"
                    style={{
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                    }}
                ></div>
            </div>
        </div>
    );
}