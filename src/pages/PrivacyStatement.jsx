import React from 'react';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';

const PrivacyStatement = () => {
  return (
    <div className="privacy-page">
      {/* 0. Pure Full-Width Hero Section Image */}
      <section 
        className="privacy-hero animate-fade-in"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          position: 'relative'
        }}
      />

      {/* 1. Header */}
      <section className="page-header py-xl bg-gray">
        <div className="container animate-fade-in">
          <span className="section-label">Data Protection</span>
          <h1>Privacy Policy</h1>
          <p className="lead-p">This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from the Site.</p>
          <p className="lead-p">We are committed to protecting your privacy and ensuring a secure online experience. This policy explains our practices regarding data collection, processing, and storage.</p>
        </div>
      </section>

      {/* 2. Content */}
      <SectionWrapper bg="white">
        <div className="privacy-container flex-column gap-xl animate-fade-in">
          
          {/* Section 1 */}
          <div className="privacy-section">
            <h3>Personal Information We Collect</h3>
            <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
            <p>Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p>
            <p>We collect Device Information using cookies, log files, web beacons, tags, and pixels. These technologies allow us to monitor and secure our infrastructure effectively.</p>
          </div>

          {/* Section 2 */}
          <div className="privacy-section">
            <h3>How Do We Use Your Personal Information?</h3>
            <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>
            <p>Additionally, we use this Order Information to: Communicate with you; Screen our orders for potential risk or fraud; and When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>
            <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
          </div>

          {/* Section 3 */}
          <div className="privacy-section">
            <h3>Sharing Your Personal Information</h3>
            <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="external-link">Google Privacy Policy</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="external-link">Google Analytics Opt-out</a>.</p>
            <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
          </div>

          {/* Section 4 */}
          <div className="privacy-section">
            <h3>Data Retention & Changes</h3>
            <h5 className="sub-h5">Data Retention</h5>
            <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
            <h5 className="sub-h5">Changes</h5>
            <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
          </div>

          {/* Section 5 */}
          <div className="privacy-section">
            <h3>Contact Us</h3>
            <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:support@pmisolutions.in" className="email-highlight">support@pmisolutions.in</a>.</p>
          </div>

        </div>
      </SectionWrapper>

      <style>{`
        .privacy-page {
          overflow-x: hidden;
        }

        .privacy-hero {
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
          margin-bottom: var(--spacing-sm);
        }

        .privacy-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .privacy-section {
          background-color: var(--bg-primary);
          padding: var(--spacing-xl);
          border-radius: 8px;
          border: 1px solid var(--border-color);
          box-shadow: var(--card-shadow);
          border-left: 4px solid var(--primary-color);
        }

        .privacy-section h3 {
          font-size: 1.35rem;
          color: var(--primary-color);
          margin-bottom: var(--spacing-md);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .sub-h5 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary-color);
          margin: var(--spacing-md) 0 var(--spacing-xs) 0;
        }

        .privacy-section p {
          font-size: 0.95rem;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }

        .privacy-section p:last-child {
          margin-bottom: 0;
        }

        .external-link {
          color: var(--accent-color);
          text-decoration: underline;
        }

        .external-link:hover {
          color: var(--accent-hover);
        }

        .email-highlight {
          color: var(--accent-color);
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .privacy-hero {
            height: 250px;
            margin-top: 70px;
          }

          .page-header {
            padding-top: 2rem !important;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyStatement;
