import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { menuLinks, ctaButton } from '../../data/menuData';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import LogoImage from '../../assets/images/logo/PMI Solutions.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo-area" onClick={closeMenu}>
          <img src={LogoImage} alt="PMI Solutions Logo" className="header-logo" />
          <div className="logo-text-wrapper">
            <span className="logo-main-text">PMI</span>
            <span className="logo-sub-text">SOLUTIONS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {menuLinks.map((link, idx) => (
              <li key={idx} className="nav-item">
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <Link to={ctaButton.path} className="btn btn-primary header-cta">
            {ctaButton.text}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle-btn" onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${isOpen ? 'drawer-open' : ''}`}>
          <ul className="mobile-nav-links">
            {menuLinks.map((link, idx) => (
              <li key={idx} className="mobile-nav-item">
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? "mobile-nav-link active-link" : "mobile-nav-link"}
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="mobile-nav-item" style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--spacing-md)' }}>
              <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            </li>
            <li className="mobile-nav-item mobile-cta-item">
              <Link to={ctaButton.path} className="btn btn-primary w-100" onClick={closeMenu}>
                {ctaButton.text}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .site-header {
          position: fixed;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          max-width: 1200px;
          z-index: 1000;
          background-color: rgba(5, 8, 22, 0.75);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          transition: all var(--transition-normal);
          height: 75px;
          display: flex;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 50px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 0 var(--spacing-lg);
        }

        .header-scrolled {
          height: 65px;
          top: 8px;
          box-shadow: 0 20px 40px rgba(255, 122, 0, 0.05), 0 4px 20px rgba(0,0,0,0.5);
          background-color: rgba(5, 8, 22, 0.88);
          border-color: rgba(255, 122, 0, 0.3);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          width: 100%;
          padding: 0;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .header-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
          transition: height var(--transition-normal);
        }

        .header-scrolled .header-logo {
          height: 40px;
        }

        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
          font-family: var(--font-heading);
          color: #ffffff;
        }

        .logo-main-text {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: 1px;
          line-height: 0.95;
        }

        .logo-sub-text {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 3.5px;
          color: var(--accent-color);
          line-height: 1;
          margin-top: 2px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .nav-link {
          font-size: 0.92rem;
          font-weight: 500;
          color: #94a3b8;
          padding: 0.4rem 0.8rem;
          position: relative;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: var(--accent-color);
          transition: width var(--transition-fast);
        }

        .nav-link:hover::after,
        .nav-link.active-link::after {
          width: 15px;
        }

        .header-cta {
          padding: 0.55rem 1.4rem;
          font-size: 0.82rem;
        }

        .mobile-toggle-btn {
          display: none;
          color: #ffffff;
          z-index: 1001;
        }

        .mobile-nav-drawer {
          display: none;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle-btn {
            display: block;
          }

          .mobile-nav-drawer {
            display: block;
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 320px;
            height: 100vh;
            background-color: #050816;
            border-left: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: -10px 0 40px rgba(0,0,0,0.5);
            transition: right var(--transition-normal);
            padding: 100px var(--spacing-xl) var(--spacing-xl);
            z-index: 999;
          }

          .drawer-open {
            right: 0;
          }

          .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg);
          }

          .mobile-nav-link {
            font-size: 1.1rem;
            font-weight: 600;
            color: #ffffff;
            display: block;
            padding: var(--spacing-xs) 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }

          .mobile-cta-item {
            margin-top: var(--spacing-lg);
          }
        }

        .theme-toggle-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .theme-toggle-btn:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.1);
        }

        /* Light theme overrides for Header */
        :root.light-theme .site-header {
          background-color: rgba(255, 255, 255, 0.75);
          border-bottom: 1px solid rgba(0, 40, 84, 0.06);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
        }

        :root.light-theme .header-scrolled {
          background-color: rgba(255, 255, 255, 0.88);
          border-color: rgba(255, 122, 0, 0.35);
        }

        :root.light-theme .logo-text-wrapper {
          color: #0f172a;
        }

        :root.light-theme .nav-link {
          color: #475569;
        }

        :root.light-theme .nav-link:hover {
          color: #0f172a;
        }

        :root.light-theme .mobile-toggle-btn {
          color: #0f172a;
        }

        :root.light-theme .theme-toggle-btn {
          background: rgba(15, 23, 42, 0.05);
          border-color: rgba(15, 23, 42, 0.08);
          color: #0f172a;
        }

        :root.light-theme .theme-toggle-btn:hover {
          background: rgba(15, 23, 42, 0.1);
        }

        :root.light-theme .mobile-nav-drawer {
          background-color: #ffffff;
          border-left: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: -10px 0 40px rgba(0,0,0,0.08);
        }

        :root.light-theme .mobile-nav-link {
          color: #0f172a;
          border-bottom-color: rgba(15, 23, 42, 0.06);
        }
      `}</style>
    </header>
  );
};

export default Header;
