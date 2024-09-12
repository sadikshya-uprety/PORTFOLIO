import React from 'react';
import './App.css';
import sadikshyaPhoto from './assets/sadikshya.jpg'; // Import the image

function Sadikshya() {
  return (
    <div className="App">
      {/* Centered Photo Section */}
      <section className="photo-section">
        {/* Display the photo */}
        <img src={sadikshyaPhoto} alt="Sadikshya Uprety" className="center-photo" />

        {/* Display the name below the photo */}
        <h1 className="name-header">Sadikshya Uprety</h1>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I am Sadikshya Uprety, a passionate college student pursuing a degree in
          Bachelor of Science in Computer Science and Information Technology (BSc. CSIT).
          I have a strong interest in computer software. My skills include React, Flutter, and Python.
          I love analyzing and solving problems. I believe that nobody is perfect in everything,
          and we learn best when we feel the need for it. I love competition, enjoy learning new skills,
          writing articles, and listening to music. I'm always eager to learn more and take on new challenges.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>Flutter</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Problem Solving</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>PROJECT 1</h3>
            <p>Online food ordering system website.</p>
          </div>
          <div className="project-card">
            <h3>PROJECT 2</h3>
            <p>Secure online voting system website.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Sadikshya Uprety" required />
          <input type="email" placeholder="sadikshyauprety12@gmail.com" required />
          <textarea placeholder="You can contact me anytime." required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Sadikshya Uprety. </p>
      </footer>
    </div>
  );
}

export default Sadikshya;
