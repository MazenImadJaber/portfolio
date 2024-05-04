import "./App.css";
import { BrowserRouter as Router, Route, Routes ,NavLink} from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [repos, setRepos] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio repos={repos} setRepos={setRepos}/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
