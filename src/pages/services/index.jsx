import React from 'react';
import './style.css'; 

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <i className="fas fa-laptop-code"></i>
          <h3>Technological Products</h3>
          <p>Top quality products in the field of technology</p>
        </div>
        <div className="service-card">
          <i className="fas fa-mobile-alt"></i>
          <h3>Artificial Intelligence</h3>
          <p>Products created with artificial intelligence</p>
        </div>
        <div className="service-card">
          <i className="fas fa-chart-bar"></i>
          <h3>Customer First</h3>
          <p>Discounts and installments without interest</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
