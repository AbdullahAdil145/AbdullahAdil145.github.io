import React, { useLayoutEffect, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === null ? false : saved === 'true';
  });

  const [blogs, setBlogs] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', darkMode);
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
      const bar = document.getElementById("scroll-bar");
      if (bar) bar.style.width = scrolled + "%";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setSidebarOpen(false);
    if (id === '🏠  Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
  { id: '🏠  Home', label: 'Home', icon: '🏠' },
  { id: '🎓  Education', label: 'Education', icon: '🎓'},
  { id: '💼  Experience', label: 'Experience', icon: '💼' },
  { id: '🚀  Projects', label: 'Projects', icon: '🚀' },
  { id: '🛠️  Tech Stack', label: 'Tech Stack', icon: '🛠️' },
//  { id: '📊  Github Stats', label: 'GitHub Stats', icon: '📊' },
//  { id: '🧠  Leetcode Stats', label: 'LeetCode Stats', icon: '🧠' },
  { id: '🏛️  Publications', label: 'Publications', icon: '🏛️' },
  { id: '📰  Blog', label: 'Blog', icon: '📰' },
  { id: '📬  Contact', label: 'Contact', icon: '📬' },
];

const projects = [
    {
    title: 'Web Scraper',
    summary: 'Developed a web scraper that uses crawlers to extract information from websites.',
    bullets: [
      'Used Python, FastAPI, and MongoDB to extract and persist data from dynamic websites.',
      'Built a clean React + MUI frontend that displays scraped data in responsive cards.'
    ],
    tech: 'React, MUI, MongoDB, FastAPI, Python',
    link: 'https://github.com/AbdullahAdil145/Web-Scraper'
  },
  {
    title: 'Hotel Management System',
    summary: 'Multi-user hotel management system with role-based access privileges.',
    bullets: [
      'Spearheaded a team to build a full-stack hotel management platform with user authentication and role-based access.',
      'Implemented CRUD operations and dynamic modules for customer, booking, and account management using modular, scalable code.'
    ],
    tech: 'Java, MySQL',
    link: 'https://github.com/AbdullahAdil145/Hotel-Managment-System'
  },
  {
    title: 'Cinemax',
    summary: 'A movie searching website using AI generated views',
    bullets: [
      'Built a website that allows users to search for movies using the Omdb API and allows then to rate movies, storing the rating in a database.',
      'Used Google Gemini to generate AI reviews for movies and also added manual review as failsafe.'
    ],
    tech: 'PHP, REST API, Java Script, CSS, SQL, MariaDB',
    link: 'https://github.com/AbdullahAdil145/Cinemax'
  },
  {
    title: 'Job Application Tracker',
    summary: 'A Chrome extension that captures and stores job applications.',
    bullets: [
      'Built a full-stack MERN application to help users track and manage job applications with seamless CRUD functionality.',
      'Designed a modular architecture with reusable components and scalable services for maintainability.'
    ],
    tech: 'React, MUI, Node.js, Chrome API, MongoDB',
    link: 'https://github.com/AbdullahAdil145/Job-Application-Tracker'
  },
   {
    title: 'Online Store',
    summary: 'A web-based platform to browse, search, and purchase computer products, with role-based admin rights',
    bullets: [
      'Users can browse products, search/filter by category, add to cart, place orders, and view their order history.',
      'Admins can manage products, view all orders placed, and view all registered users.'
    ],
    tech: 'PHP, MySQl, XAMPP, HTML, CSS, JavaScript, phpMyAdmin',
    link: 'https://github.com/AbdullahAdil145/Web-Store'
  },
   {
    title: 'Personal Website',
    summary: 'A personal website built using React.',
    bullets: [
      'Built a fully responsive personal portfolio website, showcasing work, projects, publications and blogs.',
      'Used CSS to style card layouts for different components, added a contact form, and a booking link.'
    ],
    tech: 'React + MUI, HTML, JavaScript, CSS',
    link: 'https://github.com/AbdullahAdil145/AbdullahAdil145.github.io'
  },
  {
    title: 'Task Manager',
    summary: 'A lightweight and responsive task management app.',
    bullets: [
      'Built a task management tool using vanilla HTML, CSS, and JavaScript with a focus on simplicity and responsiveness.',
      'Utilized local storage for persistent task saving and dynamic DOM manipulation for real-time updates.'
    ],
    tech: 'HTML, CSS, JavaScript',
    link: 'https://github.com/AbdullahAdil145/TaskManager'
  },
    {
    title: 'MVC Web Dashboard',
    summary: 'A web dashboard built using MVC architecture.',
    bullets: [
      'Developed a responsive frontend with user registration and session management.',
      'Implemented secure authentication with password hashing, lockout protection, and modular, scalable components.'
    ],
    tech: 'HTML, PHP, JavaScript, CSS, MariaDB',
    link: 'https://github.com/AbdullahAdil145/MVC-Web-Dashboard'
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
      {sections.map((section, index) => (
  <React.Fragment key={section.id}>
    <button onClick={() => scrollToSection(section.id)}>
      {section.label}
    </button>
    {index < sections.length - 1 && <span className="nav-divider">|</span>}
  </React.Fragment>
))}
    </div>
  </div>

  <div className="nav-right">
<label className="switch">
  <input
    type="checkbox"
    checked={darkMode}
    onChange={() => setDarkMode(!darkMode)}
    tabIndex={-1}
    onMouseDown={(e) => e.preventDefault()}
  />
  <span className="slider round"></span>
</label>
  </div>

  <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
    <div className="sidebar-content">
      <button className="close-btn" onClick={() => setSidebarOpen(false)}>×</button>
      {sections.map((section) => (
  <button key={section.id} onClick={() => scrollToSection(section.id)}>
    <span style={{ marginRight: '8px' }}>{section.icon}</span> {section.label}
  </button>
))}
    </div>
  </div>
  {sidebarOpen && <div className="overlay-blur" onClick={() => setSidebarOpen(false)}></div>}
</nav>
   
<div className="update-bar">
  <span className="update-label"><strong>Updates:</strong></span>
  <div className="update-ticker-wrapper">
    <span className="update-ticker-text">
      Currently working on adding animated borders to cards  ●  Adding a dynamic animation background.
    </span>
  </div>
</div>
    
      <header className="hero">
        <h1 className="name-heading">
        Hi <span className="wave">👋</span>, I'm <span className="highlight">Muhammad Abdullah Adil</span>
        </h1>
        <h2>Full Stack Developer | Web Developer</h2>
        <img className="hero-img" src="https://avatars.githubusercontent.com/u/189928452?v=4" alt="profile" />

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
      <a href="/Muhammad Abdullah Adil.pdf" target="_blank" rel="noopener noreferrer">View</a>
      <a href="/Muhammad Abdullah Adil.pdf" download>Download</a>
    </div>
  </div>
</div>

        <p className="intro-text">
          I am Full Stack Software Developer experienced in building end-to-end solutions and delivering exceptional user experiences. Proficient in server-side programming languages such as Java and Node.js, with expertise in RESTful API development and modern frontend frameworks like Angular and React. Well-versed in version control systems, agile methodologies, and DevOps practices.
          <br /><br />
          By degree, I’m a Computer Science graduate, by nature, I’m curious and hands on, I thrive when turning ideas into smooth, working products. I've contributed to impactful projects, including backend servers, pipelines, extensions, scrapers, dashboards, and more.
          <br /><br />
          Beyond code, you’ll can find me on a tennis court, in the pool, or working out with a podcast on. I also enjoy exploring new places, and occasionally blog when inspiration hits, usually about tech or life as a developer.
          </p>
      </header>

      <section id="🎓  Education" className="experience-section">
  <h1>🎓 Education</h1>
  
  <div className="animated-border">
    <div className="exp-card">
      <div className="inner">
        <h3>Algoma University<br />
        Bachelors of Computer Science<br />
        August 2025</h3>
        <ul>
          <li><strong>Concentrations:</strong> Full Stack Development, Web Development, Database Programming, Computer Networks.</li>
          <li><strong>Honors and Awards:</strong> Student Success Scholarship, Algoma University High Achievement Award.</li>
          <li><strong>Related Coursework:</strong> Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Computer Networks, Artificial Intelligence, Object-Oriented Programming, Software Engineering, Sys Analysis.</li>
        </ul>
      </div>
    </div>
  </div>

</section>

    
      <section id="💼  Experience" className="experience-section">
        <h1>💼 Experience</h1>
        <div className="exp-card">
          <h3>ZAPPLY<br />
          Junior Software Developer<br />
          Jan 2025 – Aug 2025</h3>
          <ul>
            <li>Designed and developed a full-stack job automation platform to streamline job application workflows across multiple websites, reducing manual effort by 80%.</li>
            <li>Collaborated on a Chrome extension that auto-fills job applications, leveraging the APIs and intelligent DOM parsing to support multiple job boards.</li>
            <li>Built scalable backend services using FastAPI and MongoDB, enabling asynchronous scraping and real-time data processing from platforms.</li>
            <li>Participated in agile sprints and weekly code reviews, contributing to continuous delivery pipelines and improving overall development velocity.</li>
            <li>Integrated logging, error tracking, and user analytics to monitor performance and improve user experience.</li>
          </ul>
        </div>
      </section>

     <section id="🚀  Projects" className="projects-section">
  <h1>🚀 Projects</h1>

  {/* Desktop View */}
  <div className="projects-grid desktop-only">
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

  {/* Mobile Carousel */}
  <div className="carousel-wrapper mobile-only">
    <div className="carousel" id="carousel">
      {projects.map((p, i) => (
        <div className="carousel-card" key={i}>
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
  </div>
</section>


    <section id="🛠️  Tech Stack" className="stack-section">
  <h1>🛠️ Tech Stack</h1>

 <div style={{ marginTop: '20px' }}>
  <div className="icons">
    {[
      'java', 'python', 'cplusplus', 'javascript', 'html5', 'css3', 'php',
      'mongodb', 'mysql', 'nodejs', 'react', 'express', 'fastapi'
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
{/*
<section id="📊  Github Stats" className="stats-section">
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

        <section id="🧠  Leetcode Stats" className="stats-section">
  <h1>🧠 LeetCode Stats</h1>
  <div className="stats-container">
    <img
      src="https://leetcard.jacoblin.cool/abdullahadil145"
      alt="LeetCode Stats"
      className="stats-image"
    />
  </div>
</section>
*/}
        <section id="🏛️  Publications" className="blog-section">
  <h1>🏛️ Publications</h1>

  {/* Desktop View */}
  <div className="blog-wrapper desktop-only">
    {[
      {
        title: "Simulation of a Basic Cloud Data Centre Using CloudSim",
        date: "18 June 2025",
        desc:
          "This paper presents a foundational simulation of a cloud data center using CloudSim, exploring resource provisioning and VM scheduling to help understand core cloud computing behavior.",
        link: "https://www.techrxiv.org/users/932208/articles/1305382-simulation-of-a-basic-cloud-data-centre-using-cloudsim",
      },
      {
        title: "Analysis of Phishing Attacks and Effective Countermeasures",
        date: "25 June 2025",
        desc:
          "This report analyzes phishing threats, including email, spear phishing, and smishing, by exploring attack tactics, real-world cases, and key indicators. It also evaluates countermeasures like MFA, email filters, employee training, and AI-based detection to strengthen cybersecurity resilience.",
        link: "https://www.techrxiv.org/users/932208/articles/1307002-analysis-of-phishing-attacks-and-effective-countermeasures",
      },
    ].map((pub, i) => (
      <div className="blog-card" key={i}>
        <a href={pub.link} target="_blank" rel="noreferrer">
          <div className="blog-content">
            <h3>{pub.title}</h3>
            <p className="blog-date">{pub.date}</p>
            <p className="blog-desc">{pub.desc}</p>
          </div>
        </a>
      </div>
    ))}
  </div>

  {/* Mobile Carousel View */}
  <div className="carousel-wrapper mobile-only">
    <div className="carousel">
      {[
        {
          title: "Simulation of a Basic Cloud Data Centre Using CloudSim",
          date: "18 June 2025",
          desc:
            "This paper presents a foundational simulation of a cloud data center using CloudSim, exploring resource provisioning and VM scheduling to help understand core cloud computing behavior.",
          link: "https://www.techrxiv.org/users/932208/articles/1305382-simulation-of-a-basic-cloud-data-centre-using-cloudsim",
        },
        {
          title: "Analysis of Phishing Attacks and Effective Countermeasures",
          date: "25 June 2025",
          desc:
            "This report analyzes phishing threats, including email, spear phishing, and smishing, by exploring attack tactics, real-world cases, and key indicators. It also evaluates countermeasures like MFA, email filters, employee training, and AI-based detection to strengthen cybersecurity resilience.",
          link: "https://www.techrxiv.org/users/932208/articles/1307002-analysis-of-phishing-attacks-and-effective-countermeasures",
        },
      ].map((pub, i) => (
        <div className="carousel-card" key={i}>
          <a href={pub.link} target="_blank" rel="noreferrer">
            <div className="blog-content">
              <h3>{pub.title}</h3>
              <p className="blog-date">{pub.date}</p>
              <p className="blog-desc">{pub.desc}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="📰  Blog" className="blog-section">
  <h1>📰 Blog</h1>

  {/* Desktop View */}
  <div className="blog-wrapper desktop-only">
    {blogs.slice(0, 2).map((post, i) => {
      const imgMatch = post.description.match(/<img.*?src="(.*?)"/);
      const imageUrl = imgMatch ? imgMatch[1] : '';
      return (
        <div className="blog-card" key={i}>
          <a href={post.link} target="_blank" rel="noreferrer">
            {imageUrl && <img src={imageUrl} alt="thumbnail" className="blog-thumb" />}
            <div className="blog-content">
            <p className="blog-date">{new Date(post.pubDate).toLocaleDateString()}</p>          
            <h3>{post.title}</h3>    
            </div>
          </a>
        </div>
      );
    })}
  </div>

  {/* Mobile Carousel View */}
  <div className="carousel-wrapper mobile-only">
    <div className="carousel">
      {blogs.slice(0, 2).map((post, i) => {
        const imgMatch = post.description.match(/<img.*?src="(.*?)"/);
        const imageUrl = imgMatch ? imgMatch[1] : '';
        return (
          <div className="carousel-card" key={i}>
            <a href={post.link} target="_blank" rel="noreferrer">
              {imageUrl && <img src={imageUrl} alt="thumbnail" className="blog-thumb" />}
              <div className="blog-content">
              <p className="blog-date">{new Date(post.pubDate).toLocaleDateString()}</p>  
              <h3>{post.title}</h3>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <section id="📬  Contact" className="contact-section">
  <h1>📬 Contact Me</h1>

  <div className="social-icons">
  <a href="https://facebook.com/abdullahadil143" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" className="social-icon" />
  </a>
  <a href="https://instagram.com/abdullahadil145" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="social-icon" />
  </a>
  <a href="https://www.snapchat.com/add/abdullahadil145" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/snapchat.svg" alt="Snapchat" className="social-icon" />
  </a>
  <a href="https://discord.com/users/AbdullahAdil145" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg" alt="Discord" className="social-icon" />
  </a>
  <a href="https://t.me/abdullahadil145" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg" alt="Telegram" className="social-icon" />
  </a>
</div>

<form action="https://formspree.io/f/xqabbqbw" method="POST">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
    
    <button type="submit" className="button primary-button">
        Send Message
    </button>

    <div style={{ 
        textAlign: 'center', 
        margin: '2px 0', 
        fontWeight: 'bold', 
        fontSize: '18px' 
    }}>
        Or
    </div>

    <a
        href="https://calendly.com/abdullahadil143/60min"
        target="_blank"
        rel="noopener noreferrer"
        className="button primary-button"
        style={{ marginTop: '5px', display: 'inline-block' }}
    >
        Book a Meeting
    </a>
</form>

</section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Muhammad Abdullah Adil</p>
      </footer>
    </div>
  );
}

export default App;
