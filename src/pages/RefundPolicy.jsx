import React from 'react';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';

const RefundPolicy = () => {
  return (
    <div className="refund-page">
      {/* 0. Pure Full-Width Hero Section Image */}
      <section 
        className="refund-hero animate-fade-in"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80)',
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
          <span className="section-label">Financial Policies</span>
          <h1>Refund Policy</h1>
          <p className="lead-p">Please review our financial refund policies below. By enrolling in our programs, you accept all financial conditions, timelines, and deductions outlined herein.</p>
        </div>
      </section>

      {/* 2. Content */}
      <SectionWrapper bg="white">
        <div className="refund-container flex-column gap-xl animate-fade-in">
          
          {/* Section 1 */}
          <div className="refund-section">
            <h3>No Refund After Examination Attempt</h3>
            <ul className="refund-bullet-list">
              <li>Once a participant has attempted any assessment, including the Pre-Assessment or Final Examination, no refund will be issued under any circumstances. This applies regardless of the outcome or performance in the assessment.</li>
              <li>This policy is in place to ensure the integrity and fairness of the program, as access to learning materials, evaluation systems, and related resources is considered fully utilized upon examination attempt.</li>
              <li>Participants are strongly advised to review all course details, policies, and readiness before attempting any assessment, as this action confirms full participation in the evaluation process.</li>
              <li>By proceeding with any assessment, participants acknowledge and accept that they forfeit eligibility for any refund, in accordance with the program’s terms and conditions.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="refund-section">
            <h3>90% Refund Policy (Before Assessment Attempt)</h3>
            <ul className="refund-bullet-list">
              <li>Participants who choose to cancel their enrollment before attempting the Pre-Assessment are eligible for a refund of up to 90% of the total course fee.</li>
              <li>To qualify, the refund request must be submitted within 24 hours of the payment confirmation, and the participant must not have attempted the Pre-Assessment. Requests that do not meet these conditions will not be considered eligible for a refund.</li>
              <li>All refund requests must be formally submitted in writing via email to PMI Solutions official support team.</li>
              <li>Once approved, refunds will be initiated within 5–7 working days. Please note that it may take an additional period of up to 7 working days for the refunded amount to reflect in the original payment method, depending on the financial institution.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="refund-section">
            <h3>No Full Refund Policy</h3>
            <ul className="refund-bullet-list">
              <li>Please note that PMI Solutions does not offer a 100% refund under any circumstances. This policy applies uniformly to all participants without exception.</li>
              <li>This policy is implemented to account for administrative expenses, processing charges, and access to digital learning materials that are allocated at the time of enrollment.</li>
              <li>A portion of the fee is utilized immediately upon registration to facilitate onboarding, system access, and resource allocation, making full refunds impractical.</li>
              <li>Participants are encouraged to carefully review the program details, fee structure, and refund policy before completing their enrollment.</li>
              <li>By enrolling in the program, participants acknowledge and accept that full refunds are not applicable and agree to the stated financial terms.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="refund-section">
            <h3>Refund Request Process</h3>
            <ul className="refund-bullet-list">
              <li>To initiate a refund, participants must submit a request via email to the official PMI Solutions support team, including the following details: full name, registered email address, course title, proof of payment, and the reason for cancellation.</li>
              <li>Please ensure that all required information is provided, as incomplete requests may result in delays in processing.</li>
              <li>Refund requests must be submitted within the eligible time frame as defined in the program’s refund policy; requests submitted beyond this period may not be considered.</li>
              <li>The review and approval of refund requests are subject to verification of the provided details and compliance with all applicable terms and conditions.</li>
              <li>Participants are advised to retain a copy of their refund request and any related communication for future reference.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="refund-section">
            <h3>Processing Fee Deduction on Refunds</h3>
            <ul className="refund-bullet-list">
              <li>A processing fee deduction of 10% will be applied to all eligible refunds to cover administrative costs, platform charges, and the onboarding process.</li>
              <li>This deduction is applicable to all refund requests, including those submitted within the initial 24-hour period prior to attempting any assessment.</li>
              <li>The remaining 90% of the course fee will be credited back to the participant’s original payment method upon successful approval and verification.</li>
              <li>By enrolling, participants agree to this processing fee deduction and accept the financial terms regarding course cancellations and refunds.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="refund-section">
            <h3>Policy Acceptance</h3>
            <ul className="refund-bullet-list">
              <li>Enrollment confirms that the participant has carefully read, understood, and accepted all terms outlined, including those related to payments, course access, assessments, timelines, and refund policies. Continued use of PMI Solutions and learning materials constitutes full acceptance of these terms and conditions.</li>
              <li>Participants are responsible for reviewing all policies prior to enrollment to ensure complete understanding of the program structure and requirements.</li>
              <li>PMI Solutions reserves the right to update or modify its policies and terms at any time, and continued participation in the program will be considered acceptance of any such changes.</li>
            </ul>
          </div>

        </div>
      </SectionWrapper>

      <style>{`
        .refund-page {
          overflow-x: hidden;
        }

        .refund-hero {
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

        .refund-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .refund-section {
          background-color: var(--bg-primary);
          padding: var(--spacing-xl);
          border-radius: 8px;
          border: 1px solid var(--border-color);
          box-shadow: var(--card-shadow);
          border-left: 4px solid var(--accent-color);
        }

        .refund-section h3 {
          font-size: 1.35rem;
          color: var(--primary-color);
          margin-bottom: var(--spacing-md);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .refund-bullet-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          padding-left: 20px;
        }

        .refund-bullet-list li {
          font-size: 0.95rem;
          color: #4a5568;
          line-height: 1.6;
          position: relative;
        }

        @media (max-width: 768px) {
          .refund-hero {
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

export default RefundPolicy;
