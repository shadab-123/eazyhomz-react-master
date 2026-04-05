import React, { useState, useMemo } from 'react';
import Layout from '../../components/Layout';
import './blog.scss';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Minimalism in Residential Architecture',
    excerpt: 'Explore how minimalist design principles create spacious, serene living environments that prioritize function and elegance.',
    image: '/assets/images/bedroom/Cover Page.jpg',
    author: 'Sarah Mitchell',
    date: 'March 28, 2024',
    category: 'Residential',
    featured: true,
    content: 'Full article content here...',
  },
  {
    id: 2,
    title: 'Sustainable Materials in Modern Design',
    excerpt: 'Discover eco-friendly materials that don\'t compromise on aesthetics or durability in contemporary architecture.',
    image: '/assets/images/kitchen/Kitchen Design 1.jpg',
    author: 'James Chen',
    date: 'March 20, 2024',
    category: 'Sustainability',
    featured: false,
    content: 'Full article content here...',
  },
  {
    id: 3,
    title: 'Urban Planning for Smart Cities',
    excerpt: 'How integrated design and technology are shaping the future of urban living spaces.',
    image: '/assets/images/living room/Living Room Design 1.jpg',
    author: 'Emma Rodriguez',
    date: 'March 15, 2024',
    category: 'Urban Planning',
    featured: false,
    content: 'Full article content here...',
  },
  {
    id: 4,
    title: 'Commercial Spaces That Inspire',
    excerpt: 'Creating dynamic commercial environments that enhance productivity and employee well-being.',
    image: '/assets/images/living room/Living Room Design 4.jpg',
    author: 'Michael Park',
    date: 'March 10, 2024',
    category: 'Commercial',
    featured: false,
    content: 'Full article content here...',
  },
  {
    id: 5,
    title: 'Interior Design Trends 2024',
    excerpt: 'The latest color palettes, materials, and spatial arrangements defining contemporary interiors.',
    image: '/assets/images/wardrobe/Wardrobe Design 1.jpg',
    author: 'Lisa Wang',
    date: 'March 5, 2024',
    category: 'Interior Design',
    featured: false,
    content: 'Full article content here...',
  },
  {
    id: 6,
    title: 'Ergonomic Home Office Design',
    excerpt: 'Transform your workspace into a productive, comfortable, and aesthetically pleasing environment.',
    image: '/assets/images/study room/Study Room Design 1.jpg',
    author: 'David Brown',
    date: 'February 28, 2024',
    category: 'Residential',
    featured: false,
    content: 'Full article content here...',
  },
  {
    id: 7,
    title: 'Commercial Retail Innovation',
    excerpt: 'How innovative design drives customer engagement and sales in retail environments.',
    image: '/assets/images/bathroom/Bathroom Design 1.jpg',
    author: 'Sophie Laurent',
    date: 'February 22, 2024',
    category: 'Commercial',
    featured: false,
    content: 'Full article content here...',
  },
  {
    id: 8,
    title: 'Green Building Certification Guide',
    excerpt: 'Understanding LEED and other certifications for sustainable architectural projects.',
    image: '/assets/images/bedroom/Cover Page.jpg',
    author: 'Marcus Johnson',
    date: 'February 15, 2024',
    category: 'Sustainability',
    featured: false,
    content: 'Full article content here...',
  },
];

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Interior Design', 'Urban Planning', 'Sustainability'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [postsToShow, setPostsToShow] = useState(6);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedPosts = filteredPosts.slice(0, postsToShow);
  const featuredPost = BLOG_POSTS.find((post) => post.featured);

  return (
    <Layout>
      <main className="blog-page">
        <section className="hero-section">
          <div className="hero-content">
            <span className="eyebrow">Our Blog</span>
            <h1>Insights & Ideas</h1>
            <p>Discover the latest trends, insights, and best practices in architecture and interior design.</p>
          </div>
        </section>

        {featuredPost && (
          <section className="featured-post-section">
            <div className="featured-container">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-content">
                <span className="featured-category">{featuredPost.category}</span>
                <h2>{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="featured-meta">
                  <span className="author">{featuredPost.author}</span>
                  <span className="separator">•</span>
                  <span className="date">{featuredPost.date}</span>
                </div>
                <button className="read-more-btn" type="button" onClick={() => window.scrollTo(0, 0)}>
                  Read Full Article
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="blog-controls-section">
          <div className="blog-controls-wrapper">
            <div className="search-bar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPostsToShow(6);
                }}
              />
            </div>

            <div className="categories-filter">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setPostsToShow(6);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-listing-section">
          {displayedPosts.length > 0 ? (
            <>
              <div className="blog-grid">
                {displayedPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card-image">
                      <img src={post.image} alt={post.title} />
                      <span className="category-tag">{post.category}</span>
                    </div>
                    <div className="blog-card-content">
                      <h3>{post.title}</h3>
                      <p className="excerpt">{post.excerpt}</p>
                      <div className="blog-card-meta">
                        <span className="author">{post.author}</span>
                        <span className="date">{post.date}</span>
                      </div>
                      <button className="read-more" type="button" onClick={() => window.scrollTo(0, 0)}>
                        Read More
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length > postsToShow && (
                <div className="load-more-wrapper">
                  <button
                    className="load-more-btn"
                    onClick={() => setPostsToShow((prev) => prev + 6)}
                  >
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="no-results">
              <p>No articles found matching your search. Try different keywords or filters.</p>
            </div>
          )}
        </section>

        <section className="newsletter-section">
          <div className="newsletter-container">
            <div className="newsletter-content">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest architecture insights and design trends delivered to your inbox.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Blog;
