import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import About from '../Pages/About';
import Footer from '../Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
