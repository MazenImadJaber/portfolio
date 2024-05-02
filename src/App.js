import './App.css';
import { BrowserRouter as Router,
  Route,
  Routes,
  NavLink } from 'react-router-dom'
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';

function App() {
  return (

    <Router>
    <div className="App">
     <nav>
       <ul>
         <li>
         <NavLink to="/">Home</NavLink>
         </li>
         <li>
         <NavLink to="/about">About</NavLink>
         </li>
         <li>
         <NavLink to="/resume">Resume</NavLink>
         </li>
         <li>
         <NavLink to="/portfolio">Portfolio</NavLink>
         </li>
       </ul>
     </nav>
    </div>
    <Routes>
     {/* <Route path='/' element={<Home/>}/> */}
     <Route path='/' element={<Home />}/>
     <Route path='/about'element={<About />}/>
     <Route path='/resume' element={<Resume/>}/>
     <Route path='/portfolio' element={<Portfolio/>}/>
    </Routes>
 </Router>
  );
}

export default App;
