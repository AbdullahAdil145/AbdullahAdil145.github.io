// File: src/App.js
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <h1>Hi, I'm <span className="highlight">Muhammad Abdullah Adil</span></h1>
        <p>Full Stack Developer | Web Developer</p>
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQH7RJddeYN8aw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720547752909?e=1755734400&v=beta&t=VEJ9G2kkUB-LWfHxycEzBHGqvdJ0TQ1XrIEcok-bSfg"
          alt="personal"
          className="img"
        />
        <div className="hero-buttons">
          <a href="https://linktr.ee/abdullahadil145?utm_source=linktree_admin_share" target="_blank" rel="noreferrer" className="button">
            🔗 Profiles
          </a>
          <a href="/ResumeInProgress.docx" download className="button">
            📄 Resume
          </a>
        </div>
      </header>

 {/* Exp Section */}
<section className="experience-section">
  <h2>💼 Experience</h2>
  <div className="project-card">
    <h2>TBD</h2>
    <h3>Junior Software Developer</h3>
    <section style={{ maxWidth: '800px', margin: '0 auto', textAlign:'left'}}>
       <ul style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
        <li>Developed a full stack prototype for a job application automation service.</li>
        <li>Collaborated on making Chrome extensions to help autofill job applications across hundreds of websites.</li>
        <li>Used web scraping to find job postings across different job boards.</li>
        <li>Managed the architecture, ensuring that data was saved and fetched from the database server.</li>
      </ul>
    </section>
    <p><strong>May 2025 - Present</strong></p>
  </div>
</section>
  
      {/* Projects Section */}
      <section className="projects-section">
        <h2>🚀 Projects</h2>
        <div className="project-card">
          <h3>Hotel Management System</h3>
          <p>Led a full-stack hotel app for managing bookings, customers, and accounts with role-based access control and CRUD functionality.</p>
          <p><strong>Tech:</strong> Java, MySQL</p>
        </div>
        <div className="project-card">
          <h3>Job Application Autofiller</h3>
          <p>Built a Chrome Extension to autofill job applications across hundreds of websites.</p>
          <p><strong>Tech:</strong> React, Node.js, Chrome APIs</p>
        </div>
        <div className="project-card">
          <h3>Alcoms.ca</h3>
          <p>Developed a responsive website for club events and initiatives, improving user engagement by 25%.</p>
          <p><strong>Tech:</strong> HTML, CSS, JavaScript</p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="stack-section">
        <h2>💻 Tech Stack</h2>
        <div className="icons">
          {[ 'java','python','cplusplus','javascript','html5','css3','php','mysql','mongodb','nodejs','react','git','linux','vscode','eclipse'].map(icon => (
            <img
              key={icon}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
              alt={icon}
              className="icon"
            />
          ))}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="stats-section">
        <h2>📊 GitHub Stats</h2>
        <div className="stats-container">
          <img
            src="https://github-readme-stats.vercel.app/api?username=AbdullahAdil145&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <h2>📬 Contact Me</h2>
        <form action="https://formspree.io/f/xqabbqbw" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="button">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
  <p>
    &copy; {new Date().getFullYear()} Muhammad Abdullah Adil. All rights reserved.
  </p>
</footer>
    </div>
  );
}

export default App;
