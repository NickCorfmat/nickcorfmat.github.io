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
          <span style={{ color: '#ff595e' }}>Design</span>
          <span style={{ margin: '0 10px', color: '#ff924c' }}>→</span>
          <span style={{ color: '#ffca3a' }}>Render</span>
          <span style={{ margin: '0 10px', color: '#8ac926' }}>→</span>
          <span style={{ color: '#1982c4' }}>Pitch</span>
          <span style={{ color: '#444' }}>.</span>
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

      <div style={{background: "#1e1d1d", padding: "5px 0px"}}>
        <ProjectCarousel projects={legoProjects} />
      </div>

      <div className="polaroid-container">
        <div className="polaroid-left">
          <div className="polaroid-left-content">
            <h3 className="polaroid-section-title">
              From{" "}
              <span style={{ color: '#8ac926' }}>Concept</span>
              <br />
              to{" "}
              <span style={{ color: '#1982c4' }}>Store Shelves</span>.
            </h3>
            <p>
              Our Polaroid OneStep project began as a passion concept —
              combining product design, LEGO system accuracy, and display
              engineering. After reaching 10K supporters, it moved into review, where LEGO approved it for offical production.
            </p>
            <div className="polaroid-buttons">
              <button style={{ background: '#ff595e' }} />
              <button style={{ background: '#ffca3a' }} />
              <button style={{ background: '#8ac926' }} />
              <button style={{ background: '#1982c4' }} />
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
