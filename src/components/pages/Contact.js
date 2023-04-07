import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto contact-container">
      <h1 className="contact-title">Contact Page</h1>
      <div className="row">
        <div className="col-md-8 mx-auto">
     <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
    </label>
    <input
    type="text"
    className="form-control"
    id="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    />
    </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email
    </label>
    <input
    type="email"
    className="form-control"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,}$"
    title="Please enter a valid email address."
    required
    />
    </div>
    <div className="mb-3">
    <label htmlFor="message" className="form-label">
      Message
    </label>
    <textarea
    className="form-control"
    id="message"
    rows="3"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
    ></textarea>
    </div>
    <button type="submit" className="btn btn-primary">
    Submit
    </button>
     </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
