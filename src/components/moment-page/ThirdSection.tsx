'use client';
import React, { useState } from 'react';

interface ThirdSectionProps {
  onNext: () => void;
  onBack: () => void;
}

const ThirdSection: React.FC<ThirdSectionProps> = ({ onNext, onBack }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  return (
    <div className="third-section">
      <h2>Step 3: Pick Date, Time & Location</h2>
      <p className='info'>Pick the perfect moment—they&apos;ll never forget where they were.</p>
      
      <div className="booking-details">
        <div className="calendar-container">
          {/* Simple calendar representation */}
          <div className="calendar-header">
            <button>{"<"}</button>
            <h3>JULY 2025</h3>
            <button>{">"}</button>
          </div>
          <div className="calendar-grid">
            {/* Calendar days would go here */}
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <div key={index} className="calendar-day header">{day}</div>
            ))}
            {Array(31).fill(0).map((_, index) => (
              <div 
                key={index} 
                className={`calendar-day ${selectedDate === `${index + 1}` ? 'selected' : ''}`}
                onClick={() => setSelectedDate(`${index + 1}`)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        
        <div className="location-time">
          <div className="location-input">
            <label>Location</label>
            <input 
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
          </div>
          
          <div className="time-selection">
            <label>Time</label>
            <select 
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Select time</option>
              <option value="9:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              {/* More time options */}
            </select>
          </div>
        </div>
      </div>
      
      <div className="navigation-buttons">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="next-button" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default ThirdSection;