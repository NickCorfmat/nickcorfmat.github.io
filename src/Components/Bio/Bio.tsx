import { Link } from 'react-router-dom';
import './Bio.css'

const Bio = () => {
  return (
    <section className='bio'>
      <div className='bio-profile-container'>
        <div className='gradient-container'>
          <div className='gradient'></div>
        </div>

        <Link to="/about" className="profile-overlay-link">
          <img
            src="/media/images/profile.jpg"
            className='bio-profile-picture'
            alt="Nick Corfmat"
          />
        </Link>
      </div>

      <div className='bio-text-container'>
        <h3>
          Hi, I’m <span className="highlight-name">Nick Corfmat</span>!
        </h3>

        <p className="bio-description">
          I’m a Computer Science: Game Design graduate from UC Santa Cruz who enjoys building performance-efficient games, real-time graphics experiences, and software applications. I specialize in Unity/C#, frontend + UI/UX development, and designing modular, maintainable code.
        </p>
      </div>
    </section>
  )
}

export default Bio
