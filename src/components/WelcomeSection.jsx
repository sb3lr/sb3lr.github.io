import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeSection({ data }) {
  return (
    <section className="container welcome-section">
      <h1 className="page-title">
        {data.title}
        <span style={{ color: 'var(--primary-color)' }}>{data.highlight}</span>
      </h1>
      <p className="intro-description" dangerouslySetInnerHTML={{ __html: data.description }}></p>
      <Link to={data.buttonLink} className="cta-button">
        {data.buttonText}
      </Link>
    </section>
  );
}

export default WelcomeSection;