import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Home/>}/>
          <Route path='/resume' element={<Home/>}/>
          <Route path='/contact' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
