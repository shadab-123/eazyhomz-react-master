import React, { useState } from 'react'
import Layout from '../../components/Layout'
import './architecture.scss'
import Grid from '@mui/material/Unstable_Grid2'
import FormComponent from '../../components/Form'
import DialogModal from '../../components/Modal'

const Architecture = () => {
  const [openFormModal, setOpenFormModal] = useState(false)

  const handleModalFormOpen = () => {
    setOpenFormModal(true)
  }

  const handleModalFormClose = () => {
    setOpenFormModal(false)
  }

  const architectureFeatures = [
    {
      id: 1,
      icon: '🏗️',
      title: 'Architectural Design',
      description: 'We specialize in creating innovative architectural designs that blend aesthetics with functionality, tailored to your vision and requirements.'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Space Planning',
      description: 'Optimal space utilization and layout design to maximize functionality while maintaining beautiful, open-concept living areas.'
    },
    {
      id: 3,
      icon: '🛠️',
      title: 'Technical Drawings',
      description: 'Detailed technical and construction drawings prepared by our experienced architects ensuring precise implementation.'
    },
    {
      id: 4,
      icon: '🏠',
      title: '3D Visualization',
      description: 'Immersive 3D renderings and walkthroughs to help you visualize your space before construction begins.'
    },
    {
      id: 5,
      icon: '📐',
      title: 'Material Selection',
      description: 'Expert guidance on material selection and finishes that complement your design while staying within budget.'
    },
    {
      id: 6,
      icon: '🌟',
      title: 'Quality Assurance',
      description: 'Rigorous quality checks at every stage of the architectural process to ensure excellence and client satisfaction.'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We begin with an in-depth consultation to understand your vision, requirements, and budget.'
    },
    {
      step: 2,
      title: 'Conceptualization',
      description: 'Our team develops initial design concepts and sketches based on your input and project requirements.'
    },
    {
      step: 3,
      title: '3D Modeling',
      description: 'We create detailed 3D models and renderings to visualize the final design before execution.'
    },
    {
      step: 4,
      title: 'Final Drawings',
      description: 'Technical and construction drawings are prepared with precision for smooth implementation.'
    },
    {
      step: 5,
      title: 'Execution',
      description: 'Our team supervises the construction process ensuring all architectural details are executed perfectly.'
    },
    {
      step: 6,
      title: 'Completion',
      description: 'Final quality assurance and handover of your beautifully executed architectural project.'
    }
  ]

  return (
    <Layout>
      <div className="architecture">
        {/* Hero Section */}
        <div className='arch-hero'>
          <div className='arch-hero-overlay'>
            <h1 className='arch-hero-title'>Architecture Design</h1>
            <p className='arch-hero-subtitle'>Transforming Visions into Remarkable Spaces</p>
            <button className='arch-hero-btn' onClick={handleModalFormOpen}>
              Get Consultation
            </button>
          </div>
        </div>

        {/* Introduction Section */}
        <section className='arch-intro'>
          <div className='arch-intro-container'>
            <h2 className='arch-section-heading'>About Our Architecture Services</h2>
            <p className='arch-section-description'>
              At Eazy Homz, we believe that great architecture is more than just aesthetics—it's about creating spaces that enhance your lifestyle and stand the test of time. Our team of experienced architects combines innovative design thinking with practical expertise to deliver architectural solutions that exceed expectations. Whether you're planning a residential renovation, a new construction project, or a commercial space redesign, we have the expertise and creativity to bring your architectural vision to life.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className='arch-features'>
          <h2 className='arch-section-heading'>Our Architectural Expertise</h2>
          <Grid container spacing={3} className='arch-features-grid'>
            {architectureFeatures.map((feature) => (
              <Grid key={feature.id} xs={12} sm={6} md={4} className='arch-feature-item'>
                <div className='arch-feature-card'>
                  <div className='arch-feature-icon'>{feature.icon}</div>
                  <h3 className='arch-feature-title'>{feature.title}</h3>
                  <p className='arch-feature-description'>{feature.description}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </section>

        {/* Process Section */}
        <section className='arch-process'>
          <h2 className='arch-section-heading'>Our Design Process</h2>
          <p className='arch-process-subtitle'>A systematic approach to architectural excellence</p>
          <div className='arch-process-grid'>
            {processSteps.map((process) => (
              <div key={process.step} className='arch-process-card'>
                <div className='arch-process-number'>{process.step}</div>
                <h3 className='arch-process-title'>{process.title}</h3>
                <p className='arch-process-description'>{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className='arch-why-us'>
          <div className='arch-why-us-container'>
            <h2 className='arch-section-heading'>Why Choose Eazy Homz Architecture?</h2>
            <Grid container spacing={4} className='arch-why-us-grid'>
              <Grid xs={12} md={6} className='arch-why-us-item'>
                <h3 className='arch-why-us-title'>✓ Experienced Architects</h3>
                <p className='arch-why-us-text'>Our team brings years of experience in residential and commercial architectural projects.</p>
              </Grid>
              <Grid xs={12} md={6} className='arch-why-us-item'>
                <h3 className='arch-why-us-title'>✓ Innovative Design</h3>
                <p className='arch-why-us-text'>We stay updated with latest design trends and technologies to deliver contemporary solutions.</p>
              </Grid>
              <Grid xs={12} md={6} className='arch-why-us-item'>
                <h3 className='arch-why-us-title'>✓ Budget Conscious</h3>
                <p className='arch-why-us-text'>We work efficiently to deliver premium architectural services within your budget constraints.</p>
              </Grid>
              <Grid xs={12} md={6} className='arch-why-us-item'>
                <h3 className='arch-why-us-title'>✓ Client Focused</h3>
                <p className='arch-why-us-text'>Your satisfaction is our priority with transparent communication throughout the project.</p>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* CTA Section */}
        <section className='arch-cta'>
          <h2 className='arch-cta-heading'>Ready to Design Your Dream Space?</h2>
          <p className='arch-cta-subtitle'>Let's collaborate to create an architectural masterpiece</p>
          <button className='arch-cta-btn' onClick={handleModalFormOpen}>
            Get Free Consultation
          </button>
        </section>
      </div>

      {openFormModal && (
        <DialogModal
          open={openFormModal}
          onClose={handleModalFormClose}
          title=" "
        >
          <div className='esimation-form'>
            <FormComponent />
          </div>
        </DialogModal>
      )}
    </Layout>
  )
}

export default Architecture