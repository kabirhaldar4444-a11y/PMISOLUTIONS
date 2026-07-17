import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import { popularPrograms, professionalCatalog, courseDetailMap } from '../data/coursesData';
import { FaGraduationCap, FaAward, FaSearch, FaClock, FaCheckCircle, FaLaptop, FaUserTie, FaBuilding, FaGlobe, FaTag } from 'react-icons/fa';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Helper: resolve each course's unique hero image from the central courseDetailMap
  const FALLBACK_IMG = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80";
  const getCourseImage = (id) => {
    const detail = courseDetailMap[id];
    if (detail && detail.image) return detail.image;
    return FALLBACK_IMG;
  };

  // Compile entire catalog list uniquely based on professionalCatalog, flagging popular ones
  const popularIds = popularPrograms.map(p => p.id);
  const catalogList = professionalCatalog.flatMap(cat =>
    cat.courses.map(course => {
      const isPopular = popularIds.includes(course.id);
      return {
        ...course,
        category: cat.category,
        sub: isPopular ? "Popular" : "General",
        image: getCourseImage(course.id),
        description: course.description || courseDetailMap[course.id]?.subtitle || `Advance your professional skills with ${course.title}.`,
        price: course.price || courseDetailMap[course.id]?.price || '',
        duration: courseDetailMap[course.id]?.duration || '20–35 Hours'
      };
    })
  );

  // Filtering criteria
  const filteredCourses = catalogList.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (activeTab === 'All') return true;
    if (activeTab === 'Popular') return course.sub === 'Popular';
    return course.category === activeTab;
  });

  // Extract all categories
  const categories = ['All', 'Popular', ...new Set(catalogList.map(c => c.category))];

  return (
    <div className="courses-page-luxury" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark)', overflow: 'hidden', paddingTop: '100px' }}>
      
      {/* Background aurora effect */}
      <div className="aurora-mesh">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* 1. Header */}
      <section className="page-header py-xl text-center">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.35rem 0.95rem', borderRadius: '50px', marginBottom: '1rem' }}>
            <span className="badge-glow" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }}></span>
            <span className="badge-text" style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Learning Dashboard</span>
          </div>
          
          <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
            Curated Certification <span className="text-glow-orange" style={{ background: 'linear-gradient(135deg, #FF7A00 0%, #FF9E2A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Catalog</span>
          </h1>
          
          <p className="lead-p" style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '850px', margin: '0 auto' }}>
            Search globally accredited preparation tracks, diagnostic pre-assessment models, and executive toolkits to advance your team’s delivery standards.
          </p>

          {/* Search bar widget */}
          <div className="search-bar-wrapper my-xl">
            <FaSearch className="search-icon text-muted" style={{ marginRight: '8px' }} />
            <input 
              type="text" 
              placeholder="Search courses, frameworks, or credentials..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 2. Main course directory grid and sidebar filters */}
      <section className="courses-directory-section py-xl">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Categories slider */}
          <div className="category-scroll-container flex gap-xs my-md" style={{ overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '1rem' }}>
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`luxury-tab-btn ${activeTab === cat ? 'active' : ''}`}
                style={{ flexShrink: 0 }}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course grid */}
          <div className="courses-catalog-grid grid grid-3">
            {filteredCourses.map((c, idx) => (
              <div key={idx} className="glass-panel course-luxury-card flex-column justify-between">
                <div className="course-card-top">
                  <div className="course-img-wrapper" style={{ backgroundImage: `url(${c.image})` }}>
                    <div className="img-mask"></div>
                    <span className="course-card-tag">{c.category}</span>
                  </div>

                  <div className="course-card-body flex-column gap-sm" style={{ padding: 'var(--spacing-lg)' }}>
                    <h3>{c.title}</h3>
                    <p className="text-muted" style={{ fontSize: '0.88rem', lineHeight: '1.5' }}>{c.description}</p>
                  </div>
                </div>

                <div className="course-card-footer flex-between" style={{ padding: 'var(--spacing-md) var(--spacing-lg)', borderTop: '1px solid rgba(255,255,255,0.05)', gap: '10px' }}>
                  <div className="flex align-center gap-xs" style={{ flexWrap: 'wrap' }}>
                    <span className="course-footer-badge">
                      <FaTag size={10} style={{ marginRight: '4px' }} /> Fee: {c.price}
                    </span>
                    <span className="course-footer-badge">
                      <FaClock size={10} style={{ marginRight: '4px' }} /> Duration: {c.duration}
                    </span>
                  </div>
                  <Link to={`/course/${c.id}`} className="btn btn-secondary" style={{ padding: '0.45rem 1.1rem', fontSize: '0.78rem', whiteSpace: 'nowrap' }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-xl">
              <h3>No courses matched your parameters.</h3>
              <p className="text-muted">Adjust search keywords or choose another active category tab.</p>
            </div>
          )}

        </div>
      </section>

      <style>{`
        .search-bar-wrapper {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.8rem var(--spacing-lg);
          max-width: 600px;
          margin: var(--spacing-xl) auto 0;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .search-bar-wrapper:focus-within {
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.15);
        }

        .search-input {
          border: none;
          background: transparent;
          color: var(--text-dark);
          font-size: 1rem;
          width: 100%;
          outline: none;
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .course-luxury-card {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all var(--transition-normal);
          height: 100%;
        }

        .course-luxury-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 122, 0, 0.3);
          box-shadow: 0 20px 40px rgba(255, 122, 0, 0.06);
        }

        .course-img-wrapper {
          height: 200px;
          background-size: cover;
          background-position: top center;
          position: relative;
        }

        .img-mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(5, 8, 22, 0.1) 0%, rgba(5, 8, 22, 0.85) 100%);
        }

        .course-card-tag {
          position: absolute;
          bottom: var(--spacing-sm);
          left: var(--spacing-md);
          font-size: 0.65rem;
          font-weight: 700;
          background: rgba(30, 58, 138, 0.15);
          border: 1px solid rgba(30, 58, 138, 0.3);
          color: var(--secondary-color);
          padding: 0.2rem 0.55rem;
          border-radius: 30px;
          text-transform: uppercase;
          z-index: 2;
        }

        .course-luxury-card h3 {
          font-size: 1.2rem;
          color: var(--text-dark);
        }

        .course-footer-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.35rem 0.65rem;
          border-radius: 6px;
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        :root.light-theme .course-footer-badge {
          background: rgba(15, 23, 42, 0.03);
          border-color: rgba(15, 23, 42, 0.08);
          color: var(--text-dark);
        }

        .category-scroll-container::-webkit-scrollbar {
          display: none;
        }

        /* Light theme overrides for Courses */
        :root.light-theme .search-bar-wrapper {
          background: rgba(15, 23, 42, 0.04);
          border-color: rgba(15, 23, 42, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Courses;
