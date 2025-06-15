import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/abdullahadil145')
      .then(res => res.json())
      .then(data => {
        const posts = data.items.filter(item => item.categories.length > 0);
        setBlogs(posts.slice(0, 3));
      })
      .catch(err => console.error('Blog fetch error:', err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("scroll-bar").style.width = scrolled + "%";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = ['experience', 'projects', 'stack', 'Github Stats', 'blog', 'contact'];

  const projects = [
   {
  title: 'Hotel Management System',
  summary: 'Multi-user hotel platform with secure role access.',
  bullets: ['Built CRUD modules for bookings.', 'Team led project with clear structure.'],
  bulletStyle: { textAlign: 'left' },
  tech: 'Java, MySQL',
  link: 'https://www.google.com'
},
    {
      title: 'Job Application Autofiller',
      summary: 'Auto-fill job forms & track applications.',
      bullets: ['MERN-based full stack solution.', 'Reusable Chrome extension.'],
      tech: 'React, Node.js, Chrome API',
      link: 'https://www.google.com'
    },
    {
      title: 'Alcoms.ca',
      summary: 'Official website for university club.',
      bullets: ['Boosted traffic 25% via UI updates.', 'Showcased events and members.'],
      tech: 'HTML, CSS, JavaScript',
      link: 'https://www.google.com'
    },
    {
      title: 'Task Manager',
      summary: 'Simple responsive to-do app.',
      bullets: ['Persistent local storage.', 'Dynamic DOM interaction.'],
      tech: 'HTML, CSS, JavaScript',
      link: 'https://www.google.com'
    }
  ];

  return (
    <div className="App">
      <div id="scroll-bar"></div>

      <nav className="navbar">
        <div className="nav-links">
          {sections.map(id => (
            <button key={id} onClick={() => scrollToSection(id)}>{id.replace(/^\w/, c => c.toUpperCase())}</button>
          ))}
        </div>
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
          <span className="slider round"></span>
        </label>
      </nav>

      <header className="hero">
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
            <li>Developed full-stack prototype for job automation service.</li>
            <li>Created Chrome extension to autofill application forms.</li>
            <li>Used web scraping to gather job postings.</li>
            <li>Handled backend data storage architecture.</li>
          </ul>
          <p><strong>May 2025 – Present</strong></p>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>🚀 Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p className="summary">{p.summary}</p>
              <ul>{p.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              <p><strong>Tech:</strong> {p.tech}</p>
              <div className="project-buttons">
                <a href={p.link} target="_blank" rel="noreferrer" className="button github-button">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="stack-section">
        <h2>💻 Tech Stack</h2>
        <div className="icons">
          {['java','python','cplusplus','javascript','html5','css3','php','mysql','mongodb','nodejs','react','git','linux','vscode','eclipse'].map(icon => (
            <img key={icon} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`} alt={icon} className="icon" />
          ))}
        </div>
      </section>

      <section id="Github Stats" className="stats-section">
        <h2>📊 GitHub Stats</h2>
        <div className="stats-container">
          <img src="https://github-readme-stats.vercel.app/api?username=AbdullahAdil145&show_icons=true&theme=tokyonight" alt="GitHub Stats" />
        </div>
      </section>

      <section id="blog" className="blog-section">
        <h2>📝 Blog</h2>
        <div className="blog-grid">
          {blogs.length > 0 ? blogs.map((post, i) => (
            <div className="blog-card" key={i}>
              <a href={post.link} target="_blank" rel="noreferrer">
                <h3>{post.title}</h3>
                <p>{post.pubDate.slice(0, 10)}</p>
                <p dangerouslySetInnerHTML={{ __html: post.description.slice(0, 100) + '...' }}></p>
              </a>
            </div>
          )) : <p>No posts found.</p>}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>📬 Contact Me</h2>
        <form action="https://formspree.io/f/xqabbqbw" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
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
