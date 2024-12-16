import React from 'react'
import ProjectRow from '../ProjectRow/ProjectRow';
import portfolio from '../../../public/Assets/portfolio.json'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        {portfolio.map((row, index) => (
            <ProjectRow key={index} title={row.title} projects={row.projects} />
        ))}
    </div>
  )
}

export default Portfolio
