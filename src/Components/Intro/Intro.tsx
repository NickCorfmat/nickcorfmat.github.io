import "./Intro.css"
import github_icon from "../../../public/media/icons/github_black.svg"
import linkedin_icon from "../../../public/media/icons/linkedin_blue.svg"
import phaser_icon from "../../../public/media/icons/phaser.png"
import download_icon from "../../../public/media/icons/download.svg"
import mail_icon from "../../../public/media/icons/mail_icon.png"

const Intro = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left-stack">
        <div className="about-hero-card">
          <div className="hero-top">
            <div>
              <h1>Nick Corfmat</h1>
              <p className="info-label">
                Software Engineer • Game Developer
              </p>
            </div>
          </div>
          <p className="blurb">
            I build interactive experiences where design and engineering meet {"<3"}
          </p>
          <div className="hero-socials">
            <a
              href="mailto:nfcorfmat@gmail.com"
              className="social-pill"
            >
              Contact
              <img src={mail_icon} alt="Mail" />
            </a>
            <a
              href="/media/docs/Nicolas_Corfmat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              Resume
              <img src={download_icon} style={{filter: "invert(1)"}} alt="Download" />
            </a>
            <a
              href="https://github.com/NickCorfmat"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              GitHub
              <img src={github_icon} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolascorfmat/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              LinkedIn
              <img src={linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="animation">
            <img 
              src="/media/videos/fightfightersanimation.gif"
              alt="Animated GIF" 
              className="hero-gif"
              title="Animation I made for 'Fight Fighters'"
            />
        </div>
      </div>
        
        <div className="about-info-stack">
          <div className="info-card">
            <span className="info-label">Education</span>
            <h3>BS Computer Science — Game Design</h3>
            <p>University of California, Santa Cruz</p>
            <span className="info-sub">2021 — 2025</span>
          </div>
          <div className="info-card">
            <span className="info-label">Focus</span>
            <p>Game Programming • Frontend • UI/UX</p>
          </div>
          <div className="info-card">
            <span className="info-label">Based In</span>
            <p>Bay Area, California</p>
          </div>
          <div className="info-card">
            <span className="info-label">Technical Skills</span>
            <div className="skills-grid">
              <i className="devicon-unity-plain" title="Unity"></i>
              <i className="devicon-unrealengine-original" title="Unreal Engine"></i>
              <img src={phaser_icon} className="phaser-icon" title="Phaser" />
              <i className="devicon-csharp-plain colored" title="C#"></i>
              <i className="devicon-cplusplus-plain colored" title="C++"></i>
              <i className="devicon-c-original" title="C"></i>
              <i className="devicon-python-plain colored" title="Python"></i>
              <i className="devicon-javascript-plain colored" title="JavaScript"></i>
              <i className="devicon-typescript-plain colored" title="TypeScript"></i>
              <i className="devicon-java-plain colored" title="Java"></i>
              <i className="devicon-html5-plain colored" title="HTML5"></i>
              <i className="devicon-css3-plain colored" title="CSS3"></i>
              <i className="devicon-vuejs-plain colored" title="Vue.js"></i>
              <i className="devicon-react-original colored" title="React"></i>
              <i className="devicon-vite-original colored" title="Vite"></i>
              <i className="devicon-unix-original colored" title='Unix'></i>
              <i className="devicon-git-plain colored" title="Git"></i>
              <i className="devicon-latex-original" title="LaTeX"></i>
              <i className="devicon-inkscape-plain colored" title="Inkscape"></i>
              <i className="devicon-blender-original colored" title="Blender"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro