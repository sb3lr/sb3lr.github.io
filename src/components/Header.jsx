import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ data }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="main-header">
      <Link to="/madar" className="site-logo">
        M<span className="red">a</span>dar
      </Link>
      <nav className={`main-nav ${isNavOpen ? 'active' : ''}`} id="main-nav">
        <ul>
          {data.navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={link.active ? 'active' : ''}
                onClick={() => setIsNavOpen(false)} // Close nav on link click for mobile
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div id="burger-icon" onClick={toggleNav}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
}

export default Header;
