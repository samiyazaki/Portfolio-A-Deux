import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Contact.css';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const shootConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setName('');
    setEmail('');
    setMessage('');
  };

  const handleEmailClick = () => {
    shootConfetti();
    window.location.href = "mailto:smsmiyazaki@gmail.com";
  };

  const handleCallClick = () => {
    shootConfetti();
    // Add the desired phone number in the phoneNumber variable
    const phoneNumber = "123-456-7890";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto contact-container">
          <h1 className="contact-title">Contact Page</h1>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <form onSubmit={handleSubmit}>
                {/* existing form fields */}
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary mr-3"
                    onClick={handleEmailClick}
                  >
                    <i className="fas fa-envelope mr-2"></i>Email me
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCallClick}
                  >
                    <i className="fas fa-phone mr-2"></i>Call me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}