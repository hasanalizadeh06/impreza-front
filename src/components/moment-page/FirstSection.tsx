'use client';
import Image from 'next/image';
import React from 'react';

import img from "@/../public/assets/create-a-moment/img.png"

interface FirstSectionProps {
  onNext: () => void;
}

const FirstSection: React.FC<FirstSectionProps> = ({ onNext }) => {
  return (
    <div className="first-section">
      <h2>Step 1: Choose a category</h2>
      <div className="category-grid">
        {/* Example categories with images */}
        {Array(8).fill(0).map((_, index) => (
          <div key={index} className="category-item" onClick={onNext}>
            <Image src={img} alt="Category" />
            <p>Live Portrait</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="next-button" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default FirstSection;