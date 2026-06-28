import { useState, useEffect, useCallback } from 'react'
import Layout from '../../components/Layout'
import './projects.scss'

const projects = [
  {
    id: 1,
    name: 'Abu Dhabi, (750 Sq.M)',
    category: 'The Bronze House',
    description: 'A contemporary luxury villa defined by grand proportions, elegant symmetry, and refined materiality. Natural stone, bronze-toned architectural fins, and expansive glazing create a timeless façade, while double-height spaces and seamless indoor-outdoor connections enhance the living experience. Designed to balance privacy, prestige, and modern family living.',
    thumbnail: '/assets/1. The Bronze House/1.jpg',
    images: [
      '/assets/1. The Bronze House/1.jpg',
      '/assets/1. The Bronze House/2.jpg',
      '/assets/1. The Bronze House/3.jpg',
      '/assets/1. The Bronze House/4.jpg',
      '/assets/1. The Bronze House/5.jpg',
    ],
  },
  {
    id: 2,
    name: 'Qatar, (600 Sq.M)',
    category: 'Villa Atrio',
    description: 'A contemporary villa designed around a serene internal courtyard, creating a seamless connection between architecture, nature, and light. The design combines exposed concrete, warm timber finishes, and expansive glazing to deliver a timeless aesthetic while ensuring privacy, comfort, and a refined living experience.',
    thumbnail: '/assets/2. Villa Atrio/y0.jpg',
    images: [
      '/assets/2. Villa Atrio/y0.jpg',
      '/assets/2. Villa Atrio/y1.jpg',
      '/assets/2. Villa Atrio/y2.jpg',
      '/assets/2. Villa Atrio/y5.jpg',
      '/assets/2. Villa Atrio/y6.jpg',
    ],
  },
  {
    id: 3,
    name: 'Zambia, (2000 Sq.M)',
    category: 'Casa Terra Nova',
    description: 'A compact contemporary residence designed to maximize space, comfort, and natural light within a modest footprint. Clean architectural lines, carefully selected materials, and efficient planning create a modern home that balances functionality, elegance, and everyday living.',
    thumbnail: '/assets/3. Casa Terra Nova/1.jpg',
    images: [
      '/assets/3. Casa Terra Nova/1.jpg',
      '/assets/3. Casa Terra Nova/2.jpg',
      '/assets/3. Casa Terra Nova/3.jpg',
      '/assets/3. Casa Terra Nova/4.jpg',
      '/assets/3. Casa Terra Nova/5.jpg',
    ],
  },
  {
    id: 4,
    name: 'Zambia',
    category: 'Lusaka Luxe Villa',
    description: 'An elegant contemporary villa crafted on an 800 sq.m plot, seamlessly blending modern architecture with tranquil landscape living. Designed to elevate everyday experiences through refined spaces, natural light, and timeless sophistication.',
    thumbnail: '/assets/4. Lusaka Luxe Villa/1.jpg',
    images: [
      '/assets/4. Lusaka Luxe Villa/1.jpg',
      '/assets/4. Lusaka Luxe Villa/2.jpg',
      '/assets/4. Lusaka Luxe Villa/3.jpg',
      '/assets/4. Lusaka Luxe Villa/4.jpg'
    ],
  },
  {
    id: 5,
    name: 'Al Ain, UAE, (1,500 Sq.M)',
    category: 'Qasr Al Ain',
    description: 'A landmark luxury residence crafted on a 1,500 sq.m estate in Al Ain, where contemporary architecture meets refined Arabian elegance. Expansive living spaces, premium materials, and seamless indoor-outdoor experiences create a timeless sanctuary of sophistication.',
    thumbnail: '/assets/5. Qasr Al Ain/1.jpg',
    images: [
      '/assets/5. Qasr Al Ain/1.jpg',
      '/assets/5. Qasr Al Ain/2.jpg',
      '/assets/5. Qasr Al Ain/3.jpg',
      '/assets/5. Qasr Al Ain/4.jpg'
    ],
  },
  {
    id: 6,
    name: 'Qatar, (1,200 Sq.M)',
    category: 'Qasr Al Thuraya',
    description: 'A distinguished luxury residence designed on a 1,200 sq.m plot, combining contemporary architecture with refined Arabian elegance. Expansive living spaces, sculptural forms, and meticulously crafted landscapes create a timeless expression of prestige and sophistication.',
    thumbnail: '/assets/6. Qasr Al Thuraya/1.jpg',
    images: [
      '/assets/6. Qasr Al Thuraya/1.jpg',
      '/assets/6. Qasr Al Thuraya/2.jpg',
      '/assets/6. Qasr Al Thuraya/3.jpg',
      '/assets/6. Qasr Al Thuraya/4.jpg',
      '/assets/6. Qasr Al Thuraya/5.jpg'
    ],
  }
]

const ExpandableDesc = ({ text }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <p>
      <span className={expanded ? '' : 'ap-desc-clamp'}>{text}</span>
      <button
        className="ap-see-more"
        onClick={(e) => { e.stopPropagation(); setExpanded((v) => !v) }}
      >
        {expanded ? 'See less' : 'See more...'}
      </button>
    </p>
  )
}

const ArchitectureProjects = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const openProject = (project) => {
    setActiveProject(project)
    setSlideIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeProject = () => {
    setActiveProject(null)
    document.body.style.overflow = ''
  }

  const prevSlide = useCallback(() => {
    setSlideIndex((i) => (i === 0 ? activeProject.images.length - 1 : i - 1))
  }, [activeProject])

  const nextSlide = useCallback(() => {
    setSlideIndex((i) => (i === activeProject.images.length - 1 ? 0 : i + 1))
  }, [activeProject])

  useEffect(() => {
    const handleKey = (e) => {
      if (!activeProject) return
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'Escape') closeProject()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeProject, prevSlide, nextSlide])

  const blockEvent = (e) => e.preventDefault()

  return (
    <Layout>
      <div className="ap-page" onContextMenu={blockEvent}>
        <div className="ap-header">
          <h1>Our Projects</h1>
          <p>Explore our portfolio of architectural and interior design work</p>
        </div>

        <div className="ap-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="ap-card"
              onClick={() => openProject(project)}
            >
              <div className="ap-card-thumb" onContextMenu={blockEvent}>
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  draggable="false"
                  onContextMenu={blockEvent}
                  onDragStart={blockEvent}
                />
                <div className="ap-card-overlay">
                  <span className="ap-view-btn">View Project</span>
                </div>
                <div className="ap-img-guard" onContextMenu={blockEvent} />
              </div>
              <div className="ap-card-info">
                <span className="ap-category">{project.category}</span>
                <h3>{project.name}</h3>
                <ExpandableDesc text={project.description} />
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="ap-modal" onClick={closeProject}>
            <div className="ap-modal-inner" onClick={(e) => e.stopPropagation()}>
              <button className="ap-modal-close" onClick={closeProject}>✕</button>

              <div className="ap-slide-area" onContextMenu={blockEvent}>
                <button className="ap-arrow ap-arrow-left" onClick={prevSlide}>&#8249;</button>

                <div className="ap-slide-img-wrap" onContextMenu={blockEvent}>
                  <img
                    src={activeProject.images[slideIndex]}
                    alt={`${activeProject.name} ${slideIndex + 1}`}
                    draggable="false"
                    onContextMenu={blockEvent}
                    onDragStart={blockEvent}
                  />
                  <div className="ap-watermark">© EazyHomz</div>
                  <div className="ap-img-guard" onContextMenu={blockEvent} />
                </div>

                <button className="ap-arrow ap-arrow-right" onClick={nextSlide}>&#8250;</button>
              </div>

            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ArchitectureProjects
