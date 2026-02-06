import Hero from '../Components/Hero/Hero'
import Games from '../Components/Games/Games'
import LegoProjects from '../Components/LegoProjects/LegoProjects'
import Bio from '../Components/Bio/Bio'
import Skills from '../Components/Skills/Skills'

const Home = () => {
  return (
    <div>
      <Hero />
      <Bio />
      <Skills />
      <Games />
      <LegoProjects />
    </div>
  )
}

export default Home
