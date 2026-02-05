import { Link } from 'react-router-dom';
import './Bio.css'
import profile from '../../../public/media/images/profile.jpg'

const Bio = () => {
  return (
    <section className='bio'>
      <div className='bio-profile-container'>
        <div className='gradient-container'>
          <div className='gradient'></div>
        </div>

        <Link to="/about" className="profile-overlay-link">
          <img
            src={profile}
            className='bio-profile-picture'
            alt="Nick Corfmat"
          />
        </Link>
      </div>

      <div className='bio-text-container'>

        <h2>
          Software Engineer & Game Programmer
        </h2>

        <h3>
          Hi, I’m <span className="highlight-name">Nick Corfmat</span>
        </h3>

        <p className="bio-description">
          I’m a Computer Science: Game Design graduate from UC Santa Cruz who enjoys building performant gameplay systems, real-time graphics experiences, and software applications. I specialize in Unity/C#, frontend + UI/UX development, and designing modular, maintainable code.
        </p>

        <div className="bio-actions">
          <Link to="/projects" className="bio-btn primary">
            View Projects ↗
          </Link>

          <Link to="/resume" className="bio-btn secondary">
            Resume ↗
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bio
