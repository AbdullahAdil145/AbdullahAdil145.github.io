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
          className="hero-img"
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

      {/* Experience Section */}
      <section className="experience-section">
        <h2>💼 Experience</h2>
        <div className="exp-card">
          <h2>TBD</h2>
          <h3>Junior Software Developer</h3>
          <ul>
            <li>Developed a full stack prototype for a job application automation service.</li>
            <li>Collaborated on making Chrome extensions to help autofill job applications across hundreds of websites.</li>
            <li>Used web scraping to find job postings across different job boards.</li>
            <li>Managed the architecture, ensuring that data was saved and fetched from the database server.</li>
          </ul>
          <p><strong>May 2025 - Present</strong></p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>🚀 Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: 'Hotel Management System',
              bullets: [
                'Spearheaded a team to build a full-stack hotel management platform with user authentication and role-based access.',
                'Implemented CRUD and dynamic customer, booking, and account modules using scalable, modular code structures.'
              ],
              tech: 'Java, MySQL',
              link: 'https://www.google.com'
            },
            {
              title: 'Job Application Autofiller',
              bullets: [
                'Built a full-stack MERN application to help users track and manage job applications with seamless CRUD functionality.',
                'Designed a modular architecture with reusable components and services to support scalability and maintainability.'
              ],
              tech: 'React, Node.js, Chrome APIs',
              link: 'https://www.google.com'
            },
            {
              title: 'Alcoms.ca',
              bullets: [
                'Co-developed a responsive website for a university club to showcase events, member profiles, and events.',
                'Boosted engagement by ~25% through performance optimization and a clean, modern UI design.'
              ],
              tech: 'HTML, CSS, JavaScript',
              link: 'https://www.google.com'
            },
            {
              title: 'Task Manager',
              bullets: [
                'Built a lightweight responsive task management app using vanilla HTML, CSS, and JavaScript.',
                'Used local Storage for persistent task saving and dynamic DOM manipulation for real-time UI updates.'
              ],
              tech: 'HTML, CSS, JavaScript',
              link: 'https://www.google.com'
            }
          ].map((proj, index) => (
            <div className="project-card" key={index}>
              <h3>{proj.title}</h3>
              <ul>
                {proj.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p><strong>Tech:</strong> {proj.tech}</p>
              <div className="project-buttons">
                <a href={proj.link} target="_blank" rel="noreferrer" className="button github-button">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 16 16"
                    fill="white"
                    style={{ marginRight: '8px' }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8a8.001 8.001 0 005.47 7.59c.4.07.55-.17.55-.38 
                      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
                      -.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.86 2.33.66.07-.52.28-.86.5-1.06-1.78-.2-3.64
                      -.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.65 
                      7.65 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 
                      2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
                      1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.001 
                      8.001 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="stack-section">
        <h2>💻 Tech Stack</h2>
        <div className="icons">
          {['java', 'python', 'cplusplus', 'javascript', 'html5', 'css3', 'php', 'mysql', 'mongodb', 'nodejs', 'react', 'git', 'linux', 'vscode', 'eclipse'].map(icon => (
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

      {/* Contact Section */}
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
