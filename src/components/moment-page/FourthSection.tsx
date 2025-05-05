'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface FourthSectionProps {
  onBack: () => void;
}

const FourthSection: React.FC<FourthSectionProps> = ({ onBack }) => {
  const [questions, setQuestions] = useState<string>('');

  // const handleSubmit = () => {
  //   console.log('Submitting booking');
  // };

  const notify = () => toast("Booking Confirmed!");

  return (
    <div className="fourth-section">
      <h2>Step 4: Would you like to ask the artist to capture a special moment?</h2>
      
      <div className="final-questions">
        <textarea
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          placeholder="Write your request to the artist here..."
          rows={5}
        />
      </div>
      
      <div className="booking-summary">
        {/* Summary of previous selections would go here */}
        <h3>Booking Summary</h3>
        <p>Artist: Sabrina Carpenter</p>
        <p>Date: July 15, 2025</p>
        <p>Time: 10:00 AM</p>
        <p>Location: New York Studio</p>
      </div>
      
      <div className="navigation-buttons">
        <button className="back-button" onClick={onBack}>Back</button>
        <Link href="/">
          <button className="submit-button" onClick={notify}>Confirm Booking</button>
        </Link>
      </div>
    </div>
  );
};

export default FourthSection;