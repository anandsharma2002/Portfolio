// src/components/Projects/ProjectCard.jsx
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
    return (
        <div className="internalCard max-w-[320px] md:max-w-[360px] rounded-2xl shadow-lg p-4 flex-shrink-0">
            <div className="h-40 rounded-lg overflow-hidden mb-3">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                />
            </div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-gray-300 mt-2 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((t) => (
                    <span key={t} className="bg-[#474747] text-xs px-2 py-1 rounded-full text-gray-200">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
