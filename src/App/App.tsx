import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import Resume from '../Pages/Resume';
import Contact from '../Pages/Contact';
import Footer from '../Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
