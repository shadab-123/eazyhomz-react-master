import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { ROUTES } from '../../utils/constants'
import './interior.scss'

const InteriorDesign = () => {
  const [scrollY, setScrollY] = useState(0)
  const [activeCategory, setActiveCategory] = useState(null)
  const [openContactForm, setOpenContactForm] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const portfolioCategories = [
    {
      id: 1,
      title: 'Living Area',
      description: 'Elegant spaces for relaxation and social connection.',
      image: '/assets/images/living%20room/Living%20Room%20Design%201.jpg',
      route: ROUTES.LIVING_AREA,
      tag: 'Popular'
    },
    {
      id: 2,
      title: 'Kitchen',
      description: 'Modern kitchens that inspire culinary creativity.',
      image: '/assets/images/kitchen/Kitchen%20Design%201.jpg',
      route: ROUTES.KITCHEN,
      tag: 'Trending'
    },
    {
      id: 3,
      title: 'Bedroom',
      description: 'Serene sanctuaries crafted for ultimate comfort.',
      image: '/assets/images/bedroom/Bedroom%20Design%201.jpg',
      route: ROUTES.BEDROOM,
      tag: ''
    },
    {
      id: 4,
      title: 'Bathroom',
      description: 'Luxurious designs that transform daily routines.',
      image: '/assets/images/bathroom/Bathroom%20Design%201.jpg',
      route: ROUTES.BATHROOM,
      tag: 'Luxury'
    },
    {
      id: 5,
      title: 'Kids Room',
      description: 'Playful spaces that spark imagination and joy.',
      image: '/assets/images/kids%20room/Kids%20Room%20Design%201.jpg',
      route: ROUTES.KIDS_ROOM,
      tag: 'Fun'
    },
    {
      id: 6,
      title: 'Study Room',
      description: 'Focused environments for productivity and creativity.',
      image: '/assets/images/study%20room/Study%20Room%20Design%201.jpg',
      route: ROUTES.STUDY_ROOM,
      tag: ''
    },
    {
      id: 7,
      title: 'TV Unit',
      description: 'Contemporary entertainment hubs with stunning design.',
      image: '/assets/images/tv%20unit/TV%20Unit%20Design%201.jpg',
      route: ROUTES.TV_UNIT,
      tag: ''
    },
    {
      id: 8,
      title: 'Wardrobe',
      description: 'Smart storage solutions that blend style with function.',
      image: '/assets/images/wardrobe/Wardrobe%20Design%201.jpg',
      route: ROUTES.WARDROBE,
      tag: 'Smart'
    }
  ]

  const menuCategories = [
    {
      id: 1,
      text: 'Full Home Interior',
      description: 'Complete home transformation from concept to completion',
      route: ROUTES.KITCHEN,
      icon: '🏡'
    },
    {
      id: 2,
      text: 'Bedroom Ideas',
      description: 'Curated bedroom designs for every taste and budget',
      route: ROUTES.BEDROOM,
      icon: '🛏️'
    },
    {
      id: 3,
      text: 'Kitchen Ideas',
      description: 'From modular to luxury kitchen solutions',
      route: ROUTES.KITCHEN,
      icon: '🍳'
    },
    {
      id: 4,
      text: 'Bathroom Ideas',
      description: 'Spa-inspired bathroom designs for your home',
      route: ROUTES.BATHROOM,
      icon: '🚿'
    },
    {
      id: 5,
      text: 'Kids Room Design',
      description: 'Creative spaces that grow with your children',
      route: ROUTES.KIDS_ROOM,
      icon: '🧸'
    },
    {
      id: 6,
      text: 'Study Room Design',
      description: 'Inspiring study environments for focus and creativity',
      route: ROUTES.STUDY_ROOM,
      icon: '📚'
    }
  ]

  return (
    <Layout>
      <div className="interior-new">

        {/* Sticky Sub-Navigation */}
        <nav className={`int-sticky-nav ${scrollY > 100 ? 'active' : ''}`}>
          <div className="int-nav-container">
            <a href="#int-top" className="int-nav-logo">Interior Design</a>
            <div className="int-nav-links">
              <a href="#int-portfolio">Portfolio</a>
              <a href="#int-categories">Browse</a>
              <a href="#int-contact">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="int-top" className="int-hero">
          <div className="int-hero-content">
            <div className="int-hero-text">
              <span className="int-hero-tag">Interior Design</span>
              <h1 className="int-hero-title">
                Crafting Spaces<br />That Tell Your Story
              </h1>
              <p className="int-hero-subtitle">
                From cozy living rooms to dream kitchens — we design interiors that reflect your personality and elevate everyday living.
              </p>
              <div className="int-hero-actions">
                <button className="int-hero-cta" onClick={() => setOpenContactForm(true)}>
                  Start Your Journey
                </button>
                <a href="#int-portfolio" className="int-hero-explore">
                  Explore Designs ↓
                </a>
              </div>
            </div>
            <div className="int-hero-visual">
              <div className="int-hero-image-stack">
                <div
                  className="int-hero-img int-hero-img-1"
                  style={{ backgroundImage: "url('/assets/images/living%20room/Living%20Room%20Design%202.jpg')" }}
                ></div>
                <div
                  className="int-hero-img int-hero-img-2"
                  style={{ backgroundImage: "url('/assets/images/kitchen/Kitchen%20Design%203.jpg')" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* About / Philosophy Section */}
        <section className="int-about">
          <div className="int-container">
            <div className="int-about-content">
              <div className="int-about-text">
                <h2 className="int-section-title">Our Design Philosophy</h2>
                <p className="int-section-subtitle">
                  We believe every room should reflect the people who live in it. Our designers blend functionality with artistry to create spaces that inspire.
                </p>
                <div className="int-philosophy-points">
                  <div className="int-point">
                    <span className="int-point-icon">✦</span>
                    <div>
                      <h3>Personalized</h3>
                      <p>Every design is uniquely tailored to your lifestyle and preferences</p>
                    </div>
                  </div>
                  <div className="int-point">
                    <span className="int-point-icon">✦</span>
                    <div>
                      <h3>Quality Craft</h3>
                      <p>Premium materials and skilled craftsmanship in every project</p>
                    </div>
                  </div>
                  <div className="int-point">
                    <span className="int-point-icon">✦</span>
                    <div>
                      <h3>Timeless</h3>
                      <p>Designs that stand the test of time with enduring elegance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="int-about-visual">
                <div
                  className="int-about-box"
                  style={{ backgroundImage: "url('/assets/images/bedroom/Bedroom%20Design%205.jpg')" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="int-portfolio" className="int-portfolio">
          <div className="int-container">
            <h2 className="int-section-title int-text-center">Our Interior Spaces</h2>
            <p className="int-section-subtitle int-text-center">Explore our range of beautifully designed interior solutions</p>

            <div className="int-portfolio-grid">
              {portfolioCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.route}
                  className={`int-portfolio-card ${activeCategory === cat.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <div className="int-card-image">
                    <img src={cat.image} alt={cat.title} loading="lazy" />
                    <div className="int-card-overlay">
                      {cat.tag && <span className="int-card-tag">{cat.tag}</span>}
                      <h3>{cat.title}</h3>
                      <p>{cat.description}</p>
                      <span className="int-card-arrow">Explore →</span>
                    </div>
                  </div>
                  <div className="int-card-info">
                    <h4>{cat.title}</h4>
                    <span className="int-card-link">View Designs →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Browse By Category Section (replaces dropdown) */}
        <section id="int-categories" className="int-categories">
          <div className="int-container">
            <h2 className="int-section-title int-text-center">Browse By Style</h2>
            <p className="int-section-subtitle int-text-center">
              Find your perfect interior design style from our curated collections
            </p>

            <div className="int-menu-grid">
              {menuCategories.map((item) => (
                <Link key={item.id} to={item.route} className="int-menu-card">
                  <div className="int-menu-icon">{item.icon}</div>
                  <div className="int-menu-content">
                    <h3>{item.text}</h3>
                    <p>{item.description}</p>
                    <span className="int-menu-cta">Explore Collection →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="int-contact" className="int-cta">
          <div className="int-container">
            <div className="int-cta-content">
              <h2>Ready to Transform Your Home?</h2>
              <p>Let's create a space that perfectly captures your vision and lifestyle</p>
              <button className="int-cta-button" onClick={() => setOpenContactForm(true)}>
                Book Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form Modal */}
        {openContactForm && (
          <div className="int-modal-overlay" onClick={() => setOpenContactForm(false)}>
            <div className="int-modal" onClick={(e) => e.stopPropagation()}>
              <button className="int-modal-close" onClick={() => setOpenContactForm(false)}>✕</button>
              <h2>Tell Us About Your Home</h2>
              <form className="int-contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Your Phone" />
                <select defaultValue="">
                  <option value="" disabled>Select Room Type</option>
                  <option value="living">Living Area</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="bedroom">Bedroom</option>
                  <option value="bathroom">Bathroom</option>
                  <option value="full">Full Home</option>
                </select>
                <textarea placeholder="Describe your vision..." rows="4"></textarea>
                <button type="submit" className="int-form-submit">Send Message</button>
              </form>
            </div>
          </div>
        )}

      </div>
    </Layout>
  )
}

export default InteriorDesign
