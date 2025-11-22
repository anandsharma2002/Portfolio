import React from 'react'
import { achievements } from '../data/portfolio'
import { Star } from 'lucide-react'

export default function Achievement() {
    return (
        <div className='mainCard mt-4 p-4'>
            <p className="relative inline-block text-[24px] after:content-[''] after:block after:w-[30%] after:border-b-2 after:border-yellow-400 after:mt-1 mb-6">
                <b>Achievements</b>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                    <div key={index} className="internalCard p-4 rounded-lg hover:bg-zinc-800 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-2">
                            <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                            <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {achievement.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
