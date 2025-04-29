// CreateAMoment.tsx
'use client';
import { useState } from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import './CreateAMoment.scss';

const Main: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FirstSection onNext={handleNext} />;
      case 2:
        return <SecondSection onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <ThirdSection onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <FourthSection onBack={handleBack} />;
      default:
        return <FirstSection onNext={handleNext} />;
    }
  };

  return (
    <div className="create-moment-container">
      <main className="main-content">
        <h1>Create a moment</h1>
        <p className='info'>Let’s build a surprise they’ll never forget.</p>
        
        {/* Step indicator */}
        <div className="step-indicator">
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step} 
              className={`step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
            >
              <div className="step-number">{step}</div>
              <div className="step-line"></div>
            </div>
          ))}
        </div>

        {/* Current section content */}
        <div className="section-container">
          {renderStep()}
        </div>
      </main>
    </div>
  );
};

export default Main;