import React from 'react';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';

const TermsConditions = () => {
  return (
    <div className="terms-page">
      {/* 0. Pure Full-Width Hero Section Image */}
      <section 
        className="terms-hero animate-fade-in"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)',
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
          <span className="section-label">Legal Agreement</span>
          <h1>Terms & Conditions</h1>
          <p className="lead-p">Please read these Terms & Conditions carefully before enrolling in our professional certification programs. Your enrollment implies full acceptance of all terms, guidelines, and company policies outlined below.</p>
        </div>
      </section>

      {/* 2. Content Sections */}
      <SectionWrapper bg="white">
        <div className="terms-container flex-column gap-xl animate-fade-in">
          {/* Section 1 */}
          <div className="terms-section">
            <h3>Enrollment & Certification Terms</h3>
            <ul className="terms-bullet-list">
              <li>After successful registration and payment confirmation, participants will receive their invoice, course materials, and access to pre-recorded training sessions within 7–10 working days.</li>
              <li>A preliminary evaluation (Pre-Assessment) will be scheduled within 24–48 hours of enrollment through the official examination platform. Upon completion, learners will be issued a provisional digital certificate marked “In Progress” within 2–3 working days.</li>
              <li>The final examination must be completed within the defined program duration. Upon successfully meeting all requirements, candidates will receive their final digital certification confirming successful completion.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="terms-section">
            <h3>Learning Approach & Content Access</h3>
            <ul className="terms-bullet-list">
              <li>This program is designed to be completely self-paced, allowing participants to progress through the content at their own convenience without the need to attend any live or instructor-led sessions. This flexible structure enables learners to manage their schedule independently while completing the program.</li>
              <li>All study materials, including recorded lectures and supporting resources, are shared one time via the participant’s registered email after the enrollment is successfully confirmed. These materials are intended solely for the enrolled individual, and access is strictly personal. Sharing, distributing, or transferring the content to others is not permitted under any circumstances.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="terms-section">
            <h3>Examination Policy</h3>
            <ul className="terms-bullet-list">
              <li>Participants are allowed to appear for both the preliminary assessment and the final examination only once, and no opportunities for retakes or reattempts will be provided. Therefore, it is important for candidates to be well-prepared before attempting these evaluations.</li>
              <li>After successfully completing the final examination and meeting all required parameters, the candidate’s credentials and records will be updated in the system. The official digital certificate will be generated and issued within the specified timeframe.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="terms-section">
            <h3>Refund Policy</h3>
            <ul className="terms-bullet-list">
              <li>Refund requests will be considered only if the participant has not attempted either the preliminary or final examination. Once any assessment is attempted, the participant becomes ineligible for a refund.</li>
              <li>A mandatory deduction of 10% will be applied to cover administrative expenses and access to digital learning materials.</li>
              <li>Full (100%) refunds are not permitted under any condition.</li>
              <li>All refund decisions are final and will be handled according to the program's established refund policy guidelines.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="terms-section">
            <h3>Performance-Based Rewards</h3>
            <ul className="terms-bullet-list">
              <li>Learners who score 80% or above in the initial assessment may become eligible for special rewards, subject to company policies.</li>
              <li>Qualified candidates will be offered multiple reward options, typically valued between ₹50,000 and ₹1,00,000. Final allocation depends on availability and company discretion.</li>
              <li>By accepting any reward, candidates agree to allow PMI Solutions to use their name and photograph for promotional purposes across official platforms.</li>
              <li>Rewards will be dispatched within 45–60 days after the official declaration of results. Applicable manufacturer warranties will apply to all items.</li>
              <li>Tracking details will be shared via the registered email once dispatch is completed. Any delivery-related OTPs will also be communicated through official channels.</li>
              <li>PMI Solutions reserves the right to modify or withdraw the reward program at any time without prior notice.</li>            </ul>
          </div>

          {/* Section 6 */}
          <div className="terms-section">
            <h3>General Conditions</h3>
            <ul className="terms-bullet-list">
              <li>All timelines mentioned are approximate and may vary depending on the course selected as well as the participant’s pace and level of engagement.</li>
              <li>Learning materials and recorded sessions are shared only once after enrollment and will not be reissued under any circumstances.</li>
              <li>Participants are responsible for securely storing and maintaining access to all provided resources for future reference.</li>
              <li>By enrolling in the program, participants confirm that they have read, understood, and agreed to all the stated terms and conditions.</li>
              <li>Enrollment implies acceptance of all policies, and no exceptions will be made beyond what is outlined in the program guidelines.</li>
              <li>The program reserves the right to update or modify timelines and policies if required, with appropriate communication to participants.</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <style>{`
        .terms-page {
          overflow-x: hidden;
        }

        .terms-hero {
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
        }

        .terms-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .terms-section {
          background-color: var(--bg-primary);
          padding: var(--spacing-xl);
          border-radius: 8px;
          border: 1px solid var(--border-color);
          box-shadow: var(--card-shadow);
          border-left: 4px solid var(--primary-color);
        }

        .terms-section h3 {
          font-size: 1.35rem;
          color: var(--primary-color);
          margin-bottom: var(--spacing-md);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .terms-bullet-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          padding-left: 20px;
        }

        .terms-bullet-list li {
          font-size: 0.95rem;
          color: #4a5568;
          line-height: 1.6;
          position: relative;
        }

        @media (max-width: 768px) {
          .terms-hero {
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

export default TermsConditions;
