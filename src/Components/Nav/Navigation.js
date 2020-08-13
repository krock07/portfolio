import React, { Component } from 'react';
import kslogo from "../../kslogo-01.svg";
import { Link, animateScroll as scroll } from "react-scroll";


class Navigation extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={kslogo}
            className="nav-logo"
            alt="Logo."
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link 
              activeClass="active"
              to="homepagesections"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                Portfolio
                </Link>
                </li>
           <li className="nav-item">
              <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
              </Link>
              </li>
              <li className="nav-item">
              <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
             About
              </Link>
              </li>
             
          </ul>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {

};

export default Navigation;