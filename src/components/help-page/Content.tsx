"use client";
// Faq.tsx
import React, { useState } from 'react';
import './Help.scss'
import Image from 'next/image';
import img from '@/../public/assets/help/img.png'

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <motion.div
    //     initial={{ opacity: 0, height: 0 }}
    //     animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
    //     exit={{ opacity: 0, height: 0 }}
    //     className={classNames("lang-options", isOpen && "open")}
    // >
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className={`faq-toggle ${isOpen ? 'open' : ''}`}>+</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const Faq: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Booking issue'
  });

  const faqItems = [
    {
      question: "What if my artist cancels?",
      answer: "If your artist cancels, we'll immediately find you a suitable replacement with similar qualifications and style. You'll be notified promptly and given the option to approve the replacement or receive a full refund."
    },
    {
      question: "What if my artist cancels?",
      answer: "If your artist cancels, we'll immediately find you a suitable replacement with similar qualifications and style. You'll be notified promptly and given the option to approve the replacement or receive a full refund."
    },
    {
      question: "What if my artist cancels?",
      answer: "If your artist cancels, we'll immediately find you a suitable replacement with similar qualifications and style. You'll be notified promptly and given the option to approve the replacement or receive a full refund."
    },
    {
      question: "What if my artist cancels?",
      answer: "If your artist cancels, we'll immediately find you a suitable replacement with similar qualifications and style. You'll be notified promptly and given the option to approve the replacement or receive a full refund."
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <FaqItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>

      <div className="contact-section">
        <div className="contact-form">
          <h2>Contact us</h2>
          <p>Have a question? Fill out the form and we'll get back to you shortly.</p>
          
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
              <label htmlFor="phone">Phone number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required
              >
                <option value="Booking issue">Booking issue</option>
                <option value="Artist inquiry">Artist inquiry</option>
                <option value="Pricing question">Pricing question</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <button type="submit" className="submit-btn">Submit form</button>
          </form>
        </div>
        
        <div className="contact-image">
            <Image src={img} alt="woman playing violin"/>
        </div>
      </div>
    </div>
  );
};

export default Faq;