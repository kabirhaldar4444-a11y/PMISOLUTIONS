import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import Form from '../components/shared/Form';
import { FaGraduationCap, FaChevronRight, FaStar, FaAward, FaBuilding, FaUsers, FaArrowRight, FaClock, FaCheckCircle, FaLaptopCode, FaGlobe, FaCertificate, FaArrowAltCircleRight, FaSearch, FaShieldAlt } from 'react-icons/fa';

// Import newly placed exact assets
import ReadyImage from '../assets/images/ready_to_get_started.jpg';
import HeroVideo from '../assets/images/Videos/Hero_Section_video.mp4';
import PMIWoodImage from '../assets/images/PMI_Wood_image.jpg';

// Core offerings program visual assets
import StandardsFrameworksImage from '../assets/images/Industry-Leading Standards & Frameworks.jpg';
import RespectedCertificationsImage from '../assets/images/Globally Respected Certifications.webp';
import LearningResourcesImage from '../assets/images/Extensive Learning & Knowledge Resources.jpg';
import FlexiblePrepImage from '../assets/images/Flexible Learning & Exam Preparation Options.jpg';

// Credentials visuals
import GovtRecognizedImage from '../assets/images/Government Recognized.jpg';
import IndustryRespectedImage from '../assets/images/Industry-Respected.webp';
import ProfessionalCommunityImage from '../assets/images/Professional Communit.jpg';



const Home = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeFaq, setActiveFaq] = useState(null);
  const heroRef = useRef(null);

  // Mouse follow effect for the grid blobs
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.bento-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Certifications data
  const certifications = [
    { id: 'pmp', title: 'PMP® Certification Prep', category: 'Project Management', desc: 'Project Management Professional preparation program.', duration: '90-120 Days', rate: '99.4%' },
    { id: 'capm', title: 'CAPM® Certification Prep', category: 'Project Management', desc: 'Certified Associate in Project Management introductory training.', duration: '60-90 Days', rate: '98.7%' },
    { id: 'pmi-acp', title: 'PMI-ACP® Scrum Master', category: 'Agile & Scrum', desc: 'Agile Certified Practitioner framework mastery and tools.', duration: '45-60 Days', rate: '99.1%' },
    { id: 'pdu-bundle', title: 'PDU Booster Bundle', category: 'Project Management', desc: 'Comprehensive package to earn professional development units.', duration: 'Self-Paced', rate: '100%' },
    { id: 'comptia-sec', title: 'CompTIA Security+ Prep', category: 'Cybersecurity & IT', desc: 'Advanced cybersecurity foundations and threat management.', duration: '60 Days', rate: '97.5%' },
    { id: 'itil-found', title: 'ITIL® v4 Foundations', category: 'Cybersecurity & IT', desc: 'IT Service Management globally-accepted standard frameworks.', duration: '30-45 Days', rate: '98.9%' },
    { id: 'devops-lead', title: 'DevOps Leadership', category: 'Agile & Scrum', desc: 'Accelerate product deployment pipelines and team workflows.', duration: '45 Days', rate: '98.2%' },
    { id: 'executive-presence', title: 'Executive Presence Coaching', category: 'Leadership & Soft Skills', desc: 'Command authority, refine branding, and deliver high-impact presentations.', duration: '30 Days', rate: '99.6%' }
  ];

  const filteredCerts = activeTab === 'All' 
    ? certifications 
    : certifications.filter(c => c.category === activeTab);

  // Testimonials data
  const testimonials = [
    { quote: "Earning my PMP® through PMI Solutions was a game-changer. The platform UI and learning roadmap are in a league of their own. It felt like using Stripe or Figma.", author: "Ankit Mehta", role: "Senior Project Manager", rating: 5 },
    { quote: "PMI Solutions provides official, top-tier learning resources. The diagnostic pre-assessment and bento-style explorer are incredibly intuitive.", author: "Neha Sharma", role: "Program Director", rating: 5 },
    { quote: "I mastered Agile and Scrum through their self-paced prep tool. The success dashboard made tracking my PDUs seamless and visual.", author: "Rohan D’Souza", role: "Agile Coach", rating: 5 },
    { quote: "The National Education Excellence award they received is well deserved. Outstanding customer support and industry integration.", author: "Sarah Thomas", role: "VP of Product", rating: 5 }
  ];

  // FAQ data
  const faqs = [
    { q: "What certifications are provided by PMI Solutions?", a: "PMI Solutions delivers comprehensive exam preparation pathways for globally-recognized credentials including the Project Management Professional (PMP)®, Certified Associate in Project Management (CAPM)®, and PMI Agile Certified Practitioner (PMI-ACP)®." },
    { q: "Is PMI Solutions an official training partner?", a: "Yes, PMI Solutions is a recognized training institute. Our study guides, assessments, and learning resources align strictly with the latest global standards set by PMBOK®." },
    { q: "How long do the certification programs take?", a: "Most learning roadmaps span between 60 to 120 days. Since our platform offers a completely self-paced format, you have full flexibility to complete preparation at your own convenience." },
    { q: "What is the policy for refunds?", a: "We offer a 90% refund prior to attempting any assessment (Pre-Assessment or Final Exam) if requested within 24 hours of enrollment. Once any assessment is launched, refund eligibility is forfeited." }
  ];

  return (
    <div className="home-page-luxury" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark)', overflow: 'hidden' }}>
      
      {/* Aurora Background Effects */}
      <div className="aurora-mesh">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* 1. Immersive Hero Section */}
      <section className="luxury-hero" ref={heroRef}>
        <div className="container hero-luxury-container grid grid-2 align-center">
          
          <div className="hero-text-block animate-fade-in">
            <div className="hero-badge-pill">
              <span className="badge-glow"></span>
              <span className="badge-text">2026 Next-Gen Training Platform</span>
            </div>
            
            <h1 className="hero-headline">
              Become a <span className="text-glow-orange">Certified Project Leader</span> for the AI Era
            </h1>
            
            <p className="hero-description-text">
              PMI Solutions bridges official standard-based frameworks and modern executive capabilities. Master globally recognized credentials under a luxury digital learning model designed for innovators.
            </p>

            <div className="hero-cta-group">
              <Link to="/courses" className="btn btn-primary hero-main-btn">
                Explore Programs <FaArrowRight style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/contact" className="btn btn-secondary hero-sec-btn">
                Enterprise Demo
              </Link>
            </div>

            <div className="hero-metrics-row">
              <div className="metric-node">
                <span className="metric-num">99.4%</span>
                <span className="metric-label">Pass Rate</span>
              </div>
              <div className="metric-node">
                <span className="metric-num">1.2M+</span>
                <span className="metric-label">Global Members</span>
              </div>
              <div className="metric-node">
                <span className="metric-num">200+</span>
                <span className="metric-label">Countries</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating glass dashboard widget */}
          <div className="hero-visual-block animate-fade-in">
            <div className="glass-panel dashboard-widget">
              <div className="widget-header">
                <div className="header-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="widget-title">PMI SOLUTIONS — REALTIME PLATFORM</div>
              </div>
              <div className="widget-body">
                <div className="widget-chart-row">
                  <div className="radial-stat-box">
                    <svg viewBox="0 0 100 100" className="circular-meter">
                      <circle cx="50" cy="50" r="40" className="circle-bg" />
                      <circle cx="50" cy="50" r="40" className="circle-fill" style={{ strokeDasharray: '251.2', strokeDashoffset: '20' }} />
                    </svg>
                    <div className="radial-text">
                      <span className="radial-val">91%</span>
                      <span className="radial-lbl">Prep Score</span>
                    </div>
                  </div>
                  
                  <div className="radial-stat-box">
                    <svg viewBox="0 0 100 100" className="circular-meter meter-orange">
                      <circle cx="50" cy="50" r="40" className="circle-bg" />
                      <circle cx="50" cy="50" r="40" className="circle-fill" style={{ strokeDasharray: '251.2', strokeDashoffset: '40' }} />
                    </svg>
                    <div className="radial-text">
                      <span className="radial-val">84%</span>
                      <span className="radial-lbl">Agility Index</span>
                    </div>
                  </div>
                </div>

                <div className="activity-feed">
                  <div className="feed-item">
                    <FaCheckCircle className="feed-icon" />
                    <div className="feed-details">
                      <p className="feed-msg">Diagnostic pre-assessment evaluated successfully</p>
                      <span className="feed-time">2 mins ago</span>
                    </div>
                  </div>
                  <div className="feed-item">
                    <FaAward className="feed-icon icon-orange" />
                    <div className="feed-details">
                      <p className="feed-msg">Provisional certificate issued: Aarav Sharma</p>
                      <span className="feed-time">1 hour ago</span>
                    </div>
                  </div>
                </div>

                <div className="video-background-teaser">
                  {HeroVideo && (
                    <video autoPlay loop muted playsInline className="teaser-video">
                      <source src={HeroVideo} type="video/mp4" />
                    </video>
                  )}
                  <div className="teaser-overlay">
                    <FaGraduationCap size={28} />
                    <span>Watch Interactive Roadmap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* 3. Interactive Bento Grid (Why PMI Solutions) */}
      <section className="bento-grid-section section">
        <div className="container">
          <div className="section-header">
            <span className="text-accent" style={{ fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Core Advantages</span>
            <h2>Designed for Modern Excellence</h2>
            <p>Why project leaders and enterprises align with PMI Solutions over traditional training models.</p>
          </div>

          <div className="bento-grid">
            {/* Box 1 (Span 2) */}
            <div className="bento-card span-2 flex-column justify-center gap-sm">
              <div className="bento-icon-box"><FaAward size={26} /></div>
              <h3>Global Standard-Setting Framework</h3>
              <p className="text-muted">
                PMI Solutions structures preparation around official PMBOK® methodologies. Secure certifications recognized globally across sectors, establishing baseline credibility that elevates organizational delivery indices.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bento-card flex-column justify-center gap-sm">
              <div className="bento-icon-box icon-orange"><FaLaptopCode size={26} /></div>
              <h3>AI-Era Adaptive Toolkit</h3>
              <p className="text-muted">
                Integrate predictive methods with modern AI systems. Prepare for emergent agile environments by blending standard frameworks with predictive execution parameters.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bento-card flex-column justify-center gap-sm">
              <div className="bento-icon-box"><FaGlobe size={26} /></div>
              <h3>200+ Country Recognition</h3>
              <p className="text-muted">
                Your credentials travel with you. All training bundles prepare you for certifications that hold regulatory and commercial value globally.
              </p>
            </div>

            {/* Box 4 (Span 2) */}
            <div className="bento-card span-2 flex-column justify-center gap-sm">
              <div className="bento-icon-box icon-orange"><FaUsers size={26} /></div>
              <h3>Unified Leadership & Soft Skills</h3>
              <p className="text-muted">
                Go beyond exam structures. Develop advanced leadership capabilities, executive communication, team alignment strategies, and professional presence coaching to operate as an authoritative manager.
              </p>
            </div>

            {/* Box 5 (Full Width Row) */}
            <div className="bento-card span-2 flex-column justify-center gap-sm">
              <div className="bento-icon-box"><FaClock size={26} /></div>
              <h3>Diagnostic Pre-Assessment Onboarding</h3>
              <p className="text-muted">
                Onboard securely. Evaluate existing competencies within 24-48 hours. Receive immediate provisional certificates mapping progress metrics, allowing teams to align resources appropriately.
              </p>
            </div>
            
            <div className="bento-card flex-column justify-center gap-sm">
              <div className="bento-icon-box icon-orange"><FaCertificate size={26} /></div>
              <h3>100% Digital & Self-Paced</h3>
              <p className="text-muted">
                Complete learning programs at your convenience. No rigid scheduling bottlenecks, enabling working professionals to learn without operational interruptions.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 5. Learning Journey (Horizontal animated roadmap) */}
      <section className="journey-roadmap-section section">
        <div className="container">
          <div className="section-header">
            <span className="text-accent" style={{ fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Methodology</span>
            <h2>Your Journey to Certification</h2>
            <p>A systematic framework structured to validate capability and secure globally acknowledged credentials.</p>
          </div>

          <div className="roadmap-horizontal-container">
            <div className="roadmap-horizontal-track">
              {/* Step 1 */}
              <div className="roadmap-node-luxury flex-column gap-sm">
                <span className="node-number">01</span>
                <h4>Application & Intake</h4>
                <p className="text-muted">Register details on our digital platform. Our advisory team coordinates your onboarding criteria.</p>
              </div>

              {/* Step 2 */}
              <div className="roadmap-node-luxury flex-column gap-sm">
                <span className="node-number">02</span>
                <h4>Diagnostic Pre-Assessment</h4>
                <p className="text-muted">Launch pre-assessment within 24-48 hours. Secure digital "In-Progress" certificates mapping current skills.</p>
              </div>

              {/* Step 3 */}
              <div className="roadmap-node-luxury flex-column gap-sm">
                <span className="node-number">03</span>
                <h4>Skill Prep & Curated Resources</h4>
                <p className="text-muted">Progress at your own pace through structured study guides and practice simulations.</p>
              </div>

              {/* Step 4 */}
              <div className="roadmap-node-luxury flex-column gap-sm">
                <span className="node-number">04</span>
                <h4>Final Evaluation & Award</h4>
                <p className="text-muted">Appear for final examinations and secure official "Certified" credentials uploaded globally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Success Dashboard (Circular progress stats) */}
      <section className="success-dashboard-section section">
        <div className="container grid grid-2 align-center">
          
          <div className="dashboard-metrics-text flex-column gap-md">
            <span className="text-accent" style={{ fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Data & Performance</span>
            <h2>Setting the Global Benchmark for Certification</h2>
            <p className="text-muted">
              We leverage analytical diagnostics to secure superior examination outcomes. Our learners consistently outperform baseline industry benchmarks, securing access to senior organizational roles globally.
            </p>
            
            <div className="metrics-detail-grid grid grid-2 my-md">
              <div className="metric-box-luxury flex-column">
                <span className="m-val">99.4%</span>
                <span className="m-lbl">Pre-Assessment Correlated Success</span>
              </div>
              <div className="metric-box-luxury flex-column">
                <span className="m-val">120K+</span>
                <span className="m-lbl">Issued Professional Credentials</span>
              </div>
            </div>
          </div>

          {/* Right SVG Statistics dashboard layout */}
          <div className="dashboard-visual-wrapper">
            <div className="glass-panel statistics-dashboard flex-column gap-lg">
              <div className="stat-heading flex-between">
                <span>Certification Score Distribution</span>
                <span className="badge-glow-green">Active System</span>
              </div>

              {/* SVG Bar Chart */}
              <div className="bar-chart-container">
                <svg viewBox="0 0 400 200" className="svg-bars">
                  <line x1="40" y1="20" x2="40" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <line x1="40" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  
                  {/* Grid Lines */}
                  <line x1="40" y1="60" x2="380" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="120" x2="380" y2="120" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4" />
                  
                  {/* Bars */}
                  <rect x="70" y="80" width="30" height="100" fill="url(#blueGrad)" rx="4" />
                  <rect x="130" y="50" width="30" height="130" fill="url(#orangeGrad)" rx="4" />
                  <rect x="190" y="90" width="30" height="90" fill="url(#blueGrad)" rx="4" />
                  <rect x="250" y="30" width="30" height="150" fill="url(#orangeGrad)" rx="4" />
                  <rect x="310" y="70" width="30" height="110" fill="url(#blueGrad)" rx="4" />

                  {/* Axis labels */}
                  <text x="85" y="195" fill="#94A3B8" fontSize="10" textAnchor="middle">PMP</text>
                  <text x="145" y="195" fill="#94A3B8" fontSize="10" textAnchor="middle">CAPM</text>
                  <text x="205" y="195" fill="#94A3B8" fontSize="10" textAnchor="middle">ACP</text>
                  <text x="265" y="195" fill="#94A3B8" fontSize="10" textAnchor="middle">CompTIA</text>
                  <text x="325" y="195" fill="#94A3B8" fontSize="10" textAnchor="middle">ITIL</text>

                  {/* Definitions */}
                  <defs>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1E3A8A" />
                      <stop offset="100%" stopColor="#050816" />
                    </linearGradient>
                    <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF7A00" />
                      <stop offset="100%" stopColor="#FF9E2A" opacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Student Testimonials (Floating Glassmorphism Cards) */}
      <section className="testimonials-luxury-section section">
        <div className="container">
          <div className="section-header">
            <span className="text-accent" style={{ fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Validation</span>
            <h2>Success Stories from Leading Divisions</h2>
            <p>How project leaders successfully optimized their credential metrics and career momentum.</p>
          </div>

          <div className="testimonials-luxury-grid grid grid-2 gap-lg">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-panel testimonial-luxury-card flex-column justify-between gap-md">
                <div className="test-content flex-column gap-sm">
                  <div className="stars-row flex gap-xs text-accent">
                    {[...Array(t.rating)].map((_, i) => <FaStar key={i} size={14} />)}
                  </div>
                  <p className="test-quote">"{t.quote}"</p>
                </div>
                
                <div className="test-author-row flex align-center gap-sm">
                  <div className="author-details">
                    <h4>{t.author}</h4>
                    <span className="text-muted" style={{ fontSize: '0.8rem' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Corporate Solutions (Full-width modern banner) */}
      <section className="corporate-luxury-banner">
        <div className="container">
          <div className="glass-panel corp-banner-panel flex-between flex-wrap gap-xl">
            <div className="corp-banner-text flex-column gap-sm">
              <span className="text-accent" style={{ fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Enterprise Offerings</span>
              <h2>Scale Your Team’s Capabilities</h2>
              <p className="text-muted" style={{ maxWidth: '650px', fontSize: '1rem', lineHeight: '1.6' }}>
                Onboard entire project teams. Streamline certifications, monitor prep indexes via administrative dashboards, and implement standards-aligned processes across global branches.
              </p>
            </div>
            
            <div className="corp-banner-actions">
              <Link to="/partnerships" className="btn btn-primary">
                Corporate Partnerships <FaArrowRight style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ (Modern Accordion) */}
      <section className="faq-section section">
        <div className="container max-w-800">
          <div className="section-header">
            <span className="text-accent" style={{ fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Support</span>
            <h2>Common Queries</h2>
            <p>Answers to administrative and preparation-related questions.</p>
          </div>

          <div className="faq-luxury-timeline flex-column gap-md">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`glass-panel faq-luxury-item ${activeFaq === idx ? 'active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-luxury-question flex-between">
                  <h4>{faq.q}</h4>
                  <span className="faq-toggle-icon">{activeFaq === idx ? '−' : '+'}</span>
                </div>
                <div className="faq-luxury-answer">
                  <p className="text-muted">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9.5 Recruitment Fraud Disclaimer Section (2nd Last Section) */}
      <section className="disclaimer-luxury-section section">
        <div className="container max-w-800">
          <div className="glass-panel disclaimer-card flex-column gap-sm" style={{ padding: 'var(--spacing-xl)', borderRadius: '16px', background: 'rgba(239, 68, 68, 0.02)', border: '1px solid rgba(239, 68, 68, 0.15)', boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)', position: 'relative', zIndex: '2' }}>
            <div className="disclaimer-header flex align-center gap-sm" style={{ color: '#ef4444', fontWeight: '700', fontSize: '1.2rem', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
              <FaShieldAlt style={{ marginRight: '8px' }} /> Recruitment Fraud Disclaimer
            </div>
            <div className="disclaimer-content text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                <strong>PMI Solutions does not charge any fee or request payment in exchange for employment opportunities.</strong> Our employees, recruiters, representatives, or authorized partners will never ask candidates to pay any amount for job applications, interviews, offer letters, training, onboarding, or employment.
              </p>
              <p>
                If anyone claiming to represent PMI Solutions requests money, bank details, UPI payments, gift cards, or any other form of payment in relation to a job opportunity, please treat it as fraudulent. We strongly advise candidates to verify the authenticity of any communication before responding or making any payment.
              </p>
              <p>
                If you receive any suspicious emails, phone calls, messages, or job offers claiming to be from PMI Solutions, please report them immediately by emailing:<br/>
                <strong>Email: <a href="mailto:support@pmisolutions.in" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>support@pmisolutions.in</a></strong>
              </p>
              <p style={{ fontSize: '0.85rem', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '10px', marginTop: '4px' }}>
                PMI Solutions shall not be responsible for any loss arising from fraudulent recruitment activities carried out by unauthorized individuals or third parties. <strong>Stay alert. Never pay for a job.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact (Beautiful split layout) */}
      <section className="contact-luxury-section section">
        <div className="container grid grid-2 gap-xl align-start">
          
          <div className="contact-details-column flex-column gap-lg animate-fade-in">
            <div className="contact-text-header">
              <span className="text-accent" style={{ fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Connect</span>
              <h2>Ready to Align Your Project Pathways?</h2>
              <p className="text-muted">
                Our certification coordinators are online. Submit coordinates to initiate Diagnostic Pre-Assessment onboarding parameters.
              </p>
            </div>

            <div className="luxury-contact-nodes flex-column gap-md">
              <div className="luxury-contact-card glass-panel flex align-center gap-md">
                <FaGlobe className="text-accent" size={20} />
                <div>
                  <h4>Corporate Office</h4>
                  <p className="text-muted" style={{ fontSize: '0.85rem' }}>Plot No 4, Sector 135, 6nd Floor, Aykon Tower, Noida</p>
                </div>
              </div>
              
              <div className="luxury-contact-card glass-panel flex align-center gap-md">
                <FaUsers className="text-accent" size={20} />
                <div>
                  <h4>Official Coordination Support</h4>
                  <p className="text-muted" style={{ fontSize: '0.85rem' }}>support@pmisolutions.in</p>
                </div>
              </div>
            </div>


          </div>

          <div className="contact-form-column animate-fade-in">
            <div className="glass-panel form-luxury-card flex-column gap-md">
              <div className="form-hdr text-center">
                <h3>Launch Diagnostic Registration</h3>
                <p className="text-muted" style={{ fontSize: '0.85rem' }}>Secure preliminary credential tracking ID in 24 hours.</p>
              </div>
              <Form />
            </div>
          </div>

        </div>
      </section>

      <style>{`
        /* Global Redesign Styling overrides */
        .home-page-luxury {
          position: relative;
          padding-top: 100px;
        }

        /* 1. Hero Styling */
        .luxury-hero {
          padding: var(--spacing-xxl) 0;
          min-height: 85vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.35rem 0.95rem;
          border-radius: 50px;
          margin-bottom: var(--spacing-md);
          position: relative;
        }

        :root.light-theme .hero-badge-pill {
          background: rgba(15, 23, 42, 0.06);
          border: 1px solid rgba(15, 23, 42, 0.15);
        }

        .badge-glow {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-color);
        }

        .badge-text {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--text-dark);
          text-transform: uppercase;
        }

        :root.light-theme .badge-text {
          color: #0F172A;
        }

        .hero-headline {
          font-size: 3.4rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1px;
          color: var(--text-dark);
          margin-bottom: var(--spacing-md);
        }

        .text-glow-orange {
          background: linear-gradient(135deg, #FF7A00 0%, #FF9E2A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .hero-description-text {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: var(--spacing-xl);
        }

        .hero-cta-group {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xxl);
        }

        .hero-main-btn {
          padding: 0.95rem 2.2rem;
          font-size: 0.95rem;
        }

        .hero-sec-btn {
          padding: 0.95rem 2.2rem;
          font-size: 0.95rem;
        }

        .hero-metrics-row {
          display: flex;
          gap: var(--spacing-xl);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: var(--spacing-lg);
        }

        .metric-node {
          display: flex;
          flex-direction: column;
        }

        .metric-num {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-dark);
        }

        .metric-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* Hero visual block dashboard widget */
        .dashboard-widget {
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
          background: rgba(10, 14, 41, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }

        .widget-header {
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 0.85rem var(--spacing-lg);
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .header-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }

        .widget-title {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 1px;
        }

        .widget-body {
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .widget-chart-row {
          display: flex;
          justify-content: space-around;
          gap: var(--spacing-md);
        }

        .radial-stat-box {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          background: rgba(255, 255, 255, 0.02);
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          flex: 1;
        }

        .circular-meter {
          width: 50px;
          height: 50px;
          transform: rotate(-90deg);
        }

        .circle-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.05);
          stroke-width: 8;
        }

        .circle-fill {
          fill: none;
          stroke: #1e3a8a;
          stroke-width: 8;
          stroke-linecap: round;
        }
        .circular-meter.meter-orange .circle-fill {
          stroke: var(--accent-color);
        }

        .radial-text {
          display: flex;
          flex-direction: column;
        }

        .radial-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-dark);
        }

        .radial-lbl {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .activity-feed {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .feed-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-sm) var(--spacing-md);
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 10px;
        }

        .feed-icon {
          color: #10b981;
          flex-shrink: 0;
        }
        .feed-icon.icon-orange {
          color: var(--accent-color);
        }

        .feed-details {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .feed-msg {
          font-size: 0.8rem;
          margin: 0;
          color: var(--text-dark);
          line-height: 1.3;
        }

        .feed-time {
          font-size: 0.68rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .video-background-teaser {
          height: 130px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .teaser-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .teaser-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(5, 8, 22, 0.65);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-xs);
          color: #ffffff;
          fill: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .teaser-overlay:hover {
          background: rgba(5, 8, 22, 0.5);
        }

        /* 2. Companies Section */
        .companies-section {
          padding: var(--spacing-lg) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          background: rgba(5, 8, 22, 0.3);
        }

        .companies-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: var(--spacing-md);
        }

        /* 3. Bento Icons */
        .bento-icon-box {
          background: rgba(30, 58, 138, 0.15);
          border: 1px solid rgba(30, 58, 138, 0.3);
          color: var(--secondary-color);
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .bento-icon-box.icon-orange {
          background: rgba(255, 122, 0, 0.12);
          border-color: rgba(255, 122, 0, 0.3);
          color: var(--accent-color);
        }

        /* 4. Luxury Tabs */
        .luxury-tabs {
          margin-top: var(--spacing-lg);
        }

        .luxury-tab-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--text-muted);
          padding: 0.55rem 1.3rem;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .luxury-tab-btn:hover {
          color: var(--text-dark);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .luxury-tab-btn.active {
          background: var(--gradient-primary);
          color: #ffffff;
          border-color: rgba(30, 58, 138, 0.5);
          box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
        }

        .cert-luxury-card {
          padding: var(--spacing-xl);
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all var(--transition-normal);
        }

        .cert-luxury-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 122, 0, 0.3);
          box-shadow: 0 15px 35px rgba(255, 122, 0, 0.06);
        }

        .cert-category-badge {
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(30, 58, 138, 0.12);
          border: 1px solid rgba(30, 58, 138, 0.25);
          color: var(--secondary-color);
          padding: 0.25rem 0.65rem;
          border-radius: 30px;
          text-transform: uppercase;
        }

        .cert-rate-badge {
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #10b981;
          padding: 0.25rem 0.65rem;
          border-radius: 30px;
          display: flex;
          align-items: center;
        }

        .cert-luxury-card h3 {
          font-size: 1.25rem;
          color: var(--text-dark);
          margin-top: 4px;
        }

        .cert-footer-row {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: var(--spacing-md);
          margin-top: var(--spacing-xs);
        }

        .cert-duration {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .cert-link-arrow {
          color: var(--accent-color);
          transition: transform var(--transition-fast);
        }

        .cert-luxury-card:hover .cert-link-arrow {
          transform: translateX(4px);
        }

        /* 5. Horizontal Roadmap */
        .roadmap-horizontal-container {
          overflow-x: auto;
          padding: var(--spacing-xl) 0;
          width: 100%;
          scrollbar-width: none; /* Firefox */
        }
        
        .roadmap-horizontal-container::-webkit-scrollbar {
          display: none; /* Safari & Chrome */
        }

        .roadmap-horizontal-track {
          display: flex;
          gap: var(--spacing-xxl);
          width: max-content;
          position: relative;
          padding-left: var(--spacing-lg);
        }

        .roadmap-horizontal-track::before {
          content: '';
          position: absolute;
          top: 30px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, rgba(30, 58, 138, 0.1) 0%, rgba(255, 122, 0, 0.4) 50%, rgba(30, 58, 138, 0.1) 100%);
          z-index: 1;
        }

        .roadmap-node-luxury {
          width: 280px;
          position: relative;
          z-index: 2;
        }

        .node-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid var(--accent-color);
          color: var(--text-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 800;
          box-shadow: 0 0 15px rgba(255, 122, 0, 0.2);
          margin-bottom: var(--spacing-sm);
        }

        .roadmap-node-luxury h4 {
          color: var(--text-dark);
          font-size: 1.15rem;
          margin-top: 4px;
        }

        /* 6. Success Dashboard statistics panel */
        .metric-box-luxury {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: var(--spacing-md) var(--spacing-lg);
        }

        .m-val {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent-color);
          line-height: 1.1;
        }

        .m-lbl {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .statistics-dashboard {
          padding: var(--spacing-xl);
          background: rgba(10, 14, 41, 0.4);
          border-radius: 20px;
        }

        .badge-glow-green {
          font-size: 0.7rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #10b981;
          padding: 0.25rem 0.65rem;
          border-radius: 30px;
        }

        .bar-chart-container {
          margin-top: var(--spacing-md);
        }

        .svg-bars text {
          font-family: var(--font-primary);
        }

        /* 7. Testimonials Luxury */
        .testimonial-luxury-card {
          padding: var(--spacing-xl);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .testimonial-luxury-card:hover {
          transform: translateY(-5px);
          border-color: rgba(30, 58, 138, 0.3);
          box-shadow: 0 15px 35px rgba(30, 58, 138, 0.05);
        }

        .test-quote {
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--text-dark);
          font-style: italic;
        }

        .author-details h4 {
          font-size: 0.98rem;
          color: var(--text-dark);
          margin: 0;
        }

        /* 8. Corporate Solutions full width banner */
        .corp-banner-panel {
          padding: var(--spacing-xxl) var(--spacing-xl);
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(10, 14, 41, 0.5) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        /* 9. FAQ Luxury accordions */
        .faq-luxury-timeline {
          max-width: 800px;
          margin: 0 auto;
        }

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
          color: var(--text-dark);
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
          max-height: 200px;
          margin-top: var(--spacing-md);
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding-top: var(--spacing-md);
        }

        /* 10. Contact split */
        .luxury-contact-card {
          padding: var(--spacing-md) var(--spacing-lg);
          border-radius: 12px;
        }

        .luxury-contact-card h4 {
          font-size: 0.98rem;
          color: var(--text-dark);
          margin: 0 0 2px 0;
        }

        .map-glass-wrapper {
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
        }

        .form-luxury-card {
          padding: var(--spacing-xl);
          background: rgba(10, 14, 41, 0.4);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .form-hdr h3 {
          font-size: 1.35rem;
          color: var(--text-dark);
          margin: 0 0 4px 0;
        }

        @media (max-width: 1024px) {
          .hero-headline {
            font-size: 2.6rem;
          }
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2.2rem;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group .btn {
            width: 100%;
          }
          .hero-metrics-row {
            flex-wrap: wrap;
            gap: var(--spacing-md);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
