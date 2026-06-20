import { useState, useEffect, useCallback } from 'react'
import Layout from '../../components/Layout'
import './projects.scss'

const projects = [
  {
    id: 1,
    name: 'Residence Design',
    category: 'Residential',
    description: 'A meticulously crafted residential space blending modern aesthetics with functional living.',
    thumbnail: '/assets/G 6/G 1.bmp',
    images: [
      '/assets/G 6/G 1.bmp',
      '/assets/G 6/G 2.bmp',
      '/assets/G 6/G 3.bmp',
      '/assets/G 6/G 4.bmp',
      '/assets/G 6/G 5.bmp',
      '/assets/G 6/G 6.bmp',
    ],
  },
  {
    id: 2,
    name: 'Modern Bedroom Suite',
    category: 'Interior',
    description: 'Luxurious bedroom designs that redefine rest and relaxation with contemporary elegance.',
    thumbnail: '/assets/images/bedroom/Bedroom Design 1.jpg',
    images: [
      '/assets/images/bedroom/Bedroom Design 1.jpg',
      '/assets/images/bedroom/Bedroom Design 2.jpg',
      '/assets/images/bedroom/Bedroom Design 3.jpg',
      '/assets/images/bedroom/Bedroom Design 4.jpg',
      '/assets/images/bedroom/Bedroom Design 5.jpg',
      '/assets/images/bedroom/Bedroom Design 6.jpg',
    ],
  },
  {
    id: 3,
    name: 'Luxury Kitchen Design',
    category: 'Interior',
    description: 'Thoughtfully designed kitchens that combine premium materials with innovative spatial planning.',
    thumbnail: '/assets/images/kitchen/Kitchen Design 1.jpg',
    images: [
      '/assets/images/kitchen/Kitchen Design 1.jpg',
      '/assets/images/kitchen/Kitchen Design 2.jpg',
      '/assets/images/kitchen/Kitchen Design 3.jpg',
      '/assets/images/kitchen/Kitchen Design 4.jpg',
      '/assets/images/kitchen/Kitchen Design 5.jpg',
      '/assets/images/kitchen/Kitchen Design 6.jpg',
    ],
  },
  {
    id: 4,
    name: 'Contemporary Bathroom',
    category: 'Interior',
    description: 'Spa-inspired bathroom spaces crafted for comfort, hygiene, and visual sophistication.',
    thumbnail: '/assets/images/bathroom/Bathroom Design 1.jpg',
    images: [
      '/assets/images/bathroom/Bathroom Design 1.jpg',
      '/assets/images/bathroom/Bathroom Design 2.jpg',
      '/assets/images/bathroom/Bathroom Design 3.jpg',
      '/assets/images/bathroom/Bathroom Design 4.jpg',
      '/assets/images/bathroom/Bathroom Design 5.jpg',
      '/assets/images/bathroom/Bathroom Design 6.jpg',
    ],
  },
  {
    id: 5,
    name: 'Living Room Elegance',
    category: 'Interior',
    description: 'Open and inviting living spaces designed to foster connection and showcase refined taste.',
    thumbnail: '/assets/images/living room/Living Room Design 1.jpg',
    images: [
      '/assets/images/living room/Living Room Design 1.jpg',
      '/assets/images/living room/Living Room Design 10.jpg',
      '/assets/images/living room/Living Room Design 11.jpg',
      '/assets/images/living room/Living Room Design 12.jpg',
      '/assets/images/living room/Living Room Design 121.jpg',
      '/assets/images/living room/Living Room Design 122.jpg',
    ],
  },
  {
    id: 6,
    name: 'Study Room & Office',
    category: 'Interior',
    description: 'Productive and inspiring study environments designed for focus, clarity, and creative thinking.',
    thumbnail: '/assets/images/study room/Study Room Design 1.jpg',
    images: [
      '/assets/images/study room/Study Room Design 1.jpg',
      '/assets/images/study room/Study Room Design 2.jpg',
      '/assets/images/study room/Study Room Design 3.jpg',
      '/assets/images/study room/Study Room Design 4.jpg',
      '/assets/images/study room/Study Room Design 5.jpg',
      '/assets/images/study room/Study Room Design 6.jpg',
    ],
  },
  {
    id: 7,
    name: 'TV Unit & Media Wall',
    category: 'Interior',
    description: 'Sleek media wall and TV unit designs that anchor living spaces with style and functionality.',
    thumbnail: '/assets/images/tv unit/TV Unit Design 1.jpg',
    images: [
      '/assets/images/tv unit/TV Unit Design 1.jpg',
      '/assets/images/tv unit/TV Unit Design 2.jpg',
      '/assets/images/tv unit/TV Unit Design 3.jpg',
      '/assets/images/tv unit/TV Unit Design 4.jpg',
      '/assets/images/tv unit/TV Unit Design 5.jpg',
      '/assets/images/tv unit/TV Unit Design 6.jpg',
    ],
  },
  {
    id: 8,
    name: 'Wardrobe & Storage',
    category: 'Interior',
    description: 'Custom wardrobe solutions that maximise storage while adding a touch of elegance to any bedroom.',
    thumbnail: '/assets/images/wardrobe/Wardrobe Design 1.jpg',
    images: [
      '/assets/images/wardrobe/Wardrobe Design 1.jpg',
      '/assets/images/wardrobe/Wardrobe Design 2.jpg',
      '/assets/images/wardrobe/Wardrobe Design 3.jpg',
      '/assets/images/wardrobe/Wardrobe Design 4.jpg',
      '/assets/images/wardrobe/Wardrobe Design 5.jpg',
      '/assets/images/wardrobe/Wardrobe Design 6.jpg',
    ],
  },
  {
    id: 9,
    name: "Kids' Room Design",
    category: 'Residential',
    description: 'Vibrant and playful kids room concepts built for imagination, safety, and growing minds.',
    thumbnail: '/assets/images/kids room/Kids Room Design 1.jpg',
    images: [
      '/assets/images/kids room/Kids Room Design 1.jpg',
      '/assets/images/kids room/Kids Room Design 2.jpg',
      '/assets/images/kids room/Kids Room Design 3.jpg',
      '/assets/images/kids room/Kids Room Design 4.jpg',
      '/assets/images/kids room/Kids Room Design 5.jpg',
      '/assets/images/kids room/Kids Room Design 6.jpg',
    ],
  },
  {
    id: 10,
    name: 'Premium Villa Design',
    category: 'Residential',
    description: 'End-to-end villa design featuring bold architecture, curated interiors, and seamless outdoor flow.',
    thumbnail: '/assets/images/bedroom/Bedroom Design 10.jpg',
    images: [
      '/assets/images/bedroom/Bedroom Design 10.jpg',
      '/assets/images/kitchen/Kitchen Design 10.jpg',
      '/assets/images/bathroom/Bathroom Design 10.jpg',
      '/assets/images/living room/Living Room Design 10.jpg',
      '/assets/images/study room/Study Room Design 10.jpg',
      '/assets/images/tv unit/TV Unit Design 10.jpg',
    ],
  },
]

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
                <p>{project.description}</p>
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

              <div className="ap-slide-info">
                <h3>{activeProject.name}</h3>
                <span>{slideIndex + 1} / {activeProject.images.length}</span>
              </div>

              <div className="ap-thumbnails" onContextMenu={blockEvent}>
                {activeProject.images.map((img, i) => (
                  <div
                    key={i}
                    className={`ap-thumb ${i === slideIndex ? 'active' : ''}`}
                    onClick={() => setSlideIndex(i)}
                    onContextMenu={blockEvent}
                  >
                    <img
                      src={img}
                      alt={`thumb ${i + 1}`}
                      draggable="false"
                      onContextMenu={blockEvent}
                      onDragStart={blockEvent}
                    />
                    <div className="ap-img-guard" onContextMenu={blockEvent} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ArchitectureProjects
