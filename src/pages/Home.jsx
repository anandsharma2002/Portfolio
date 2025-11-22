import React from 'react'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Projects from '../components/Project'
import Contact from '../components/Contact'
import Skills from '../components/Skills.jsx'
import Education from '../components/Education.jsx'
import Achievement from '../components/Achievement.jsx'

export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between">
                <Introduction />
                <div>
                    <About />
                    <Achievement/>
                </div>
            </div>
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </div>
    )
}
