import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  const projects = [
    {
      title: 'Hotel Management System',
      summary: 'A multi-user platform to manage bookings and accounts.',
      bullets: [
        'Auth with roles (admin, staff, guest).',
        'CRUD modules for bookings, rooms, customers.'
      ],
      tech: 'Java, MySQL',
      link: 'https://www.google.com'
    },
    {
      title: 'Job Application Autofiller',
      summary: 'Browser tool that auto-fills jobs and tracks submissions.',
      bullets: [
        'MERN stack architecture.',
        'Reusable Chrome extensions.'
      ],
      tech: 'React, Node.js, Chrome API',
      link: 'https://www.google.com'
    },
    {
      title: 'Alcoms.ca',
      summary: 'Responsive club site to showcase events and members.',
      bullets: [
        'Modern UI boosting engagement by 25%.',
        'Optimized for speed and accessibility.'
      ],
      tech: 'HTML, CSS, JS',
      link: 'https://www.google.com'
    },
    {
      title: 'Task Manager',
      summary: 'Lightweight to-do app with local storage.',
      bullets: [
        'Real-time task updates.',
        'Clean and minimal UI.'
      ],
      tech: 'HTML, CSS, JS',
      link: 'https://www.google.com'
    }
  ];

  const mediumPosts = [
    {
      title: 'In 2025, Computer Science Is Undergoing a …',
      url: 'https://abdullahadil145.medium.com/in-2025-computer-science-is-undergoing-a',
      date: 'June 6, 2025'
    }
    // Add more manually if needed
  ];

  return (
    <div className="App">
      <nav className="navbar">
        {['hero', 'experience', 'projects', 'stack', 'stats', 'contact', 'blog'].map(id => (
          <a key={id} href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
        ))}
      </nav>

      <header id="hero" className="hero">
        <h1>Hi, I’m <span className="highlight">Muhammad Abdullah Adil</span></h1>
        <p>Full Stack Developer | Web Developer</p>
        <img className="hero-img" src="https://media.licdn.com/dms/image/v2/D5603AQH7RJddeYN8aw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720547752909?e=1755734400&v=beta&t=VEJ9G2kkUB-LWfHxycEzBHGqvdJ0TQ1XrIEcok-bSfg" alt="profile" />
      </header>

      <section id="experience" className="experience-section">
        <h2>💼 Experience</h2>
        <div className="exp-card">
          <h2>TBD</h2>
          <h3>Junior Software Developer</h3>
          <ul>
            <li>Built full‑stack solution for job‑application automation.</li>
            <li>Chrome extensions to autofill applications at scale.</li>
            <li>Web‑scraping job postings across multiple platforms.</li>
            <li>Oversaw data storage & backend architecture.</li>
          </ul>
          <p><strong>May 2025 – Present</strong></p>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>🚀 Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p className="summary">{p.summary}</p>
              <ul>
                {p.bullets.map((b, j) => (<li key={j}>{b}</li>))}
              </ul>
              <p><strong>Tech:</strong> {p.tech}</p>
              <div className="project-buttons">
                <a href={p.link} target="_blank" rel="noreferrer" className="button github-button">
                  <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 ..." />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="stack-section">
        <h2>💻 Tech Stack</h2>
        <div className="icons">{['java','python','cplusplus','javascript','html5','css3','php','mysql','mongodb','nodejs','react','git','linux','vscode','eclipse'].map(icon => (
          <img key={icon} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`} alt={icon} className="icon" />
        ))}</div>
      </section>

      <section id="stats" className="stats-section">
        <h2>📊 GitHub Stats</h2>
        <div className="stats-container">
          <img src="https://github-readme-stats.vercel.app/api?username=AbdullahAdil145&show_icons=true&theme=tokyonight" alt="GitHub Stats" />
        </div>
      </section>

      <section id="blog" className="blog-section">
        <h2>📝 Blog</h2>
        <ul>
          {mediumPosts.map((post, i) => (
            <li key={i}>
              <a href={post.url} target="_blank" rel="noreferrer">
                {post.title}
              </a> <span className="date">{post.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="contact-section">
        <h2>📬 Contact Me</h2>
        <form action="https://formspree.io/f/xqabbqbw" method="POST">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="5" placeholder="Message" required></textarea>
          <button type="submit" className="button">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Muhammad Abdullah Adil</p>
      </footer>
    </div>
  );
}
export default App;
