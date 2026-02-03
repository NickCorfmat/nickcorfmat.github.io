import "./Intro.css"
import full_body_photo from "../../../public/media/images/photo1.jpg"

const Intro = () => {
  return (
    <section className="about-container">

      <div className="about-container-left">
        <img
          src={full_body_photo}
          className="full-body-photo"
          alt="Nick Corfmat"
        />
      </div>
      <div className="about-container-right">
        <div className="about-content">

          <div className="about-header">
            <h3 className="about-label">About Me</h3>
            <h1 className="about-name">Nick Corfmat</h1>
            <p className="about-role">
              Computer Science • Game Design • Frontend & Software Engineer
            </p>
          </div>

          <p className="about-bio">
            I’m a computer science student with a passion for building interactive,
            polished digital experiences. My background in game development gives me a
            strong eye for UI, motion, and user feedback, while my software engineering
            work focuses on scalable systems, clean architecture, and modern web tech.
            <br /><br />
            I’m looking for roles in <b>software engineering, frontend, or game
            development</b> where I can blend technical depth with creative problem
            solving.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <span>8+</span>
              <p>Games & Apps</p>
            </div>
            <div className="stat-card">
              <span>4+</span>
              <p>Years Coding</p>
            </div>
            <div className="stat-card">
              <span>3</span>
              <p>Engines</p>
            </div>
          </div>

          <div className="education-container">
            <h3>Education</h3>
            <div className="education-card">
              <h2>BS in Computer Science: Game Design</h2>
              <h3>University of California, Santa Cruz</h3>
              <h4>Sep 2021 – Jun 2025</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Intro
