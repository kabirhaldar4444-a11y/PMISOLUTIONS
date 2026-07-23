import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import LogoImage from '../assets/images/logo/PMI Solutions.png';
import TargetImage from '../assets/images/mission_target.png';
import EagleImage from '../assets/images/vision_eagle.png';
import MountainImage from '../assets/images/impact_mountain.png';
import { FaGlobe, FaAward, FaUsers, FaArrowRight, FaLightbulb, FaRocket, FaFlag, FaCompass } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page-luxury" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark)', overflow: 'hidden', paddingTop: '100px' }}>
      
      {/* Background aurora effect */}
      <div className="aurora-mesh">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* 1. Header */}
      <section className="page-header py-xl text-center">
        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.35rem 0.95rem', borderRadius: '50px', marginBottom: '1rem' }}>
            <span className="badge-glow" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }}></span>
            <span className="badge-text" style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.5px', color: 'var(--text-dark)', textTransform: 'uppercase' }}>Who We Are</span>
          </div>
          <h1 className="about-title" style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '1.5rem' }}>
            Advancing the Science of <br />
            <span className="text-glow-orange" style={{ background: 'linear-gradient(135deg, #FF7A00 0%, #FF9E2A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Project Delivery</span>
          </h1>
          <p className="lead-p" style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            PMI Solutions is a globally recognized professional authority dedicated to empowering companies and project leaders through structured, certified preparation.
          </p>
        </div>
      </section>

      {/* 2. Intro Section */}
      <SectionWrapper bg="transparent">
        <div className="grid grid-2 gap-xl align-center" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-intro-text flex-column gap-md animate-fade-in">
            <h2>PMI Solutions</h2>
            <p className="text-muted" style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
              We collaborate with global agencies and professionals to establish baseline competency frameworks. Built on standard PMBOK® structures, our training and exam preparation resources travel across industries to optimize deployment quality.
            </p>
            <p className="text-muted" style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
              From initial pre-assessment mapping to issuing final digital credentials, PMI Solutions establishes transparency, high-performance training standards, and learner compliance metrics globally.
            </p>
            <div className="actions flex gap-sm my-sm">
              <Link to="/courses" className="btn btn-primary">Our Programs</Link>
              <Link to="/credentials" className="btn btn-secondary">Affiliations</Link>
            </div>
          </div>
          
          <div className="about-intro-visual flex-center">
            <div className="logo-glass-frame">
              <img src={LogoImage} alt="PMI Solutions Logo" className="about-brand-logo" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Bento Grid - Mission & Vision */}
      <section className="mission-vision-section py-xl">
        <div className="container grid grid-2 gap-lg" style={{ position: 'relative', zIndex: 2 }}>
          {/* Box 1: Mission */}
          <div className="glass-panel bento-box flex-column gap-md">
            <div className="bento-box-icon"><FaRocket size={22} /></div>
            <h3>Our Mission</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              At PMI Solutions, our mission is to empower individuals and organizations by delivering high-quality, globally recognized certifications and practical, industry-aligned training solutions. We are committed to fostering a culture of continuous learning, professional excellence, and career advancement.
            </p>
          </div>

          {/* Box 2: Vision */}
          <div className="glass-panel bento-box flex-column gap-md">
            <div className="bento-box-icon icon-orange"><FaCompass size={22} /></div>
            <h3>Our Vision</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              PMI Solutions envisions a world where organizations and individuals consistently deliver successful outcomes through effective project management. It aims to be the leading authority and global community for project professionals, driving excellence, innovation, and positive change.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Offering Summary with Mountain Image */}
      <section className="offerings-about-section py-xl">
        <div className="container grid grid-2 gap-xl align-center" style={{ position: 'relative', zIndex: 2 }}>
          <div className="offerings-graphics flex-center">
            <img src={MountainImage} alt="Impact Mountain" className="about-section-img" />
          </div>

          <div className="offerings-text flex-column gap-md animate-fade-in">
            <h2>What We Offer</h2>
            <p className="text-muted" style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
              We provide full-spectrum learning pipelines and specialized career preparation options to meet the needs of all project divisions:
            </p>
            <ul className="custom-bullets flex-column gap-sm" style={{ paddingLeft: 0 }}>
              <li style={{ color: 'var(--text-dark)', listStyle: 'none', position: 'relative', paddingLeft: '24px', fontSize: '0.95rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontWeight: '900' }}>✓</span>
                Globally Recognized PMI Solutions Certifications (PMP®, CAPM®, PMI-ACP®)
              </li>
              <li style={{ color: 'var(--text-dark)', listStyle: 'none', position: 'relative', paddingLeft: '24px', fontSize: '0.95rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontWeight: '900' }}>✓</span>
                Industry-Focused IT Certification Programs (CompTIA, Cisco, EC-Council)
              </li>
              <li style={{ color: 'var(--text-dark)', listStyle: 'none', position: 'relative', paddingLeft: '24px', fontSize: '0.95rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontWeight: '900' }}>✓</span>
                In-Demand Cloud Certification Training (AWS, Microsoft Azure, Google Cloud)
              </li>
              <li style={{ color: 'var(--text-dark)', listStyle: 'none', position: 'relative', paddingLeft: '24px', fontSize: '0.95rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontWeight: '900' }}>✓</span>
                Advanced Cybersecurity & DevOps Learning Tracks
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Metrics dashboard */}
      <section className="metrics-about-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Global Impact</h2>
            <p>Validated preparation benchmarks driving excellence across organizations worldwide.</p>
          </div>
          
          <div className="grid grid-3 gap-lg text-center" style={{ position: 'relative', zIndex: 2 }}>
            <div className="glass-panel metric-card flex-column align-center gap-sm">
              <FaGlobe size={32} className="text-accent" />
              <span className="m-val">200+</span>
              <span className="m-lbl">Countries & Territories</span>
            </div>
            
            <div className="glass-panel metric-card flex-column align-center gap-sm">
              <FaUsers size={32} className="text-accent" />
              <span className="m-val">120K+</span>
              <span className="m-lbl">Professionals Empowered</span>
            </div>

            <div className="glass-panel metric-card flex-column align-center gap-sm">
              <FaAward size={32} className="text-accent" />
              <span className="m-val">99.4%</span>
              <span className="m-lbl">Prep Correlation Rate</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Glass layout frames */
        .logo-glass-frame {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 24px;
          padding: var(--spacing-xxl);
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-normal);
        }

        .logo-glass-frame:hover {
          transform: scale(1.03) rotate(0.5deg);
        }

        .about-brand-logo {
          height: 140px;
          width: auto;
          object-fit: contain;
        }

        .about-section-img {
          width: 100%;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          transition: transform var(--transition-normal);
        }

        .about-section-img:hover {
          transform: translateY(-5px);
        }

        .bento-box {
          padding: var(--spacing-xl);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all var(--transition-normal);
        }

        .bento-box:hover {
          border-color: rgba(255, 122, 0, 0.35);
          box-shadow: 0 15px 30px rgba(255, 122, 0, 0.06);
          transform: translateY(-4px);
        }

        .bento-box-icon {
          background: rgba(30, 58, 138, 0.15);
          border: 1px solid rgba(30, 58, 138, 0.3);
          color: var(--secondary-color);
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .bento-box-icon.icon-orange {
          background: rgba(255, 122, 0, 0.12);
          border-color: rgba(255, 122, 0, 0.3);
          color: var(--accent-color);
        }

        .metric-card {
          padding: var(--spacing-xl);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .metric-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 122, 0, 0.35);
          box-shadow: 0 15px 30px rgba(255, 122, 0, 0.06);
        }

        .m-val {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent-color);
          line-height: 1.1;
          margin-top: var(--spacing-sm);
        }

        .m-lbl {
          font-size: 0.82rem;
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default About;
