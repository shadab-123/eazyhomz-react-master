import React, { useState } from 'react';
import Layout from '../../components/Layout';
import './contactUs.scss';

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactUs = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email.';
    }
    if (!form.subject.trim()) nextErrors.subject = 'Please add a subject.';
    if (!form.message.trim()) nextErrors.message = 'Please write a message.';

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setSent(true);
    setForm(initialState);
    setErrors({});

    window.setTimeout(() => {
      setSent(false);
    }, 4500);
  };

  return (
    <Layout>
      <main className="contact-us-page">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Contact</span>
            <h1>Let’s Build Something Together</h1>
            <p>
              Reach out to our architecture studio for premium residential and commercial design
              projects. We create spaces that feel modern, elegant, and timeless.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="contact-grid">
            <div className="contact-panel">
              <div className="panel-heading">
                <p className="panel-overline">Contact Information</p>
                <h2>Studio Office</h2>
                <p className="panel-copy">
                  Our team is available for consultations, proposals, and project planning. Visit us
                  or send a message and we’ll get back to you promptly.
                </p>
              </div>

              <ul className="info-list">
                <li>
                  <span className="icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <strong>Offices</strong>
                    <p>Dubai, UAE<br />Delhi, India</p>
                  </div>
                </li>
                <li>
                  <span className="icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <strong>Phone</strong>
                    <p>+971 553550259</p>
                  </div>
                </li>
                <li>
                  <span className="icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16v16H4z" />
                      <path d="M22 6 12 13 2 6" />
                    </svg>
                  </span>
                  <div>
                    <strong>Email</strong>
                    <p>care@eazyhomz.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-3.5L6 22l1.5-8.5L2 9h7l3-7z" />
                    </svg>
                  </span>
                  <div>
                    <strong>Hours</strong>
                    <p>Mon – Fri: 9:00 AM to 6:00 PM</p>
                  </div>
                </li>
              </ul>

              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">Behance</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </div>

            <div className="contact-panel contact-form-panel">
              <div className="panel-heading panel-heading--small">
                <p className="panel-overline">Get In Touch</p>
                <h2>Send a Message</h2>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  <label className="input-group">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                    {errors.name && <small className="error-text">{errors.name}</small>}
                  </label>

                  <label className="input-group">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                    {errors.email && <small className="error-text">{errors.email}</small>}
                  </label>

                  <label className="input-group">
                    <span>Phone (optional)</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 0188"
                    />
                  </label>

                  <label className="input-group">
                    <span>Subject</span>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, consultation, etc."
                    />
                    {errors.subject && <small className="error-text">{errors.subject}</small>}
                  </label>
                </div>

                <label className="input-group">
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us about your project and goals."
                  />
                  {errors.message && <small className="error-text">{errors.message}</small>}
                </label>

                <div className="form-actions">
                  <button type="submit" className="primary-button">
                    Send Message
                  </button>
                  {sent && <span className="form-success">Message sent successfully.</span>}
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="section-heading">
            <p className="section-overline">Office Location</p>
            <h2>Visit Us</h2>
          </div>
          <div className="map-frame">
            <iframe
              title="Office Location"
              src="https://maps.google.com/maps?q=Dubai%2C+UAE&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>

        <section className="cta-section">
          <div>
            <p className="cta-label">Ready to start your next project?</p>
            <h3>Let's connect and turn your vision into elegant architectural space.</h3>
          </div>
          <a href="mailto:care@eazyhomz.com" className="cta-link">
            Email Us
          </a>
        </section>
      </main>
    </Layout>
  );
};

export default ContactUs;
