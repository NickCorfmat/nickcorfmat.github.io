import React from 'react'
import './Skills.css'
import { skills } from '../../../public/Assets/personalData'

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-flip">
            <div className="skill-flip-inner">
              <div className="skill-front">
                {skill}
              </div>
              <div className="skill-back">
                Experienced
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
