import "./App.css";
import Navbar from "./components/Navbar.js";
import PreNavbar from "./components/PreNavbar.js";
import Slider from "./components/Slider.js";
import { banner } from "./data/data.json";
// import { Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={banner.starts} />
    </Router>
  );
}

export default App;
