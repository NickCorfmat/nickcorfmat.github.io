import './Skills.css'
import { skills } from '../../../public/media/personalData'

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>

      <div className="skills-list">
        {skills.map(({ name, proficiency }, index) => (
          <div key={index} className="skill-flip">
            <div className="skill-flip-inner">
              <span className="skill-front">{name}</span>
              <span className="skill-back">{proficiency}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
