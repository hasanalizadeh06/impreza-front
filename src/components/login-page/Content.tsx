// Login.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import img2 from '@/../public/assets/help/img.png'

const Content: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    performanceType: 'Live painting',
    bio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="logo-title">
          <div className="logo">
            <Image 
              src={img2} 
              alt="Artist Icon" 
              width={60} 
              height={60}
              className="artist-icon"
            />
          </div>
          <h1>Join as an Artist</h1>
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit 
          amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor 
          sit amet Lorem ipsum dolor sit amet
        </p>

        <h2>Get started</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <div className="location-input">
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <div className="location-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="performanceType">Type of performance</label>
            <div className="select-wrapper">
              <select
                id="performanceType"
                name="performanceType"
                value={formData.performanceType}
                onChange={handleChange}
                required
              >
                <option value="Live painting">Live painting</option>
                <option value="Music">Music</option>
                <option value="Dance">Dance</option>
                <option value="Photography">Photography</option>
                <option value="Sculpture">Sculpture</option>
              </select>
              <div className="select-arrow">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="bio">Short Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          
          <button type="submit" className="apply-button">Apply</button>
        </form>
      </div>
      
      <div className="artist-image-section">
        {/* This is where the artist image will be displayed */}
      </div>
    </div>
  );
};

export default Content;