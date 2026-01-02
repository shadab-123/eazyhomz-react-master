import React from 'react';
import Layout from '../../components/Layout';
import './portfolio.scss';

const Portfolio = () => {
  return (
    <Layout>
      <div className="portfolio-container">
        <h1>Our Portfolio</h1>
        <p>Showcasing our best interior design projects.</p>
        {/* Add portfolio gallery here */}
      </div>
    </Layout>
  );
};

export default Portfolio;