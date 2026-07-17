import React from 'react';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import { FaAward, FaBuilding, FaFileContract, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';

// Import local converted & copied assets
import CredentialsConvertedImage from '../assets/images/Credentials & Affiliations_converted.png';
import GovtRecognition1 from '../assets/images/Government Recognition1.png';
import GovtRecognition2 from '../assets/images/Government Recognition 2.png';
import GovtRecognition3 from '../assets/images/Government Recognition 3.png';
import MoeDocPage1 from '../assets/images/PMI MoE Govt Docx_page-0001.jpg';
import MoeDocPage2 from '../assets/images/PMI MoE Govt Docx_page-0002.jpg';

// Import Prestigious University Partner Logos
import IbmLogo from '../assets/partners Logos/ibm-logo-18919.png';
import AsqLogo from '../assets/partners Logos/American-Society-for-Quality-logo-converted-from-webp.png';
import NeboshLogo from '../assets/partners Logos/21nebosh-logo.png';
import CisaLogo from '../assets/partners Logos/CISA_logo_RGB-converted-from-webp.png';
import ShrmLogo from '../assets/partners Logos/shrm-logo-colour-converted-from-webp.png';
import AxelosLogo from '../assets/partners Logos/Axelos-logo-hi.png';
import OracleLogo from '../assets/partners Logos/584817d6cef1014c0b5e4999.png';
import ComptiaLogo from '../assets/partners Logos/pngegg (1).png';

const Credentials = () => {
  const affs = [
    { name: "IBM", img: IbmLogo },
    { name: "ASQ", img: AsqLogo },
    { name: "NEBOSH", img: NeboshLogo },
    { name: "CISA", img: CisaLogo },
    { name: "SHRM", img: ShrmLogo },
    { name: "Axelos", img: AxelosLogo },
    { name: "Oracle", img: OracleLogo },
    { name: "CompTIA", img: ComptiaLogo }
  ];

  return (
    <div className="credentials-page-luxury" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark)', overflow: 'hidden', paddingTop: '100px' }}>
      
      {/* Background aurora effect */}
      <div className="aurora-mesh">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* 1. Page Header with TÜV SÜD Details */}
      <section className="page-header py-xl">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid grid-2 gap-xl align-center">
            
            <div className="intro-text-luxury flex-column gap-md animate-fade-in">
              <div className="hero-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.35rem 0.95rem', borderRadius: '50px', marginBottom: '0.5rem', width: 'fit-content' }}>
                <span className="badge-glow" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }}></span>
                <span className="badge-text" style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.5px', color: '#e2e8f0', textTransform: 'uppercase' }}>Audited Excellence</span>
              </div>
              
              <h1 style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-1px', lineHeight: '1.2' }}>
                TÜV SÜD Quality <br />
                <span className="text-glow-orange" style={{ background: 'linear-gradient(135deg, #FF7A00 0%, #FF9E2A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Audit Validation</span>
              </h1>
              
              <div className="text-muted" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '12px' }}>
                  The Certification Body of <strong>TÜV SÜD South Asia Private Limited</strong> certifies that <strong>PMI Solutions</strong> has been audited and found to have established, implemented, and effectively maintained a robust framework for professional training services.
                </p>
                
                <h4 style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: '700', marginTop: '1rem', marginBottom: '8px' }}>Audited Scope:</h4>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1rem' }}>
                  <li>Authorized design of industry-aligned certification paths</li>
                  <li>Delivery of diagnostic pre-assessments within 24-48 hours</li>
                  <li>Issuing global provisional credentials</li>
                  <li>Continuous assurance and quality control of curriculum content</li>
                </ul>
              </div>
            </div>

            {/* Visual right column: Certificate presentation */}
            <div className="intro-visual-luxury flex-center">
              <div className="certificate-glass-frame">
                <img src={CredentialsConvertedImage} alt="TÜV Quality Certificate" className="tuv-cert-img" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Global University Partner logos */}
      <section className="partners-logo-grid-section section">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header text-center">
            <span className="text-accent" style={{ fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Ecosystem</span>
            <h2>Integrated Industry Standards</h2>
            <p>Our preparation programs prepare candidates for globally accepted frameworks from top organizations.</p>
          </div>

          <div className="affiliations-luxury-grid grid grid-4">
            {affs.map((a, idx) => (
              <div key={idx} className="glass-panel partner-logo-card-luxury flex-center">
                <img src={a.img} alt={a.name} className="partner-logo-item-luxury" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Government Ministry Documentations Section */}
      <section className="moe-docs-section section">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header text-center">
            <span className="text-accent" style={{ fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Government Recognition</span>
            <h2>Ministry of Education Records</h2>
            <p>Review the official validation records documenting the institution’s authority and compliance indices.</p>
          </div>

          <div className="grid grid-2 gap-xl">
            <div className="moe-doc-frame flex-column align-center gap-md">
              <div className="doc-panel-glass">
                <img src={MoeDocPage1} alt="Ministry Doc Page 1" className="moe-doc-img" />
              </div>
              <h4 style={{ color: 'var(--text-dark)', fontWeight: '700' }}>MoE Declaration Record (Page 1)</h4>
            </div>

            <div className="moe-doc-frame flex-column align-center gap-md">
              <div className="doc-panel-glass">
                <img src={MoeDocPage2} alt="Ministry Doc Page 2" className="moe-doc-img" />
              </div>
              <h4 style={{ color: 'var(--text-dark)', fontWeight: '700' }}>MoE Declaration Record (Page 2)</h4>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .certificate-glass-frame {
          padding: var(--spacing-md);
          background: rgba(255, 255, 255, 0.02);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          transition: transform var(--transition-normal);
        }

        .certificate-glass-frame:hover {
          transform: translateY(-5px);
        }

        .tuv-cert-img {
          max-width: 100%;
          height: auto;
          border-radius: 16px;
        }

        .partner-logo-card-luxury {
          padding: var(--spacing-xl);
          height: 120px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .partner-logo-card-luxury:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 122, 0, 0.3);
          transform: translateY(-4px);
        }

        .partner-logo-item-luxury {
          max-height: 50px;
          max-width: 90%;
          object-fit: contain;
          filter: grayscale(1) brightness(1.8);
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .partner-logo-card-luxury:hover .partner-logo-item-luxury {
          filter: none;
          opacity: 1;
        }

        .doc-panel-glass {
          padding: var(--spacing-md);
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          transition: all var(--transition-normal);
        }

        .doc-panel-glass:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 122, 0, 0.25);
        }

        .moe-doc-img {
          width: 100%;
          height: auto;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
};

export default Credentials;
