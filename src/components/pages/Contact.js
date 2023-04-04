import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

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
    <div>
      <h1>Contact Page</h1>
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
  );
}
