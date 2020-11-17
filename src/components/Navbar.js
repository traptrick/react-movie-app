import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <h1>Movie-Bible</h1>
        <p>
          <a
            href="https://github.com/traptrick/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
