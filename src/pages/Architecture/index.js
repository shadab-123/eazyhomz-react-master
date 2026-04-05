import  { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import './architecture.scss'

const Architecture = () => {
  const [activeService, setActiveService] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [openContactForm, setOpenContactForm] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      id: 1,
      title: 'Residential Design',
      description: 'Transform your living spaces with innovative residential architecture that balances comfort and elegance.',
      icon: '🏠'
    },
    {
      id: 2,
      title: 'Commercial Architecture',
      description: 'Strategic commercial designs that maximize functionality and create inspiring work environments.',
      icon: '🏢'
    },
    {
      id: 3,
      title: 'Interior Planning',
      description: 'Seamless interior solutions that enhance spatial experiences and reflect your unique style.',
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Urban Design',
      description: 'Sustainable urban planning and community spaces that foster connection and innovation.',
      icon: '🏙️'
    }
  ]

  const projects = [
    {
      id: 1,
      title: 'Modern Minimalist Estate',
      category: 'Residential',
      description: 'A stunning contemporary residence featuring clean lines and sophisticated spaces.',
      details: 'A refined residential project with seamless indoor-outdoor flow, premium finishes, and minimalist geometry.',
      image: '/assets/images/dashboard-hero-image.jpg',
      color: '#2c3e50'
    },
    {
      id: 2,
      title: 'Urban Office Complex',
      category: 'Commercial',
      description: 'Professional office spaces designed for productivity and collaboration.',
      details: 'A dynamic office campus planned with flexible work zones, sculptural facades, and abundant natural light.',
      image: '/assets/images/bedroom/Bedroom Design 4.jpg',
      color: '#34495e'
    },
    {
      id: 3,
      title: 'Luxury Apartment Tower',
      category: 'Residential',
      description: 'Iconic high-rise combining luxury living with architectural excellence.',
      details: 'A premium tower that blends elegant materials with panoramic views and curated communal amenities.',
      image: '/assets/images/kitchen/Kitchen Design 1.jpg',
      color: '#1a252f'
    },
    {
      id: 4,
      title: 'Cultural Center',
      category: 'Public',
      description: 'Innovative cultural hub designed to inspire and engage communities.',
      details: 'A bold public building with fluid circulation, expressive geometry, and spaces for exhibitions and events.',
      image: '/assets/images/bathroom/Bathroom Design 11.jpg',
      color: '#3d4a5c'
    },
    {
      id: 5,
      title: 'Sustainable Retail Space',
      category: 'Commercial',
      description: 'Eco-friendly retail environment with modern architectural elements.',
      details: 'A sustainable retail workspace with green terraces, natural materials, and optimized storefront visibility.',
      image: '/assets/images/study room/Study Room Design 14.jpg',
      color: '#2d3b47'
    },
    {
      id: 6,
      title: 'Wellness Resort',
      category: 'Hospitality',
      description: 'Serene spaces designed for relaxation and holistic well-being.',
      details: 'A resort concept centered around calm landscapes, wellness amenities, and timeless architectural forms.',
      image: '/assets/images/bedroom/Bedroom Design 10.jpg',
      color: '#304452'
    }
  ]

  const handleProjectSelect = (project) => {
    setSelectedProject(project)
  }

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      title: 'CEO, Modern Living Inc.',
      text: 'The architectural vision transformed our space into something truly exceptional. Attention to detail and professional execution.',
      rating: 5
    },
    {
      id: 2,
      name: 'James Chen',
      title: 'Property Developer',
      text: 'Outstanding design approach and comprehensive project management. They delivered beyond expectations.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      title: 'Interior Designer',
      text: 'Collaborating with this team was seamless. Their architectural insights enhanced every aspect of our projects.',
      rating: 5
    }
  ]

  return (
    <Layout>
      <div className="architecture-new">
        {/* Sticky Navigation */}
        <nav className={`arch-sticky-nav ${scrollY > 100 ? 'active' : ''}`}>
          <div className="arch-nav-container">
            <a href="#top" className="arch-nav-logo">Architecture</a>
            <div className="arch-nav-links">
              <a href="#portfolio">Portfolio</a>
              <a href="#services">Services</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
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
                <div className="arch-philosophy-points">
                  <div className="arch-point">
                    <span className="arch-point-icon">◆</span>
                    <h3>Innovation</h3>
                    <p>Pushing boundaries with contemporary design solutions</p>
                  </div>
                  <div className="arch-point">
                    <span className="arch-point-icon">◆</span>
                    <h3>Sustainability</h3>
                    <p>Designing with environmental consciousness and responsibility</p>
                  </div>
                  <div className="arch-point">
                    <span className="arch-point-icon">◆</span>
                    <h3>Functionality</h3>
                    <p>Balancing aesthetics with practical, livable spaces</p>
                  </div>
                </div>
              </div>
              <div className="arch-about-visual">
                <div className="arch-about-box"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="arch-services">
          <div className="arch-container">
            <h2 className="arch-section-title">Our Services</h2>
            <p className="arch-section-subtitle">Comprehensive architectural solutions tailored to your needs</p>
            
            <div className="arch-services-grid">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`arch-service-card ${activeService === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="arch-service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="arch-service-line"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="arch-portfolio">
          <div className="arch-container">
            <h2 className="arch-section-title">Featured Projects</h2>
            <p className="arch-section-subtitle">Explore our architectural masterpieces</p>

            <div className="arch-portfolio-grid">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`arch-project-card ${selectedProject?.id === project.id ? 'active' : ''}`}
                  onClick={() => handleProjectSelect(project)}
                >
                  <div className="arch-project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="arch-project-overlay">
                      <span className="arch-project-category">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </div>
                  <div className="arch-project-content">
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                    <button className="arch-project-view-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>

            {selectedProject && (
              <div className="arch-project-details">
                <div className="arch-project-details-card">
                  <span className="arch-project-category">{selectedProject.category}</span>
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.details}</p>
                  <p>{selectedProject.description}</p>
                  <button type="button" className="arch-project-close" onClick={() => setSelectedProject(null)}>
                    Close Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="arch-testimonials">
          <div className="arch-container">
            <h2 className="arch-section-title">Client Testimonials</h2>
            <p className="arch-section-subtitle">What our clients say about our work</p>
            
            <div className="arch-testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="arch-testimonial-card">
                  <div className="arch-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="arch-testimonial-text">"{testimonial.text}"</p>
                  <div className="arch-testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA/Contact Section */}
        <section id="contact" className="arch-cta">
          <div className="arch-container">
            <div className="arch-cta-content">
              <h2>Ready to Transform Your Space?</h2>
              <p>Let's discuss your architectural vision and bring it to life</p>
              <button 
                className="arch-cta-button"
                onClick={() => setOpenContactForm(true)}
              >
                Get Started Today
              </button>
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
