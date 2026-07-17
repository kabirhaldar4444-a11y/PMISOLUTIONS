import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { footerAbout, footerQuickLinks, footerContactInfo, footerPolicyLinks } from '../../data/footerData';
import LogoImage from '../../assets/images/logo/PMI Solutions.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setSuccessMsg('Submitting email...');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "ef703b89-4260-498d-90f8-5947a84ba4ab",
          subject: "New PMIS Newsletter Subscription",
          email: email
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setSuccessMsg('Thank you for subscribing to our newsletter!');
        setEmail('');
      } else {
        setSuccessMsg('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setSuccessMsg('Network error. Please try again later.');
    }

    setTimeout(() => {
      setSuccessMsg('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-top-grid">
        {/* Left Column: Brand & Newsletter */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo-area">
            <img src={LogoImage} alt="PMI Solutions Logo" className="footer-logo" />
            <div className="logo-text-wrapper light">
              <span className="logo-main-text">PMI</span>
              <span className="logo-sub-text">SOLUTIONS</span>
            </div>
          </Link>
          <p className="footer-subtext">{footerAbout.subText}</p>
          
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email Address *" 
                className="form-control footer-input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="newsletter-checkbox">
              <input type="checkbox" id="newsletter-check" required defaultChecked />
              <label htmlFor="newsletter-check">{footerAbout.newsletterTitle}</label>
            </div>
            <button type="submit" className="btn btn-primary footer-submit-btn">
              Submit
            </button>
            {successMsg && <span className="newsletter-success">{successMsg}</span>}
          </form>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links-list">
            {footerQuickLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="footer-link-item">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle-Right Column: Contact Info */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Contact Us</h4>
          <p className="contact-email">
            <strong>Email:</strong> <a href={`mailto:${footerContactInfo.email}`}>{footerContactInfo.email}</a>
          </p>
          <div className="contact-email">
            <strong>Phone:</strong>
            {footerContactInfo.phones.map((num, i) => (
              <a key={i} href={`tel:${num.replace(/\s/g, '')}`} style={{ display: 'block' }}>{num}</a>
            ))}
          </div>
          <div className="address-details">
            {footerContactInfo.addresses.map((addr, idx) => (
              <div key={idx} style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#ffffff', fontWeight: '700', display: 'block' }}>{addr.name}:</strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem', lineHeight: '1.4' }}>{addr.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Policies */}
        <div className="footer-col policies-col">
          <h4 className="footer-heading">Policies</h4>
          <ul className="footer-links-list">
            {footerPolicyLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="footer-link-item">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container flex-between flex-wrap gap-md">
          <p className="copyright">
            &copy; {new Date().getFullYear()} PMI Solutions. All Rights Reserved.
          </p>
          <p className="disclaimer">
            Delivering Globally Recognized Certifications in Different Domains.
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: #03050C;
          color: #94a3b8;
          padding-top: var(--spacing-xxl);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1.8fr 1.2fr;
          gap: var(--spacing-xxl);
          padding-bottom: var(--spacing-xxl);
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .footer-logo-area {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .footer-logo {
          height: 170px;
          width: auto;
          object-fit: contain;
        }

        .logo-text-wrapper.light .logo-main-text {
          color: #ffffff;
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: 1px;
          line-height: 0.95;
        }

        .logo-text-wrapper.light .logo-sub-text {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 3.5px;
          color: var(--accent-color);
          line-height: 1;
          margin-top: 2px;
        }

        .footer-subtext {
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .footer-heading {
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding-bottom: var(--spacing-xs);
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: var(--accent-color);
        }

        .footer-links-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .footer-link-item {
          color: #94a3b8;
          transition: all var(--transition-normal);
          display: inline-block;
          font-size: 0.92rem;
        }

        .footer-link-item:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .contact-email {
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .contact-email a {
          color: var(--accent-color);
          font-weight: 600;
          transition: color var(--transition-fast);
        }

        .contact-email a:hover {
          color: var(--text-light);
        }

        .address-details {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #94a3b8;
        }

        .address-details p {
          margin: 2px 0;
          color: #e2e8f0;
        }

        .address-details strong {
          color: var(--text-light);
          display: block;
          margin-bottom: var(--spacing-xs);
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          max-width: 320px;
        }

        .footer-input {
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-light);
          padding: 0.6rem 0.8rem;
          font-size: 0.9rem;
        }

        .footer-input::placeholder {
          color: #718096;
        }

        .footer-input:focus {
          border-color: var(--accent-color);
          background-color: rgba(255, 255, 255, 0.12);
        }

        .newsletter-checkbox {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
        }

        .newsletter-checkbox input[type="checkbox"] {
          margin-top: 4px;
          cursor: pointer;
        }

        .newsletter-checkbox label {
          font-size: 0.75rem;
          color: #a0aec0;
          cursor: pointer;
          user-select: none;
        }

        .footer-submit-btn {
          width: fit-content;
          padding: 0.5rem 1.5rem;
          font-size: 0.8rem;
        }

        .newsletter-success {
          color: #48bb78;
          font-size: 0.85rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: var(--spacing-lg) 0;
          font-size: 0.85rem;
        }

        .copyright {
          margin-bottom: 0;
        }

        .disclaimer {
          margin-bottom: 0;
          color: #718096;
        }

        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-xl);
          }
        }

        @media (max-width: 768px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
