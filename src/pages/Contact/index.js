import React from 'react';
import Layout from '../../components/Layout';
import FormComponent from '../../components/Form';
import './contact.scss';

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Get in touch for your interior design needs.</p>
        <FormComponent />
      </div>
    </Layout>
  );
};

export default Contact;