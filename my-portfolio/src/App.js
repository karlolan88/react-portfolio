import outburn from './images/outburn.png';
import ehub from './images/ehub.png';
import trabear from './images/trabear.png';
import self from './images/self.jpg';

import React, { useState } from 'react';
import './App.css';

console.log(outburn);
console.log(ehub);
console.log(trabear);
console.log(self);

function App() {
  // States for form validation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  // Modal state for project details
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Contact form validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setFormMessage('Please fill out the name field.');
      return;
    }
    if (!email) {
      setFormMessage('Please fill out the email field.');
      return;
    }
    if (!email.includes('@')) {
      setFormMessage('Email must include @.');
      return;
    }
    if (!message) {
      setFormMessage('Please fill out the message field.');
      return;
    }
     // Show an alert pop-up
  alert('Thank you for contacting me!');

  // Clear the form after submission
  setName('');
  setEmail('');
  setMessage('');
  setFormMessage(''); // Clear the error message after successful submission
  };

  // Project modal display
  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);

  };

  const project1Details = (
    <div>
      <h3>Project 1 Details</h3>
      <p>The Outburn app aims to help students deal with the effects of burnout through defferent strategies.</p>
    </div>
  );
  
  const project2Details = (
    <div>
      <h3>Project 2 Details</h3>
      <p>E-hub helps companies and organizations keep track of their equipments as each item is placed with a tracker.</p>
    </div>
  );
  
  const project3Details = (
    <div>
      <h3>Project 3 Details</h3>
      <p>Trabear is a travel planning app that helps users prepare for their trips 
      by providing personalized recommendations and essential information tailored to their destination.</p>
    </div>
  );

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Welcome to Karl Olan's Portfolio</h1>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>

      {/* About Me Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <img src={self} alt="selfimage" className='profile-image'/>
        <p><strong>Name:</strong> Karl Andrew Katigbak Olan</p>
        <p><strong>Age:</strong> 21 years old</p>
        <p><strong>Birthdate:</strong> August 6, 2003</p>
        <p><strong>Educational Institution:</strong> De La Salle Lipa</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>OutBurn</h3>
            <img src={outburn} alt="Project 1" className='project-image'/>
            <button onClick={() => handleShowModal(project1Details)}>More Details</button>
          </div>
          <div className="project-card">
            <h3>E-HUB</h3>
            <img src={ehub} alt="Project 2" />
            <button onClick={() => handleShowModal(project2Details)}>More Details</button>
            <p></p>
          </div>
          <div className="project-card">
            <h3>TraBear</h3>
            <img src={trabear} alt="Project 3" />
            <button onClick={() => handleShowModal(project3Details)}>More Details</button>
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Close button inside the message box */}
            <button className="close-button" onClick={() => setShowModal(false)}>&times;</button>
            <p>{modalContent}</p>
          </div>
        </div>
      )}

      {/* Contact Me Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {formMessage && <p className="form-message">{formMessage}</p>}
      </section>
    </div>
  );
}

export default App;
