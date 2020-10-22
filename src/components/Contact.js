import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Peter Palmer"
      />
      <div>
        <p className="name">Constances Edwards</p>
        <div className="status">
          <div className="status-online" />
          <p className="status-text">online</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
