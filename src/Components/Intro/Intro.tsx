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
              Computer Science • Game Design • Software Engineer
            </p>
          </div>

          <p className="about-bio">
            <h2><i>Bringing creativity to technology.</i></h2>
            Working in a startup requires a combination of quick-thinking, decisive action and a willingness to take calculated risks. The chance to meaningfully contribute, while learning from this kind of accelerated environment, is what excites me. Pressure and uncertainty are inevitable, but it is how I learn to navigate and overcome these challenges that will forge me not only into a more resilient programmer, but also a more adaptable person. I’m excited by the opportunity to experiment with new technologies, and directly see the impact of my work, all while collaborating closely with a small, passionate team.
            <br />
            <h2><i>Bringing creativity to technology.</i></h2>
            Outside of formal coursework, I co-founded Minibrick Productions, a YouTube channel where I combined creative design and technical skills to produce LEGO-focused content. Under this brand, I designed and built 27+ LEGO concept sets using LEGO CAD software, Blender for 3D visualization, and social media platforms for driving public engagement. Through this experience, I developed a wide range of technical design skills, strengthened my project management abilities, and cultivated a data-driven approach to decision-making. culminating in one of our projects, the LEGO Polaroid set, which successfully passed the LEGO Ideas review stage and is now available in retail stores such as Amazon, Target, and Walmart worldwide. 
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
