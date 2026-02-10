import React from 'react'
import './LegoProjects.css'
import '../../Pages/Styles/Home.css'
import { getProjectsByCategory } from '../../utils/portfolioSelectors'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'
import polaroid_trailer from '../../../public/media/videos/polaroidtrailer.mp4'

const LegoProjects: React.FC = () => {
  const legoProjects = getProjectsByCategory(['lego_ideas'])

  return (
    <section className="lego-projects">
      <div className="homepage-project-header-container lego-projects">
        <h2
          className="homepage-project-title"
          style={{
          background: 'none',
          WebkitBackgroundClip: 'unset',
          WebkitTextFillColor: 'unset',
          color: 'inherit'
        }}
        >
          <span>Design → Render → Pitch.</span>
        </h2>
        <div className="homepage-project-subheader">
          <h3>
            Beyond software projects, I enjoy applying my technical and creative
            skills with my love for LEGO. Alongside my brother, we build custom
            LEGO models from the ground up and publish them to{" "}
            <a
              href="https://beta.ideas.lego.com/profile/cb41754b-5ba3-425f-8051-5bb0be7b5c19"
              target="_blank"
              rel="noopener noreferrer"
              className="lego-link"
            >
              LEGO Ideas ↗
            </a>
            , where fans around the world can vote on them becoming real sets.
          </h3>
        </div>
      </div>

      <div style={{background: "transparent", padding: "4px 0px 35px 0"}}>
        <ProjectCarousel projects={legoProjects} />
      </div>

      <div className="polaroid-container">
        <div className="polaroid-left">
          <div className="polaroid-left-content">
            <h3 className="polaroid-section-title">
              From{" "}
              <span style={{ color: '#8ac926' }}>Hobby</span>
              <br />
              to{" "}
              <span style={{ color: '#1982c4' }}>Official LEGO Set</span>.
              <br />
              <h2 className='polaroid-subheader'>- Story of the LEGO Polaroid OneStep -</h2>
            </h3>
            <p>
              What started as a passion project, the Polaroid OneStep Camera quickly earned 10,000 supporters, advancing to LEGO Review Stage and ultimately securing approval for commerical production. Released in January 2024, the LEGO Polaroid set has been enjoyed by tens of thousands of fans around the world.
            </p>
            <div className="polaroid-buttons">
              <button>Read More ↗</button>
              <button>Lego.com ↗</button>
            </div>
          </div>
        </div>
        <div className='polaroid-middle'>
          <div className="polaroid-color-strip">
            <span style={{ background: '#ff595e' }} />
            <span style={{ background: '#ff924c' }} />
            <span style={{ background: '#ffca3a' }} />
            <span style={{ background: '#8ac926' }} />
            <span style={{ background: '#1982c4' }} />
          </div>
        </div>
        <div className="polaroid-right">
          <div className="video-wrapper">
            <a
              href="https://youtu.be/h19I2b_Yzg4?si=6qb7JvnQho0mzH1G"
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
              <video
              className="polaroid-trailer"
              src={polaroid_trailer}
              autoPlay
              muted
              loop
              playsInline
            />
            </a>
            <div className="video-caption">
              Official LEGO® Polaroid Commercial ↗
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegoProjects
