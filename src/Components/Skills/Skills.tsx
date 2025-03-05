import React from 'react'
import './Skills.css'
import skills from '../../../public/Assets/skillsData'

const Skills = () => {
  return (
    <div className='skills'>
        <h2>Skills</h2>
        <div className='skills-list'>
            {skills.map((skill, index) => (
                <span key={index} className='skill-tag'>{skill}</span>
            ))}
        </div>
    </div>
  )
}

export default Skills
