import React from 'react';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';

const ServiceDelivery = () => {
  return (
    <div className="delivery-page">
      {/* 0. Pure Full-Width Hero Section Image */}
      <section 
        className="delivery-hero animate-fade-in"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80)',
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
          <span className="section-label">Our Service Pledge</span>
          <h1>SERVICE: EXCELLENCE - RELIABILITY - CARE</h1>
          <p className="lead-p">We are committed to maintaining the highest service delivery standards across all our certification pathways. Below is the structured outline of our participant onboarding and program progression guidelines.</p>
        </div>
      </section>

      {/* 2. Content */}
      <SectionWrapper bg="white">
        <div className="delivery-container flex-column gap-xl animate-fade-in">
          
          {/* Section 1 */}
          <div className="delivery-section">
            <h3>Application & Enrollment Process</h3>
            <ul className="delivery-bullet-list">
              <li>Learners are required to submit their application through PMI Solutions official website.</li>
              <li>Following a successful submission, a member of our advisory team will connect with the learner to provide initial guidance and address any queries related to the program.</li>
              <li>Subsequently, a detailed communication will be shared via email, outlining the complete process, course structure, and applicable fee details. Where applicable, payments may also be processed through an authorized trainer or designated representative account, as permitted by PMI Solutions.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="delivery-section">
            <h3>Consultation & Program Guidance</h3>
            <ul className="delivery-bullet-list">
              <li>During the initial interaction, PMI Solutions advisory team provides a comprehensive overview of the program, including its learning structure and assessment stages.</li>
              <li>Participants are also guided through the complete certification journey, with a clear explanation of the progression pathway and key milestones involved in successfully completing the program.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="delivery-section">
            <h3>Enrollment Confirmation & Payment</h3>
            <ul className="delivery-bullet-list">
              <li>Upon confirmation of enrollment and successful fee payment, a GST-compliant invoice will be issued within 6 hours.</li>
              <li>Pre-Assessment study materials and relevant resources will be shared with the participant within 24 hours to help them begin their learning journey promptly.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="delivery-section">
            <h3>Diagnostic Assessment</h3>
            <ul className="delivery-bullet-list">
              <li>A Diagnostic Assessment (Pre-Assessment) is scheduled within 24–48 hours of payment to evaluate the participant’s existing knowledge and understanding of the subject area.</li>
              <li>Before the assessment, PMI Solutions support team will connect with the participant to provide clear guidance on the process, format, and requirements, ensuring they are well-prepared.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="delivery-section">
            <h3>Pre-Assessment Results</h3>
            <ul className="delivery-bullet-list">
              <li>The results of the Pre-Assessment are shared with the participant via email within 24–48 hours of completion.</li>
              <li>A provisional Professional Certificate, marked “Under Training,” is also issued to reflect the participant’s ongoing progress in the program.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="delivery-section">
            <h3>Merit-Based Rewards</h3>
            <ul className="delivery-bullet-list">
              <li>Participants who achieve a score of 80% or above in the assessment will be eligible for a performance-based reward.</li>
              <li>Eligible candidates can select one reward from five or more available options, which will be delivered as per the applicable process and timelines.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="delivery-section">
            <h3>Learning Period</h3>
            <ul className="delivery-bullet-list">
              <li>The program is designed to be completed within a flexible learning period of 90 to 120 days, allowing learners to progress at their own pace.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="delivery-section">
            <h3>Final Assessment</h3>
            <ul className="delivery-bullet-list">
              <li>The Final Assessment is conducted within the program duration of 90 to 120 days, allowing participants sufficient time to complete their learning and preparation.</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="delivery-section">
            <h3>Final Certification</h3>
            <ul className="delivery-bullet-list">
              <li>Upon successful completion of the program and meeting all assessment requirements, the final certificate is issued to the participant. The certificate will clearly reflect the status as “Certified.”</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="delivery-section">
            <h3>Ongoing Support</h3>
            <ul className="delivery-bullet-list">
              <li>PMI Solutions team stays connected with participants throughout their learning journey, offering continuous guidance and assistance to ensure a smooth and effective experience.</li>
            </ul>
          </div>

        </div>
      </SectionWrapper>

      <style>{`
        .delivery-page {
          overflow-x: hidden;
        }

        .delivery-hero {
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

        .delivery-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .delivery-section {
          background-color: var(--bg-primary);
          padding: var(--spacing-xl);
          border-radius: 8px;
          border: 1px solid var(--border-color);
          box-shadow: var(--card-shadow);
          border-left: 4px solid var(--primary-color);
        }

        .delivery-section h3 {
          font-size: 1.35rem;
          color: var(--primary-color);
          margin-bottom: var(--spacing-md);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .delivery-bullet-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          padding-left: 20px;
        }

        .delivery-bullet-list li {
          font-size: 0.95rem;
          color: #4a5568;
          line-height: 1.6;
          position: relative;
        }

        @media (max-width: 768px) {
          .delivery-hero {
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

export default ServiceDelivery;
