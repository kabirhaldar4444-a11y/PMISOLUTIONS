import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ 
  title, 
  subtitle, 
  ctaText = 'Get Started', 
  ctaPath = '/contact', 
  className = '',
  videoSrc = null,
  backgroundImage = null,
  ...props 
}) => {
  return (
    <section className={`hero-banner flex-center ${videoSrc ? 'has-video' : ''} ${className}`} style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {}} {...props}>
      {videoSrc && (
        <video 
          className="hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {videoSrc && <div className="hero-video-overlay"></div>}
      {backgroundImage && <div className="hero-image-overlay"></div>}

      <div className="container hero-container animate-fade-in">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        <div className="hero-actions">
          <Link to={ctaPath} className="btn btn-primary hero-btn">
            {ctaText}
          </Link>
        </div>
      </div>

      <style>{`
        .hero-banner {
          background: linear-gradient(135deg, #0a1d37 0%, #132c4a 100%);
          padding: 8.5rem 0 6.5rem 0; /* Add top spacing for fixed header */
          text-align: center;
          color: var(--text-light);
          position: relative;
          overflow: hidden;
          min-height: 50vh;
        }

        .hero-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 20%, rgba(240, 112, 0, 0.12) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-video-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(-50%, -50%);
          z-index: 1;
          pointer-events: none;
        }

        .hero-video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(10, 29, 55, 0.78) 0%, rgba(19, 44, 74, 0.82) 100%);
          z-index: 2;
          pointer-events: none;
        }

        .hero-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(10, 29, 55, 0.75) 0%, rgba(19, 44, 74, 0.8) 100%);
          z-index: 2;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 3;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-md);
        }

        .hero-title {
          font-size: 2.8rem;
          color: var(--text-light);
          font-weight: 800;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--spacing-sm);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #cbd5e0;
          max-width: 750px;
          line-height: 1.5;
          margin-bottom: var(--spacing-lg);
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          width: 100%;
        }

        .hero-btn {
          padding: 0.9rem 2.25rem;
          font-size: 1rem;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .hero-banner {
            padding: 7.5rem 0 5rem 0;
            min-height: auto;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
