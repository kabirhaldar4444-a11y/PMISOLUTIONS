import React, { useState } from 'react';
import { countriesList } from '../../data/contactData';

const Form = ({ className = '', ...props }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    courseName: '',
    country: 'India',
    address: '',
    city: '',
    zipCode: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.firstName || !formData.lastName || !formData.email) return;

    setSubmitted(true);
    setSuccessMsg('Submitting details...');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "ef703b89-4260-498d-90f8-5947a84ba4ab",
          subject: `New PMI Solutions Course Registration: ${formData.firstName} ${formData.lastName}`,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          course_name: formData.courseName,
          country: formData.country,
          address: formData.address,
          city: formData.city,
          zip_code: formData.zipCode
        })
      });
      const result = await response.json();
      
      if (result.success) {
        setSuccessMsg('Registration Submitted Successfully! Our counselor will connect with you within 24 hours.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          courseName: '',
          country: 'India',
          address: '',
          city: '',
          zipCode: ''
        });
      } else {
        setSuccessMsg('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Web3Forms Registration Error:", error);
      setSuccessMsg('Network error. Please try again later.');
    }

    setTimeout(() => {
      setSubmitted(false);
      setSuccessMsg('');
    }, 5000);
  };

  return (
    <div className={`registration-form-card ${className}`} {...props}>
      <h3 className="form-title text-center">Registration</h3>
      {successMsg && (
        <div className="form-success-alert">
          {successMsg}
        </div>
      )}
      <form onSubmit={handleSubmit} className="actual-form">
        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John" 
              className="form-control" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe" 
              className="form-control" 
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@example.com" 
            className="form-control" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="courseName">Name of Course *</label>
          <input 
            type="text" 
            id="courseName" 
            name="courseName" 
            value={formData.courseName}
            onChange={handleChange}
            placeholder="e.g. Self-Confidence Building Training" 
            className="form-control" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country / Region</label>
          <select 
            id="country" 
            name="country" 
            value={formData.country}
            onChange={handleChange}
            className="form-control form-select"
          >
            {countriesList.map((country, idx) => (
              <option key={idx} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            value={formData.address}
            onChange={handleChange}
            placeholder="Street Address, Apartment, Suite" 
            className="form-control" 
          />
        </div>

        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              value={formData.city}
              onChange={handleChange}
              placeholder="Noida" 
              className="form-control" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip / Postal Code</label>
            <input 
              type="text" 
              id="zipCode" 
              name="zipCode" 
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="201318" 
              className="form-control" 
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary form-submit-btn w-100" disabled={submitted}>
          Submit Registration
        </button>
      </form>

      <style>{`
        .registration-form-card {
          background-color: var(--bg-primary);
          padding: var(--spacing-xl);
          border-radius: 8px;
          border: 1px solid var(--border-color);
          box-shadow: var(--hover-shadow);
          max-width: 500px;
          margin: 0 auto;
        }

        .form-title {
          font-size: 1.6rem;
          color: var(--primary-color);
          margin-bottom: var(--spacing-lg);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          padding-bottom: var(--spacing-xs);
        }

        .form-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 2px;
          background-color: var(--accent-color);
        }

        .form-success-alert {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
          padding: var(--spacing-md);
          border-radius: 4px;
          margin-bottom: var(--spacing-lg);
          font-size: 0.9rem;
          line-height: 1.4;
          text-align: center;
        }

        .actual-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }

        .form-select {
          cursor: pointer;
        }

        .form-submit-btn {
          margin-top: var(--spacing-md);
          padding: 0.85rem 0;
          font-weight: 700;
        }

        @media (max-width: 480px) {
          .form-row-2 {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
          
          .registration-form-card {
            padding: var(--spacing-lg);
          }
        }
      `}</style>
    </div>
  );
};

export default Form;
