import "./Intro.css"

import github_icon from "../../../public/media/icons/github_black.svg"
import linkedin_icon from "../../../public/media/icons/linkedin_blue.svg"
import { Link } from "react-router-dom"

import { isVideo } from "../../utils/mediaUtils"
import {
  getProjectsByCategory,
  getRandomProject
} from "../../utils/portfolioSelectors"

const Intro = () => {

  const featuredProjects = getProjectsByCategory(["about"])
  const randomProject = getRandomProject(featuredProjects)

  return (
    <section className="intro">
      {randomProject && (
        <>
          {isVideo(randomProject.media) ? (
            <video
              className="intro-bg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={randomProject.media} type="video/mp4" />
            </video>
          ) : (
            <img
              className="intro-bg"
              src={randomProject.media}
              alt={randomProject.name}
            />
          )}
        </>
      )}
      <div className="intro-overlay" />
      <div className="intro-main">
        <p className="intro-eyebrow">About</p>
        <h1 className="intro-title">
          Nick Corfmat
        </h1>
        <p className="intro-role">
          Software Engineer • Game Developer • Creative Technologist
        </p>
        <div className="intro-divider" />
        <p className="intro-blurb">
          I build interactive experiences where design and engineering meet —
          from gameplay systems to real-time visuals and creative tools.
        </p>
        <div className="intro-actions">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <a
            href="mailto:nicolasfcorfmat@gmail.com?subject=Portfolio Inquiry&body=Hi Nick,"
            className="btn secondary"
          >
            Contact
          </a>
        </div>
        <div className="intro-socials">
          <a
            href="https://github.com/[username]"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={github_icon} alt="GitHub" />
          </a>
          <a
            href="https://linkedin.com/in/[username]"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>
          <a
            href="/media/docs/Nicolas_Corfmat_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="intro-side">
        <div className="side-panel">
          <div className="side-item">
            <span className="side-label">Currently</span>
            <p>
              Building <span>[Project / Studio Placeholder]</span>
            </p>
          </div>
          <div className="side-item">
            <span className="side-label">Focus</span>
            <p>Game Programming • Frontend • UI/UX</p>
          </div>
          <div className="side-item">
            <span className="side-label">Based In</span>
            <p>Bay Area, CA</p>
          </div>
        </div>
        <div className="metrics">
          <div className="metric">
            <h3>8+</h3>
            <span>Projects</span>
          </div>
          <div className="metric">
            <h3>4+</h3>
            <span>Years Coding</span>
          </div>
          <div className="metric">
            <h3>3</h3>
            <span>Engines</span>
          </div>
        </div>
        <div className="education">
          <span className="side-label">Education</span>
          <div className="edu-card">
            <h4>BS Computer Science — Game Design</h4>
            <p>University of California, Santa Cruz</p>
            <span>2021 — 2025</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
