import React from 'react'
import './Skills.css'

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2>Technologies & Tools</h2>
        <p>
          Production-ready technologies I use to build gameplay systems,
          real-time experiences, and scalable software.
        </p>
      </div>
      <div className="skills-container">
        <div className="skills-left">
          <h3 className="skills-title">
            Built with Production-Ready Tech.
          </h3>
          <p>
            My work spans gameplay programming, engine systems,
            rendering experimentation, and UI frameworks — using
            both commercial engines and custom WebGL pipelines.
          </p>
        </div>
        <div className="skills-right">
          <div className="skills-icons">
            <i className="devicon-unity-plain" title="Unity"></i>
            <i className="devicon-unrealengine-original" title="Unreal Engine"></i>
            <i className="devicon-csharp-plain colored" title="C#"></i>
            <i className="devicon-cplusplus-plain colored" title="C++"></i>
            <i className="devicon-python-plain colored" title="Python"></i>
            <i className="devicon-javascript-plain colored" title="JavaScript"></i>
            <i className="devicon-typescript-plain colored" title="TypeScript"></i>
            <i className="devicon-java-plain colored" title="Java"></i>
            <i className="devicon-html5-plain colored" title="HTML5"></i>
            <i className="devicon-css3-plain colored" title="CSS3"></i>
            <i className="devicon-vuejs-plain colored" title="Vue.js"></i>
            <i className="devicon-react-original colored" title="React"></i>
            <i className="devicon-blender-original colored" title="Blender"></i>
            <i className="devicon-unix-original colored" title='Unix'></i>
            <i className="devicon-git-plain colored" title="Git"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
