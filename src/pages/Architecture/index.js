import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import './architecture.scss'
import { ROUTES } from '../../utils/constants'

const Architecture = () => {
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)
  const [openContactForm, setOpenContactForm] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout>
      <div className="architecture-new">
        {/* Sticky Navigation */}
        <nav className={`arch-sticky-nav ${scrollY > 100 ? 'active' : ''}`}>
          <div className="arch-nav-container">
            <a href="#top" className="arch-nav-logo">Architecture</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="top" className="arch-hero">
          <div className="arch-hero-content">
            <div className="arch-hero-text">
              <h1 className="arch-hero-title">Designing the Future</h1>
              <p className="arch-hero-subtitle">Innovative Architecture, Modern Living, Timeless Design</p>
              <button className="arch-hero-cta" onClick={() => setOpenContactForm(true)}>
                Start Your Project
              </button>
              <button className="arch-hero-cta arch-hero-cta--outline" onClick={() => navigate(ROUTES.ARCHITECTURE_PROJECTS)}>
                Explore Our Projects
              </button>
            </div>
            <div className="arch-hero-visual">
              <div className="arch-hero-shape"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="arch-about">
          <div className="arch-container">
            <div className="arch-about-content">
              <div className="arch-about-text">
                <h2 className="arch-section-title">Our Architectural Philosophy</h2>
                <p className="arch-section-subtitle">
                  We believe architecture is more than structures—it's about creating spaces that enrich lives and inspire possibilities.
                </p>
              </div>
              <div className="arch-about-visual">
                <div className="arch-about-box"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Modal */}
        {openContactForm && (
          <div className="arch-modal-overlay" onClick={() => setOpenContactForm(false)}>
            <div className="arch-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="arch-modal-close"
                onClick={() => setOpenContactForm(false)}
              >
                ✕
              </button>
              <h2>Tell Us About Your Project</h2>
              <form className="arch-contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Your Phone" />
                <textarea placeholder="Project Description" rows="4" required></textarea>
                <button type="submit" className="arch-form-submit">Send Message</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Architecture
