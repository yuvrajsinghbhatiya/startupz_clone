import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src='/images/navlogo.png' alt="Startup Z Logo" className="navbar-logo-img" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Startup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Investors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>

            {!click && (
              <li>
                <Link
                  to="/"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Log In
                </Link>
                <Link
                  to="/"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Add Listing
                </Link>
              </li>
            )}
          </ul>
          {button && !click && (
            <>
            <div className='button-group'>
              <Button buttonStyle='btn--outline'>Log In</Button>
              <Button buttonStyle='btn--outline'>Add Listing</Button>
            </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
