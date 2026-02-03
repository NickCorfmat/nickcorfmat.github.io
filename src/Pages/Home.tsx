import Hero from '../Components/Hero/Hero'
import Games from '../Components/Games/Games'
import LegoProjects from '../Components/LegoProjects/LegoProjects'
import Bio from '../Components/Bio/Bio'

const Home = () => {
  return (
    <div>
      <Hero />
      <Bio />
      <Games />
      <LegoProjects />
    </div>
  )
}

export default Home
