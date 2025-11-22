import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
    return (
        <div className="mainCard mt-4 p-4 sm:p-8">
            <p className="relative inline-block text-[24px] after:content-[''] after:block after:w-[30%] after:border-b-2 after:border-yellow-400 after:mt-1 mb-8">
                <b>Education</b>
            </p>

            <div className="relative border-l-2 border-zinc-700 ml-3 md:ml-6 space-y-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-[9px] top-0 bg-[#1E1E1F] border-2 border-[#ffda24] w-5 h-5 rounded-full z-10"></span>

                        <div className="internalCard p-6 rounded-lg hover:bg-zinc-800 transition-colors duration-300 group">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                                <div className="flex-shrink-0 p-3 bg-zinc-900 rounded-full border border-zinc-700 group-hover:border-[#ffda24] transition-colors">
                                    {/* Use the SVG from data or a default icon if preferred. 
                       Since the data has complex SVGs, we can render them, 
                       or simpler: just use the GraduationCap icon for consistency if data SVGs are too large.
                       Let's try to use the data Image first, but wrap it to control size. */}
                                    <div className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[#ffda24]">
                                        {edu.Image}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white">{edu.Name}</h3>
                                    <p className="text-gray-400 font-medium">{edu.Title}</p>
                                </div>
                            </div>

                            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                                {/* Extract year from Title if possible, or just show the Score/Details */}
                                <span className="text-[#ffda24] font-semibold">{edu.Score}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
