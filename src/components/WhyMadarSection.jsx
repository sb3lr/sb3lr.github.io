import React from 'react';

function WhyMadarSection({ data }) {
  return (
    <section className="container why-madar-section">
      <h2 className="page-title">
        {data.title}
        <span style={{ color: 'var(--primary-color)' }}>{data.highlight}</span>
      </h2>
      <div className="why-madar-grid">
        {data.items.map((item, index) => (
          <div key={index} className="why-madar-item">
            <i className={`fa-solid ${item.icon}`}></i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyMadarSection;