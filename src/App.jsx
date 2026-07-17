import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Partnerships from './pages/Partnerships';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Credentials from './pages/Credentials';
import TermsConditions from './pages/TermsConditions';
import PrivacyStatement from './pages/PrivacyStatement';
import ServiceDelivery from './pages/ServiceDelivery';
import RefundPolicy from './pages/RefundPolicy';
import CourseDetail from './pages/CourseDetail';

// Scroll to top helper on route transition
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        
        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            {/* Core routes */}
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Policies */}
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyStatement />} />
            <Route path="/service-delivery" element={<ServiceDelivery />} />
            <Route path="/accessibility-statement" element={<RefundPolicy />} />

            {/* Dynamic course detail route — covers all 24 certifications */}
            <Route path="/course/:courseId" element={<CourseDetail />} />

            {/* Fallback route - redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <style>{`
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .main-content {
          flex: 1;
        }
      `}</style>
    </Router>
  );
};

export default App;
