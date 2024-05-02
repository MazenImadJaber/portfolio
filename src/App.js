import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
  Route,
  Routes,
  NavLink } from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
     <Route path='/' />
     <Route path='/about'/>
     <Route path='/resume' />
     <Route path='/portfolio'/>
    </Routes>
 </Router>
  );
}

export default App;
