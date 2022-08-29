import React from "react";
import "./Header.css"; // import css file
import CTA from "../CTA"; // import component
import ME from "../../assets/me.png";
import HeaderSocials from "../HeaderSocials";

function Header() {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ayomide Victor</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
