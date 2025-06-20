import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
  setSidebarOpen(false);
  if (id === 'Home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
};

  const sections = [
  'Home',
  'Experience',
  'Projects',
  'Tech Stack',
  'Github Stats',
  'Leetcode Stats',
  'Publications',
  'Blog',
  'Contact'
];

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
      tech: 'React, MUI, Node.js, Chrome API',
      link: 'https://github.com/AbdullahAdil145/Job-Application-Tracker'
    },
    {
      title: 'Web Scraper',
      summary: 'Developed a web scraper that uses crawlers to scrape information from a website.',
      bullets: [
        'Used Python, FastAPI and mongoDB to scrape website for information and store it.',
        'Built a simple React + MUI frotnend that displays the information in cards.'
      ],
      tech: 'React, MUI, MongoDB, Rest APIs, Python',
      link: 'https://github.com/AbdullahAdil145/Web-Scraper'
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
  <div className="nav-left">
    <div className="mobile-menu-icon" onClick={() => setSidebarOpen(true)}>
      &#9776;
    </div>

    <div className="nav-links desktop-only">
      {sections.map((id, index) => (
        <React.Fragment key={id}>
          <button onClick={() => scrollToSection(id)}>
            {id.replace(/^\w/, c => c.toUpperCase())}
          </button>
          {index < sections.length - 1 && <span className="nav-divider">|</span>}
        </React.Fragment>
      ))}
    </div>
  </div>

  <div className="nav-right">
    <label className="switch">
      <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
      <span className="slider round"></span>
    </label>
  </div>

  <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
    <div className="sidebar-content">
      <button className="close-btn" onClick={() => setSidebarOpen(false)}>×</button>
      {sections.map((id) => (
        <button key={id} onClick={() => scrollToSection(id)}>{id}</button>
      ))}
    </div>
  </div>

  {sidebarOpen && <div className="overlay-blur" onClick={() => setSidebarOpen(false)}></div>}
</nav>


      <header className="hero">
        <h1 className="name-heading">Hi, I’m <span className="highlight">Muhammad Abdullah Adil</span></h1>
        <h2>Full Stack Developer | Web Developer</h2>
        <img className="hero-img" src="https://media.licdn.com/dms/image/v2/D5603AQH7RJddeYN8aw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720547752909?e=1755734400&v=beta&t=VEJ9G2kkUB-LWfHxycEzBHGqvdJ0TQ1XrIEcok-bSfg" alt="profile" />

        <div className="hero-buttons">
  {[
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abdullahadil145/" },
    { label: "GitHub", href: "https://github.com/AbdullahAdil145" },
    { label: "LeetCode", href: "https://leetcode.com/u/abdullahadil145/" },
    { label: "Publications", href: "https://www.techrxiv.org/users/932208-muhammad-abdullah-adil" },
    { label: "Blog", href: "https://abdullahadil145.medium.com/" },
  ].map((btn, i) => (
    <a key={i} href={btn.href} target="_blank" rel="noreferrer" className="button" style={{ width: '130px' }}>
      {btn.label}
    </a>
  ))}

  <div className="dropdown">
    <button className="button dropdown-toggle" style={{ width: '130px' }}>Resume</button>
    <div className="dropdown-menu">
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">View</a>
      <a href="/Resume.pdf" download>Download</a>
    </div>
  </div>
</div>


        <p className="intro-text">
          I am a versatile and motivated Full Stack Developer with a strong academic foundation in Computer Science and practical experience developing scalable, web-based applications. My work spans front-end design with modern frameworks like React to back-end development using Node.js and database management with MySQL and MongoDB.
          <br /><br />
          I've contributed to impactful projects, including Chrome extensions that streamline job applications and a full-stack hotel management system with authentication and role-based access. I thrive in collaborative environments, bringing a balance of technical skill, creative problem-solving, and attention to user experience.
          <br /><br />
          My technical stack includes JavaScript, Java, Python, C++, and many more, alongside tools like Git, Postman, Jira, and others. I'm passionate about continuous learning and applying a user-centered approach to real-world development challenges.
          <br /><br />
          Currently seeking opportunities to contribute to dynamic development teams, where I can build, learn, and deliver value through technology.
        </p>
      </header>

      <section id="Experience" className="experience-section">
        <h1>💼 Experience</h1>
        <div className="exp-card">
          <h2>ZAPPLY</h2>
          <h3>Junior Software Developer</h3>
          <p><strong>May 2025 – Present</strong></p>
          <ul>
            <li>Developed full-stack prototype for job automation service.</li>
            <li>Collaborated on making chrome extensions to help autofill job applications across hundreds of websites.</li>
            <li>Used web scraping to gather job postings across different job boards.</li>
            <li>Handled backend data storage architecture.</li>
          </ul>
        </div>
      </section>

      <section id="Projects" className="projects-section">
        <h1>🚀 Projects</h1>
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

    <section id="Tech Stack" className="stack-section">
  <h1>🛠️ Tech Stack</h1>

 <div style={{ marginTop: '20px' }}>
  <div className="icons">
    {[
      'java', 'python', 'cplusplus', 'javascript', 'html5', 'css3', 'php',
      'mongodb', 'mysql', 'nodejs', 'react', 'express', 'fastapi','mui'
    ].map(icon => (
      <img
  key={icon}
  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
  alt={icon}
  className="icon"
/>
    ))}
  </div>
</div>

<div style={{ marginTop: '40px' }}>
  <div className="icons">
    {[
      'intellij', 'vscode', 'eclipse', 'jupyter', 'git', 'postman', 'jira'
    ].map(icon => (
      <img
  key={icon}
  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
  alt={icon}
  className="icon"
/>
    ))}
  </div>
</div>

</section>

<section id="Github Stats" className="stats-section">
  <h1>📊 GitHub Stats</h1>
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

        <section id="Leetcode Stats" className="stats-section">
  <h1>🧠 LeetCode Stats</h1>
  <div className="stats-container">
    <img
      src="https://leetcard.jacoblin.cool/abdullahadil145"
      alt="LeetCode Stats"
      className="stats-image"
    />
  </div>
</section>

        <section id="Publications" className="blog-section">
  <h1>🏛️ Publications</h1>
  <div className="blog-wrapper">
    <div className="blog-card">
      <a href="https://www.techrxiv.org/users/932208/articles/1305382-simulation-of-a-basic-cloud-data-centre-using-cloudsim" target="_blank" rel="noreferrer">
        <div className="blog-content">
          <h3>Simulation of a Basic Cloud Data Centre Using CloudSim</h3>
          <p className="blog-date">18 June 2025</p>
          <p className="blog-desc">
            This paper presents a foundational simulation of a cloud data center using CloudSim, exploring resource provisioning and VM scheduling to help understand core cloud computing behavior.
          </p>
        </div>
      </a>
    </div>
  </div>
</section>

      <section id="Blog" className="blog-section">
  <h1>📰 Blog</h1>
  <div className="blog-wrapper">
    {blogs.length > 0 ? blogs.slice(0, 2).map((post, i) => {
      const imgMatch = post.description.match(/<img.*?src="(.*?)"/);
      const imageUrl = imgMatch ? imgMatch[1] : '';
      return (
        <div className="blog-card" key={i}>
          <a href={post.link} target="_blank" rel="noreferrer">
            {imageUrl && <img src={imageUrl} alt="thumbnail" className="blog-thumb" />}
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-date">{new Date(post.pubDate).toLocaleDateString()}</p>
            </div>
          </a>
        </div>
      );
    }) : <p>No posts found.</p>}
  </div>
</section>


      <section id="Contact" className="contact-section">
        <h1>📬 Contact Me</h1>
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
