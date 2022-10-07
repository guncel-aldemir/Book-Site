import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Book from "../../Assets/Icons/NavbarIcon/book.svg";
import Toggle from "../../Assets/Icons/NavbarIcon/toogle.svg";
import "./Navbar.scss";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="container-fluid navbar-container">
      <div className="row row-navbar">
        <div className="col-md-4 logo">
          <img src={Book} alt=""/>
          <Link to="/">Book House</Link>
        </div>
        <div className="col-md-5 links-side">
          {(toggleMenu || screenWidth > 768) &&(
            <div className="links">
          <Link to="about">About</Link>
          <Link to="/Contact">Contact</Link>
          </div>
          )}
          <button className="btn-toggle" onClick={toggleNav}>
          <img src={Toggle} alt=""/>
        </button>
        </div>
        
      </div>
    </div>
  )
};

export default Navbar;
