import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, Instagram, Facebook, ChevronRight } from 'lucide-react';
import { menuCategories, menuItems, hours, specialties, reviews } from './data.js';

// Import the video directly from the src directory
import videoUrl from './chick.mp4';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState('sandwiches');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
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

  // Header Component
  const Header = () => (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-name">MAKLA-HALAL</div>
            <div className="logo-tagline">MAGHREBAN CUISINE BY SIMO</div>
          </div>
          
          {/* Mobile menu button - improved accessibility */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={24} />
          </button>
          
          {/* Desktop navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {['home', 'menu', 'about', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-item ${activeSection === section ? 'active' : ''}`}
                onClick={() => setActiveSection(section)}
              >
                <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
              </button>
            ))}
          </nav>
        </div>
        
        {/* Mobile navigation - improved for touch */}
        {mobileMenuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {['home', 'menu', 'about', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-item ${activeSection === section ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(section);
                  setMobileMenuOpen(false);
                }}
              >
                <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );

  // Hero Component with improved mobile handling
  const Hero = () => {
    const videoRef = React.useRef(null);

    React.useEffect(() => {
      const video = videoRef.current;
      if (video) {
        // Only autoplay on non-mobile devices
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (!isMobile) {
          video.play().catch(error => {
            console.error("Video play failed:", error);
          });
        }

        // Add loading and error event handlers
        video.addEventListener('loadeddata', () => {
          console.log('Video loaded successfully');
        });
        video.addEventListener('error', (e) => {
          console.error('Error loading video:', e);
        });
      }
    }, []);

    return (
      <div className="hero">
        <div className="hero-overlay"></div>
        <video 
          ref={videoRef}
          className="hero-video" 
          muted 
          loop 
          playsInline
          preload="auto"
          poster="/path-to-poster-image.jpg" // Add a poster image for better mobile experience
          src={videoUrl}
        >
          Your browser doesn't support HTML5 video.
        </video>
        
        <div className="hero-content">
          <h1 className="hero-title">MAKLA HALAL</h1>
          <p className="hero-subtitle">
            Authentic Maghreban cuisine with a modern twist - Open 24/7
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => setActiveSection('menu')}
              className="btn btn-primary"
            >
              View Our Menu
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className="btn btn-outline"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Home Section Component
  const HomeSection = () => (
    <div className="section home-section">
      <h2 className="section-title">Authentic Maghreban Cuisine</h2>
      <p className="section-description">
        Welcome to Makla Halal, where we serve authentic Maghreban dishes prepared with 
        traditional recipes and fresh ingredients. Open 24/7 to satisfy your cravings 
        any time of the day or night.
      </p>
      
      <div className="info-cards">
        <div className="info-card">
          <h3 className="card-title">
            <Phone size={20} className="card-icon" /> Contact Us
          </h3>
          <p className="card-text">Phone: (786) 942-2001</p>
          <p className="card-text">Email: info@maklahalal.com</p>
          <p className="card-text">2050 71st St, Miami Beach, FL 33141</p>
        </div>
        
        <div className="info-card">
          <h3 className="card-title">
            <Clock size={20} className="card-icon" /> Hours
          </h3>
          <p className="card-text-bold">Open 24 hours</p>
          <p className="card-text">Serving our full menu all day and night</p>
        </div>
      </div>
      
      <div className="specialties-section">
        <h3 className="subsection-title">Our Specialties</h3>
        <div className="specialties-grid">
          {specialties.map((item) => (
            <div key={item.name} className="specialty-card">
              <div className="specialty-image">
                <img src={item.img} alt={item.name} loading="lazy" />
              </div>
              <div className="specialty-overlay"></div>
              <div className="specialty-content">
                <h4 className="specialty-title">{item.name}</h4>
                <button 
                  onClick={() => {
                    setActiveSection('menu');
                    setActiveMenuCategory(item.category);
                  }}
                  className="specialty-btn"
                >
                  View Menu <ChevronRight size={16} className="btn-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="reviews-section">
        <h3 className="subsection-title">What Our Customers Say</h3>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <span className="reviewer-name">{review.name}</span>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Menu Section Component
  const MenuSection = () => (
    <div className="section menu-section">
      <h2 className="section-title">Our Menu</h2>
      
      <div className="menu-container">
        {/* Menu categories tabs - horizontal scrollable on mobile */}
        <div className="menu-tabs-container scrollbar-hide">
          <div className="menu-tabs">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveMenuCategory(category.id)}
                className={`menu-tab ${activeMenuCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active menu category */}
        <div className="menu-content">
          <div className="menu-header">
            <h3 className="menu-category-title">
              {menuCategories.find(c => c.id === activeMenuCategory)?.name}
            </h3>
          </div>
          
          <div className="menu-items">
            {menuItems[activeMenuCategory].map((item, index) => (
              <div 
                key={index} 
                className="menu-item"
              >
                <div className="menu-item-details">
                  <h4 className="menu-item-name">{item.name}</h4>
                  <p className="menu-item-description">{item.description}</p>
                </div>
                <div className="menu-item-price">
                  ${item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // About Section Component
  const AboutSection = () => (
    <div className="section about-section">
      <h2 className="section-title">About Makla Halal</h2>
      
      <div className="about-container">
        <div className="card about-card">
          <h3 className="card-title">Our Story</h3>
          <p className="about-text">
            Makla Halal is Miami Beach's go-to spot for delicious halal sandwiches, French tacos, and
            our famous lemon pepper wings. We pride ourselves on serving high-quality halal food 
            24 hours a day, making us the perfect destination for late-night cravings.
          </p>
          <p className="about-text">
            Our diverse menu features everything from traditional kabobs and shawarma to French tacos,
            seafood options, and more. We use only 100% halal ingredients and prepare everything fresh 
            to ensure that every bite is packed with authentic Maghreban flavor.
          </p>
        </div>
        
        <div className="card about-card">
          <h3 className="card-title">Hours of Operation</h3>
          <div className="hours-list">
            {hours.map((item, index) => (
              <div key={index} className="hours-item">
                <span className="day">{item.day}</span>
                <span className="time">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Contact Section Component
  const ContactSection = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Form submission logic would go here
      alert('Message sent! (This is a demo)');
    };

    return (
      <div className="section contact-section">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-container">
          <div className="card contact-card">
            <h3 className="card-title">Get In Touch</h3>
            
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">
                    <a href="tel:+17869422001">(786) 942-2001</a>
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <div>
                  <p className="contact-label">Address</p>
                  <p className="contact-value">
                    <a href="https://maps.google.com/?q=2050+71st+St,+Miami+Beach,+FL+33141" target="_blank" rel="noopener noreferrer">
                      2050 71st St<br />Miami Beach, FL 33141
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="social-section">
                <p className="contact-label">Follow Us</p>
                <div className="social-buttons">
                  <a 
                    href="#" 
                    className="social-button instagram"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="social-button facebook"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card contact-card">
            <h3 className="card-title">Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="form-input"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="form-input"
                  placeholder="Your email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message"
                  rows="4"
                  className="form-input"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="submit-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Footer Component
  const Footer = () => (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">MAKLA HALAL</h3>
            <p className="footer-description">Authentic Maghreban cuisine made with fresh halal ingredients and traditional recipes.</p>
            <div className="social-links">
              <a 
                href="#" 
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="social-link"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <p className="footer-info">Phone: <a href="tel:+17869422001">(786) 942-2001</a></p>
            <p className="footer-info">Email: <a href="mailto:info@maklahalal.com">info@maklahalal.com</a></p>
            <p className="footer-info">
              <a href="https://maps.google.com/?q=2050+71st+St,+Miami+Beach,+FL+33141" target="_blank" rel="noopener noreferrer">
                2050 71st St, Miami Beach, FL 33141
              </a>
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Opening Hours</h4>
            <p className="footer-hours">Open 24 hours</p>
            <p className="footer-info">Serving 24/7</p>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Makla Halal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection />;
      case 'menu':
        return <MenuSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="app">
      <Header />
      
      {/* Hero section (only on home page) */}
      {activeSection === 'home' && <Hero />}
      
      {/* Main content */}
      <main className="main-content">
        <div className="container">
          {renderSection()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;