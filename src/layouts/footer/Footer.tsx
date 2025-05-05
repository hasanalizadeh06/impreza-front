"use client"
import React from 'react'
import { Facebook, Instagram, MessageCircle, Send } from 'lucide-react';
import "./Footer.scss";
import img from "@/../public/assets/logo-white.png"
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-left">
        <div className="logo-container">
            <Image src={img} alt='Logo' className='logo'/>
        </div>
        <p className="footer-text">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        </p>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <Facebook size={18} />
          </a>
          <a href="#" className="social-icon">
            <Instagram size={18} />
          </a>
          <a href="#" className="social-icon">
            <MessageCircle size={18} />
          </a>
          <a href="#" className="social-icon">
            <Send size={18} />
          </a>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-column">
          <h3 className="footer-heading">THE COMPANY</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Artists</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">GET IN TOUCH</h3>
          <ul className="footer-links">
            <li><a href="#">Contacts</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <LanguageSwitcher />
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p className="copyright">© 2025 - All rights reserved by Impreza</p>
      <div className="footer-legal">
        <a href="#" className="legal-link">Privacy policy</a>
        <span className="separator">|</span>
        <a href="#" className="legal-link">Terms & Conditions</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer