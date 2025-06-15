import React from 'react';

function Footer({ data }) {
  return (
    <footer className="main-footer">
      <div className="social-links">
        {data.socialLinks.map((link, index) => (
          <a key={index} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
      <p className="copyright">{data.copyright}</p>
    </footer>
  );
}

export default Footer;