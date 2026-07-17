import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/shared/SectionWrapper';
import Form from '../components/shared/Form';
import Card from '../components/shared/Card';
import { contactDetails, teamList } from '../data/contactData';
import { FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaUsers, FaArrowRight, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Set first accordion active by default

  const toggleAccordion = (idx) => {
    if (activeAccordion === idx) {
      setActiveAccordion(null); // collapse if already active
    } else {
      setActiveAccordion(idx);
    }
  };

  return (
    <div className="contact-page-luxury" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark)', overflow: 'hidden', paddingTop: '100px' }}>
      
      {/* Background aurora effect */}
      <div className="aurora-mesh">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* 1. Page Header */}
      <section className="page-header py-xl text-center">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.35rem 0.95rem', borderRadius: '50px', marginBottom: '1rem' }}>
            <span className="badge-glow" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }}></span>
            <span className="badge-text" style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.5px', color: '#e2e8f0', textTransform: 'uppercase' }}>Communications Hub</span>
          </div>
          
          <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '1.5rem' }}>
            Get In <span className="text-glow-orange" style={{ background: 'linear-gradient(135deg, #FF7A00 0%, #FF9E2A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</span>
          </h1>
          
          <p className="lead-p" style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: '1.6', maxWidth: '850px', margin: '0 auto' }}>
            Coordinate enrollments, diagnostic pre-assessment timelines, and corporate training proposals with our advisors.
          </p>
        </div>
      </section>

      {/* 2. Main split section: Accordions vs Form */}
      <SectionWrapper bg="transparent">
        <div className="grid grid-2 gap-xl align-start" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Left Column: Location details and Map */}
          <div className="contact-info-luxury flex-column gap-lg animate-fade-in">
            <h2>Support & Branch Offices</h2>
            <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              Select a communication channel to view specific addresses and phone numbers.
            </p>

            <div className="faq-luxury-timeline flex-column gap-md" style={{ width: '100%' }}>
              {/* Accordion Item 1 */}
              <div 
                className={`glass-panel faq-luxury-item ${activeAccordion === 0 ? 'active' : ''}`}
                onClick={() => toggleAccordion(0)}
              >
                <div className="faq-luxury-question flex-between">
                  <h4 className="flex align-center gap-xs"><FaEnvelope className="text-accent" style={{ marginRight: '8px' }} /> {contactDetails.faqList[0].title}</h4>
                  <span className="faq-toggle-icon">{activeAccordion === 0 ? '−' : '+'}</span>
                </div>
                <div className="faq-luxury-answer">
                  <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '8px' }}>{contactDetails.faqList[0].subtitle}</p>
                  <a href={`mailto:${contactDetails.email}`} style={{ color: 'var(--accent-color)', fontWeight: '700' }}>
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div 
                className={`glass-panel faq-luxury-item ${activeAccordion === 1 ? 'active' : ''}`}
                onClick={() => toggleAccordion(1)}
              >
                <div className="faq-luxury-question flex-between">
                  <h4 className="flex align-center gap-xs"><FaMapMarkerAlt className="text-accent" style={{ marginRight: '8px' }} /> {contactDetails.faqList[1].title}</h4>
                  <span className="faq-toggle-icon">{activeAccordion === 1 ? '−' : '+'}</span>
                </div>
                <div className="faq-luxury-answer">
                  <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '12px' }}>{contactDetails.faqList[1].subtitle}</p>
                  
                  <div className="locations-grid flex-column gap-md">
                    {contactDetails.faqList[1].content.map((loc, idx) => (
                      <div key={idx} className="location-node-luxury" style={{ paddingLeft: '15px', borderLeft: '2px solid rgba(255, 122, 0, 0.3)' }}>
                        <h5 style={{ color: 'var(--text-dark)', fontWeight: '700', fontSize: '0.95rem' }}>{loc.name}</h5>
                        <p className="text-muted" style={{ fontSize: '0.82rem', lineHeight: '1.4', margin: '2px 0 0 0' }}>{loc.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded maps */}
            <div className="map-glass-wrapper rounded overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620138944517!2d77.3621455762886!3d28.61291197567406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5619b027db9%3A0xed499db9ed0ce25b!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="240" 
                style={{ border: 0, opacity: 0.8, filter: 'invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="contact-form-column animate-fade-in" style={{ position: 'sticky', top: '100px' }}>
            <div className="glass-panel form-luxury-card flex-column gap-md" style={{ padding: 'var(--spacing-xl)', borderRadius: '24px', background: 'rgba(10, 14, 41, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="form-hdr text-center">
                <h3>Diagnostic Registration</h3>
                <p className="text-muted" style={{ fontSize: '0.85rem' }}>Secure preliminary credential tracking ID in 24 hours.</p>
              </div>
              <Form />
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* 3. Team Section */}
      <section className="team-luxury-section section">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header text-center">
            <span className="text-accent" style={{ fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Leadership</span>
            <h2>Our Executive Team</h2>
            <p>Dedicated leads coordinating financial and operational frameworks worldwide.</p>
          </div>

          <div className="grid grid-4 gap-lg">
            {teamList.map((m, idx) => (
              <div key={idx} className="glass-panel team-card-luxury flex-column align-center text-center gap-sm">
                <div className="team-avatar-circle flex-center" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'var(--accent-color)' }}>
                  <FaUsers size={28} />
                </div>
                <h3 style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: '700', margin: '4px 0 0 0' }}>{m.name}</h3>
                <span className="text-muted" style={{ fontSize: '0.82rem' }}>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .faq-luxury-item {
          padding: var(--spacing-lg) var(--spacing-xl);
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .faq-luxury-item:hover {
          border-color: rgba(255, 122, 0, 0.25);
        }

        .faq-luxury-question h4 {
          font-size: 1.05rem;
          color: #ffffff;
          margin: 0;
          font-weight: 700;
        }

        .faq-toggle-icon {
          font-size: 1.3rem;
          color: var(--accent-color);
          font-weight: 800;
        }

        .faq-luxury-answer {
          max-height: 0;
          overflow: hidden;
          transition: all var(--transition-normal) ease-out;
        }

        .faq-luxury-item.active .faq-luxury-answer {
          max-height: 400px;
          margin-top: var(--spacing-md);
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding-top: var(--spacing-md);
        }

        .team-card-luxury {
          padding: var(--spacing-xl) var(--spacing-md);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all var(--transition-normal);
        }

        .team-card-luxury:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 122, 0, 0.3);
          box-shadow: 0 15px 30px rgba(255, 122, 0, 0.06);
        }
      `}</style>
    </div>
  );
};

export default Contact;
