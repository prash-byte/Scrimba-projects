
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import About from './pages/About'
import Vans from './pages/Vans'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
         <Link to="/" className='main-logo'>#VANLIFE</Link>
        <nav>
         <Link to="/about">About</Link>   
         <Link to="/vans">Vans</Link>  
        </nav>
      </header>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
       </Routes>
       <footer>
         <h3>Ⓒ 2022 #VANLIFE</h3>
       </footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
