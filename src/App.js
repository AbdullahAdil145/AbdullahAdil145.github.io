// File: src/App.js
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <h1>Hi, I'm <span className="highlight">Muhammad Abdullah Adil</span></h1>
        <p>Full Stack Developer | Automation Enthusiast | Chrome Extension Builder</p>
        <img
          src="https://github.com/Adam-pw/Adam-pw/raw/main/animation_500_kxa883sd.gif"
          alt="developer animation"
          className="hero-img"
        />
        <div className="hero-buttons">
          <a href="https://www.linkedin.com/in/abdullahadil145/" target="_blank" rel="noreferrer" className="button">
            📇 LinkedIn
          </a>
          <a href="/ResumeInProgress.docx" download className="button">
            📄 Download Resume
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>🚀 Projects</h2>
        <div className="project-card">
          <h3>Hotel Management System</h3>
          <p>Led a full-stack hotel app for managing bookings, customers, and accounts with role-based access control.</p>
          <p><strong>Tech:</strong> React, Node.js, MySQL</p>
        </div>
        <div className="project-card">
          <h3>Job Application Autofiller</h3>
          <p>Built a Chrome Extension to autofill job applications across hundreds of websites.</p>
          <p><strong>Tech:</strong> JavaScript, Chrome APIs</p>
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
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=AbdullahAdil145&layout=compact&theme=tokyonight"
            alt="Top Languages"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <h2>📬 Contact Me</h2>
        <form action="https://formspree.io/f/mgegonpv" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="button">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>📧 abdullahadil143@gmail.com</p>
        <div className="footer-links">
          <a href="https://github.com/AbdullahAdil145" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abdullahadil145/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
