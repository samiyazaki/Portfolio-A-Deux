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
    shootConfetti();
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:smsmiyazaki@gmail.com";
  };

  const handleCallClick = () => {
    // Add the desired phone number in the phoneNumber variable
    const phoneNumber = "631-381-5947";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto contact-container">
          <h1 className="contact-title">Let's Get In Touch!</h1>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nameInput">Name</label>
                  <input 
                    type="text"
                    className="form-control"
                    id="nameInput"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailInput">Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="emailInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="messageInput">Message</label>
                  <textarea 
                    className="form-control" 
                    id="messageInput" 
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
              </form>
              <div className="contact-btns mt-4">
                <button
                  type="button"
                  className="btn btn-primary email-btn"
                  onClick={handleEmailClick}
                >
                  <i className="fas fa-envelope mr-2"></i>Email me
                </button>
                <button
                  type="button"
                  className="btn btn-secondary call-btn"
                  onClick={handleCallClick}
                >
                  <i className="fas fa-phone mr-2"></i>Call me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}