import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abdullahadil145')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.items.slice(0, 3));
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
      summary: 'Multi-user hotel managment system with role based access priveliges.',
      bullets: [
        'Spearheaded a team to build a full-stack hotel management platform with user authentication and role-based access',
        'Implemented CRUD and dynamic customer, booking, and account modules using scalable, modular code structures'
      ],
      tech: 'Java, MySQL',
      link: 'https://github.com/AbdullahAdil145/Hotel-Managment-System'
    },
    {
      title: 'Job Application Tracker',
      summary: 'A chrome extension that captures and stores job applications.',
      bullets: [
        'Built a full-stack MERN application to help users track and manage job applications with seamless CRUD functionality',
        'Designed a modular architecture with reusable components and services to support scalability and maintainability'
      ],
      tech: 'React, Node.js, Chrome API',
      link: 'https://github.com/AbdullahAdil145/Job-Application-Tracker'
    },
    {
      title: 'Alcoms.ca',
      summary: 'Official website for Algoma University Computer Science Society',
      bullets: [
        'Co-developed a responsive website for a university club to showcase events, member profiles, and events',
        'Boosted engagement by ~25% through performance optimization and a clean, modern UI design'
      ],
      tech: 'HTML, CSS, JavaScript',
      link: 'https://alcoms.ca/'
    },
    {
      title: 'Task Manager',
      summary: 'A lightweight and simple responsive Task Managing app.',
      bullets: [
        'Built a lightweight responsive task management app using vanilla HTML, CSS, and JavaScript',
        'Used local Storage for persistent task saving and dynamic DOM manipulation for real-time UI updates'
      ],
      tech: 'HTML, CSS, JavaScript',
      link: 'https://github.com/AbdullahAdil145/TaskManager'
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

        <div className="hero-buttons">
          <a href="https://linktr.ee/abdullahadil145" target="_blank" rel="noreferrer" className="button">Profiles</a>
          <a href="/resume.pdf" download className="button">Resume</a>
        </div>

        <p className="intro-text">
          I am a versatile and motivated Full Stack Developer with a strong academic foundation in Computer Science and practical experience developing scalable, web-based applications. My work spans front-end design with modern frameworks like React to back-end development using Node.js and database management with MySQL and MongoDB.
          <br /><br />
          I've contributed to impactful projects, including Chrome extensions that streamline job applications and a full-stack hotel management system with authentication and role-based access. I thrive in collaborative environments, bringing a balance of technical skill, creative problem-solving, and attention to user experience.
          <br /><br />
          My technical stack includes JavaScript, Java, Python, C++, and PHP, alongside tools like Git, Postman, Jira, and Oracle VirtualBox. I'm passionate about continuous learning and applying a user-centered approach to real-world development challenges.
          <br /><br />
          Currently seeking opportunities to contribute to dynamic development teams, where I can build, learn, and deliver value through technology.
        </p>
      </header>

      <section id="experience" className="experience-section">
        <h2>💼 Experience</h2>
        <div className="exp-card">
          <h2>TBD</h2>
          <h3>Junior Software Developer</h3>
          <ul>
            <li>Developed full-stack prototype for job automation service.</li>
            <li>Collaborated on making chrome extensions to help autofill job applications across hundreds of websites.</li>
            <li>Used web scraping to gather job postings across different job boards.</li>
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
    <img
      src="https://github-readme-stats.vercel.app/api?username=AbdullahAdil145&show_icons=true&theme=tokyonight&cache_seconds=1800"
      alt="GitHub Stats"
      className="stats-image"
    />
    <img
      src="https://github-readme-streak-stats.herokuapp.com/?user=AbdullahAdil145&theme=tokyonight"
      alt="GitHub Streak"
      className="stats-image"
    />
  </div>
</section>


      <section id="blog" className="blog-section">
        <h2>📝 Blog</h2>
        <div className="blog-wrapper">
          {blogs.length > 0 ? blogs.map((post, i) => {
            const imgMatch = post.description.match(/<img.*?src="(.*?)"/);
            const imageUrl = imgMatch ? imgMatch[1] : '';
            return (
              <div className="blog-card" key={i}>
                <a href={post.link} target="_blank" rel="noreferrer">
                  {imageUrl && <img src={imageUrl} alt="thumbnail" className="blog-thumb" />}
                  <div className="blog-content">
                    <h3>{post.title}</h3>
                    <p className="blog-date">{new Date(post.pubDate).toLocaleDateString()}</p>
                    <p
                      className="blog-desc"
                      dangerouslySetInnerHTML={{
                        __html: post.description.replace(/<img[^>]*>/g, '').slice(0, 140) + '...'
                      }}
                    />
                  </div>
                </a>
              </div>
            );
          }) : <p>No posts found.</p>}
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
