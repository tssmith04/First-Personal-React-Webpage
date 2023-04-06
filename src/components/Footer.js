import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'
function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Find out more below.
            </p>
            <p className='footer-subscription-text'>
                Enter your email to be put on my personal mailing list.
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
      <div className="footer-links">
      <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/about'>Tommy Smith</Link>
            <Link to='/trips'>Trips</Link>
            <Link to='/career'>Career Aspirations</Link>
            <Link to='/TOS'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/contact'>Project Collaboration</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/tommy.smith____/">
                Instagram
            </a>
            <a href="https://www.facebook.com">Facebook</a>
            <a href='https://www.youtube.com/@tommysmith2980'>Youtube</a>
            <a href='https://www.twitter.com'>Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TSS
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TSS © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
            <a href="https://www.instagram.com/tommy.smith____/">
              <i class='fab fa-instagram' />
            </a>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
            <a href="https://www.youtube.com/@tommysmith2980">
              <i class='fab fa-youtube' />
            </a>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
            <a href='https://www.linkedin.com/in/tommy-smith-839505246/'>
              <i class='fab fa-linkedin' />
            </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
