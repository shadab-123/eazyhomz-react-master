import React from 'react';
import './testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', text: 'Amazing service!', image: 'https://cloudyfoundation.org.uk/wp-content/uploads/2021/01/male.png' },
    { name: 'Jane Smith', text: 'Transformed my home beautifully.', image: 'https://img.freepik.com/premium-photo/young-smiling-woman-ann-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_1240525-12753.jpg' },
  ];

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <img src={t.image} alt={t.name} />
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;