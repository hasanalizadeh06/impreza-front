'use client';
import Image from 'next/image';
import React from 'react';
import img from "@/../public/assets/home/artists/img.png"

interface SecondSectionProps {
  onNext: () => void;
  onBack: () => void;
}

const SecondSection: React.FC<SecondSectionProps> = ({ onNext, onBack }) => {
  return (
    <div className="second-section">
      <h2>Step 2: Choose an artist</h2>
      <div className="artist-grid">
        {/* Example artists */}
        {Array(9).fill(0).map((_, index) => (
          <div key={index} className="artist-card" onClick={onNext}>
            <Image src={img} alt="Artist" />
            <h3>Sabrina Carpenter</h3>
            <div className="rating">
              <span className="stars">★★★★★</span>
              <span className="review-count">(178)</span>
            </div>
            <p className="price">From $49</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="next-button" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default SecondSection;