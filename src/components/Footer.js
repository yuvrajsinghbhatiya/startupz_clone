import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 className="footerh2">Address</h2>
            <Link to='/'>101, Relcon Enclave</Link>
            <Link to='/'>NH-48</Link>
            <Link to='/'>Surat, Gujarat</Link>
            <Link to='/'>India - 394325</Link>
          </div>
          <div className='footer-link-items'>
            <h2 className="footerh2">Company</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Pricing</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 className="footerh2">Quick Links</h2>
            <Link to='/'>Community Guidelines</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms Of Use</Link>
            <Link to='/'>Cancellation & Refund</Link>
            <Link to='/'>Shipping & Exchange</Link>
          </div>
          <div className='footer-link-items'>
            <h2 className="footerh2">FAQs</h2>
            <Link to='/'>Startup FAQs</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='/images/navlogo.png' alt="Startup Z Logo" className="footer-logo-img" />
            </Link>
          </div>
          <small className='website-rights'>© 2023 StartupzWorld, All Rights Resevered.</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
