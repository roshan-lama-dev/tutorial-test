import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assest/img/logo.svg";
import navIcon1 from "../assest/img/nav-icon1.svg";
import navIcon2 from "../assest/img/nav-icon2.svg";
import navIcon3 from "../assest/img/nav-icon3.svg";
export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  // we are changing the backgrouund of the section when the use scrolls the webpage. So to detect whether the use has scrolled or not we use the useState hooks to keep track
  const [scrolled, setScrolled] = useState(false);

  // and then we create a useEffect that actually determines wether there is scrolling or not
  // [] fires the function on mount
  useEffect(() => {
    const onScroll = () => {
      // window.scroll Y calculates the y axis postion of the screen
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    // remnocvew the widow scroll event listener whe n thhe componnet gets rtemove from the dom
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // onClick functon on the cliock to uipdate the use State value as per the clicked
  const onUpdateActiveLink = (link) => {
    // inseated of doing this i need can directly pass the paramter to the setLink state
    // if (link === "skills") {
    //   setActiveLink(link);
    // } else if (link === "projects") {
    //   setActiveLink(link);
    // }

    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img alt="Logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon">trtrt</span>{" "}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* we give the link a conditional className base on the clicked state of the link, which we have created on the useState. As on the useState we have entered the clicked names as a paramerter. We will also create a on Click listnener that allows us to update the state informatio as per the clicked item */}

            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Project
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />{" "}
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />{" "}
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />{" "}
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Lets connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
