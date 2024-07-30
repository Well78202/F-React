import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <div className='bg-blues position-fixed z-3 top-0 start-0 end-0'>
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand text-white bigText" to="/">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse CustomNavUl" id="navbarNav">
            <ul className="navbar-nav py-4 midText">
              <li className="nav-item">
                <Link className={`nav-link text-white ${location.pathname === "/about" ? 'active' : ''}`} to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-white ${location.pathname === "/portfolio" ? 'active' : ''}`} to="/portfolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-white ${location.pathname === "/contact" ? 'active' : ''}`} to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
