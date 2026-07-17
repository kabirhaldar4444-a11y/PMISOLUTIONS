import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import Hero from '../components/sections/Hero';
import { FaLaptopCode, FaClock, FaCheckCircle, FaBriefcase, FaGraduationCap, FaRegStar, FaStar, FaAward, FaBuilding } from 'react-icons/fa';

const Solutions = () => {
  // Solution card list
  const masterTrainings = [
    {
      num: "01",
      title: "Self-Confidence Building Training",
      category: "Personal & Leadership Growth",
      desc: "Designed for professionals seeking to lead project teams, negotiate high-value contracts, and deliver assertive pitches under corporate environments.",
      bg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "02",
      title: "Resilience Coach Training",
      category: "Mental & Professional Endurance",
      desc: "Equips project managers with baseline frameworks to navigate blockers, lead change initiatives, and maintain operational stability under stress.",
      bg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "03",
      title: "Motivational Speaker Training",
      category: "Executive Communication",
      desc: "Structure high-impact storytelling and standard-based presentations to coordinate team alignment and secure stakeholder sponsorship.",
      bg: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "04",
      title: "Body Language Expert Training",
      category: "Executive Presence",
      desc: "Understand non-verbal indicators during board alignments and negotiations, establishing authority and building credibility.",
      bg: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "05",
      title: "Personal Branding Strategist Training",
      category: "Professional Marketing",
      desc: "Map your digital footprints, structure standard CV indices, and align LinkedIn profiles to position yourself as an authority in project management.",
      bg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "06",
      title: "Mindset Mastery Training",
      category: "Cognitive Agility",
      desc: "Restructure decision-making processes under uncertainty, implementing standard agile approaches to resolve corporate problems.",
      bg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "07",
      title: "Relationship Coaching Training",
      category: "Strategic Collaboration",
      desc: "Manage multi-stakeholder alignments and cross-functional team dynamics, resolving conflicts through baseline emotional intelligence.",
      bg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "08",
      title: "Decision Making Mastery Training",
      category: "Strategic Leadership",
      desc: "Incorporate mathematical and logical models to evaluate risk indices, ensuring high-quality, reproducible outcomes.",
      bg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="solutions-page-luxury" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark)', overflow: 'hidden', paddingTop: '100px' }}>
      
      {/* Background aurora effect */}
      <div className="aurora-mesh">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* 1. Immersive Hero */}
      <section className="page-header py-xl text-center">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.35rem 0.95rem', borderRadius: '50px', marginBottom: '1rem' }}>
            <span className="badge-glow" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }}></span>
            <span className="badge-text" style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.5px', color: '#e2e8f0', textTransform: 'uppercase' }}>Professional Portfolios</span>
          </div>
          <h1 className="solutions-title" style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '1.5rem' }}>
            Tailored Solutions for <br />
            <span className="text-glow-orange" style={{ background: 'linear-gradient(135deg, #FF7A00 0%, #FF9E2A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Modern Enterprises</span>
          </h1>
          <p className="lead-p" style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: '1.6', maxWidth: '850px', margin: '0 auto' }}>
            PMI Solutions delivers integrated learning matrices to scale team capabilities, validate predictive workflows, and drive measurable corporate agility.
          </p>
        </div>
      </section>

      {/* 2. Solutions Masonry Grid */}
      <SectionWrapper bg="transparent">
        <div className="solutions-luxury-grid grid grid-3" style={{ position: 'relative', zIndex: 2 }}>
          {masterTrainings.map((t, idx) => (
            <div 
              key={idx} 
              className="track-card-luxury" 
              style={{ backgroundImage: `url(${t.bg})` }}
            >
              <div className="track-card-overlay"></div>
              
              <div className="track-card-content flex-column justify-between">
                <div className="track-card-header flex-between">
                  <span className="track-category-tag">{t.category}</span>
                  <span className="track-number">{t.num}</span>
                </div>
                
                <div className="track-card-body flex-column gap-xs">
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                  <Link to="/courses" className="track-learn-more flex align-center gap-xs">
                    Learn More <FaChevronRight size={10} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. Customer Testimonial Section */}
      <section className="solutions-testimonial-section py-xl">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="glass-panel testimonial-wrap flex-column align-center gap-md text-center max-w-800" style={{ margin: '0 auto', padding: 'var(--spacing-xxl) var(--spacing-xl)' }}>
            <div className="stars flex gap-xs text-accent">
              <FaStar size={16} /><FaStar size={16} /><FaStar size={16} /><FaStar size={16} /><FaStar size={16} />
            </div>
            <p className="testimonial-quote" style={{ fontSize: '1.15rem', lineHeight: '1.65', color: 'var(--text-dark)', fontStyle: 'italic' }}>
              "PMI Solutions has played a significant role in advancing our team's operational capabilities. The diagnostic intake pre-assessments and detailed curriculum roadmaps allowed us to onboard and coordinate division standards seamlessly."
            </p>
            <h4 style={{ color: 'var(--accent-color)', margin: 0 }}>Rahul Sharma</h4>
            <span className="text-muted" style={{ fontSize: '0.85rem' }}>Director of Program Delivery, Tata Consultancy Services</span>
          </div>
        </div>
      </section>

      {/* 4. Ready CTA Banner */}
      <section className="corporate-luxury-banner py-xl">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="glass-panel banner-panel flex-between flex-wrap gap-xl" style={{ borderRadius: '24px', padding: 'var(--spacing-xxl) var(--spacing-xl)', background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(10, 14, 41, 0.5) 100%)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="banner-text flex-column gap-sm">
              <h2>Ready to scale your project execution capabilities?</h2>
              <p className="text-muted" style={{ fontSize: '1rem', maxWidth: '650px' }}>
                Onboard your project management division under a standardized, audited model with administrative performance dashboard access.
              </p>
            </div>
            <div className="banner-actions">
              <a href="/contact" className="btn btn-primary">
                Contact Enterprise
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .track-card-luxury {
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: var(--spacing-xl) var(--spacing-lg);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .track-card-luxury:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(255, 122, 0, 0.35);
          box-shadow: 0 25px 50px rgba(255, 122, 0, 0.08);
        }

        .track-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(5, 8, 22, 0.4) 0%, rgba(5, 8, 22, 0.95) 100%);
          z-index: 1;
          transition: background var(--transition-normal);
        }

        .track-card-luxury:hover .track-card-overlay {
          background: linear-gradient(180deg, rgba(5, 8, 22, 0.25) 0%, rgba(5, 8, 22, 0.92) 100%);
        }

        .track-card-content {
          position: relative;
          z-index: 2;
          height: 100%;
        }

        .track-category-tag {
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(255, 122, 0, 0.12);
          border: 1px solid rgba(255, 122, 0, 0.25);
          color: var(--accent-color);
          padding: 0.25rem 0.65rem;
          border-radius: 30px;
          text-transform: uppercase;
        }

        .track-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.15);
          line-height: 1;
        }

        .track-card-luxury:hover .track-number {
          color: var(--accent-color);
        }

        .track-card-body h3 {
          font-size: 1.25rem;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .track-card-body p {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: var(--spacing-sm);
        }

        .track-learn-more {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-color);
        }

        .track-learn-more:hover {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default Solutions;
