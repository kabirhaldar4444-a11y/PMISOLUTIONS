import React from 'react';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import { partnershipsIntro, partnerCompanies, tailoredSolutions, partnerWithUs } from '../data/partnershipsData';
import { FaHandshake, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

// Import actual partner logos from src/assets/images
import TataLogo from '../assets/images/Tata.png';
import InfosysLogo from '../assets/images/infosys.png';
import KnowledgeAcademyLogo from '../assets/images/the knowledge academy logo.png';

const Partnerships = () => {
  const logoMap = {
    "Tata (Tata Group)": TataLogo,
    "Infosys – Strengthening Tech Delivery Through Certification": InfosysLogo,
    "The Knowledge Academy – Global Training & Certification Leader": KnowledgeAcademyLogo
  };

  return (
    <div className="partnerships-page">
      {/* 0. Pure Full-Width Hero Section Image */}
      <section 
        className="partnerships-hero animate-fade-in"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          position: 'relative'
        }}
      />

      {/* 1. Page Header */}
      <section className="page-header py-xl bg-gray">
        <div className="container animate-fade-in">
          <span className="section-label">Global Alliances</span>
          <h1>{partnershipsIntro.title}</h1>
          {partnershipsIntro.paragraphs.map((p, idx) => (
            <p key={idx} className="lead-p">{p}</p>
          ))}
        </div>
      </section>

      {/* 2. Companies We Work With */}
      <SectionWrapper bg="white" title="Companies We Work With" subtitle="We collaborate with leading organizations to enhance professional capabilities and support career development:">
        <div className="companies-list">
          {partnerCompanies.map((c, idx) => {
            const logoSrc = logoMap[c.name];
            return (
              <Card key={idx} className="partner-row-card bg-white shadow-sm rounded overflow-hidden">
                {/* Left column: Logo image + company subtitle */}
                <div className="partner-logo-col">
                  <div className="partner-logo-wrapper">
                    {logoSrc ? (
                      <img src={logoSrc} alt={c.name} className="partner-row-logo" />
                    ) : (
                      <span className="partner-logo-placeholder"><FaBriefcase size={36} /></span>
                    )}
                  </div>
                  <h3 className="partner-row-name">{c.name}</h3>
                </div>

                {/* Right column: Description */}
                <div className="partner-content-col">
                  <p className="partner-row-desc">{c.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 3. Tailored Learning Solutions for Organizations */}
      <SectionWrapper bg="gray" title={tailoredSolutions.title} subtitle={tailoredSolutions.subtitle}>
        <div className="grid grid-2 gap-xl align-center">
          <div className="solutions-text animate-fade-in">
            <ul className="custom-bullets">
              {tailoredSolutions.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
            <p className="my-md font-semibold text-primary">{tailoredSolutions.footerText}</p>
          </div>
          <div className="solutions-graphic card flex-column align-center text-center gap-md">
            <FaGraduationCap size={65} className="text-accent animate-bounce-slow" />
            <h3>Enterprise Training Program</h3>
            <p className="text-muted" style={{fontSize: '0.95rem'}}>Scale project management, agile capabilities, and standard industry frameworks across your global divisions seamlessly.</p>
            <a href="/contact" className="btn btn-primary w-100">
              Request Enterprise Proposal
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Partner With Us? */}
      <SectionWrapper bg="white" title={partnerWithUs.title} subtitle={partnerWithUs.subtitle}>
        <div className="partner-us-box card max-w-800 text-center flex-column align-center gap-md">
          <FaHandshake size={60} className="text-accent" />
          {partnerWithUs.paragraphs.map((p, idx) => (
            <p key={idx} className="partner-para">{p}</p>
          ))}
          <a href="/contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </SectionWrapper>

      <style>{`
        .partnerships-page {
          overflow-x: hidden;
        }

        .partnerships-hero {
          position: relative;
          width: 100%;
          height: 480px;
          margin-top: 80px; /* clear fixed top header */
        }

        .page-header {
          padding-top: 3rem; /* adjusted padding since hero banner takes top space */
        }

        .lead-p {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.6;
          max-width: 900px;
          margin-bottom: var(--spacing-md);
        }

        /* Partner Row Cards styling */
        .companies-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
          max-width: 1100px;
          margin: 0 auto;
        }

        .partner-row-card {
          display: grid;
          grid-template-columns: 320px 1fr;
          border-left: 4px solid var(--accent-color);
          transition: all var(--transition-normal);
          align-items: stretch;
        }

        .partner-row-card:hover {
          transform: translateX(4px);
          box-shadow: var(--card-shadow);
        }

        .partner-logo-col {
          background-color: #f8fafc;
          border-right: 1px solid #edf2f7;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-xl);
          gap: var(--spacing-md);
          text-align: center;
        }

        .partner-logo-wrapper {
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-row-logo {
          max-width: 90%;
          max-height: 85px;
          object-fit: contain;
          transition: transform var(--transition-normal);
        }

        .partner-row-card:hover .partner-row-logo {
          transform: scale(1.05);
        }

        .partner-row-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-top: var(--spacing-xs);
          line-height: 1.4;
        }

        .partner-content-col {
          padding: var(--spacing-xl) var(--spacing-xxl);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .partner-row-desc {
          font-size: 1.02rem;
          line-height: 1.7;
          color: #4a5568;
          margin: 0;
        }

        /* Solutions layout */
        .solutions-graphic {
          padding: var(--spacing-xxl) var(--spacing-xl);
          border-top: 4px solid var(--primary-color);
        }

        .font-semibold {
          font-weight: 600;
        }

        .text-primary {
          color: var(--primary-color);
        }

        .partner-us-box {
          margin: 0 auto;
          padding: var(--spacing-xxl) var(--spacing-xl);
          border-top: 4px solid var(--accent-color);
        }

        .partner-para {
          font-size: 1.05rem;
          color: #4a5568;
          line-height: 1.6;
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s infinite;
        }

        @media (max-width: 768px) {
          .partnerships-hero {
            height: 250px;
            margin-top: 70px;
          }

          .page-header {
            padding-top: 2rem !important;
            text-align: center;
          }

          .partner-row-card {
            grid-template-columns: 1fr;
          }

          .partner-logo-col {
            border-right: none;
            border-bottom: 1px solid #edf2f7;
            padding: var(--spacing-lg);
          }

          .partner-content-col {
            padding: var(--spacing-lg);
          }
        }
      `}</style>
    </div>
  );
};

export default Partnerships;
