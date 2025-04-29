import React from 'react';
import './Home.scss';

import img1 from '@/../public/assets/home/howitworks/img1.png';
import img2 from '@/../public/assets/home/howitworks/img2.png';
import img3 from '@/../public/assets/home/howitworks/img3.png';
import Image from 'next/image';

const HowItWorks = () => {
  const steps = [
    {
      icon: img1,
      title: 'Choose an Artist or Gift Type',
      description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
    },
    {
      icon: img2, 
      title: 'Pick Date, Time & Location',
      description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
    },
    {
      icon: img3,
      title: 'We Deliver the Experience',
      description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="how-it-works-title">How it works?</h2>
        
        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon-container">
                <Image
                  src={step.icon} 
                  alt={`Step ${index + 1}: ${step.title}`}
                  className="step-icon"
                />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;