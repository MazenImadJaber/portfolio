import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./components/NavBarComp";
import {  Footer } from 'react-bootstrap';
function App() {
  return (
    <Router>
      <div className="App">
        {/* header */}
        <NavBarComp />
        {/* body */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
      <span>Email: mazenj1997@gmail.com</span> | <span>Phone: +1234567890</span><br/>
      © {new Date().getFullYear()} 
    </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
