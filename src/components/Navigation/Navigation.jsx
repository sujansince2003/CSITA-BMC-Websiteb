import React, { useState } from "react";
import IMG from "../../Assets/logohero.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import "./navigation.css";
import { Link, scrollSpy } from "react-scroll";
import { Links } from "../../data";
const Navigation = () => {
  window.onscroll = () => {
    let navbar = document.querySelector(".nav-area");
    if (window.scrollY > 720) {
      navbar.classList.add("toggle");
    } else {
      navbar.classList.remove("toggle");
    }
  };
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [hideHam, setHideHam] = useState(false);
  return (
    <div className="nav-area">
      <div className="logo">
        <img src={IMG} alt="" />
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          setHideHam(!hideHam);
        }}
      >
        {hideHam ? (
          <AiFillCloseSquare color="white" className="close-icon" />
        ) : (
          <GiHamburgerMenu color="white" className="ham-icon" />
        )}
      </button>
      <ul className={isNavExpanded ? "navlinks expanded" : "navlinks"}>
        {Links.map((link, id) => (
          <Link
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              setHideHam(!hideHam);
            }}
            className="link"
            key={`${link.title}-${id}`}
            to={link.path}
            Spy={true}
            activeClass="active"
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
