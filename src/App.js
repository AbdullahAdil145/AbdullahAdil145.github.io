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
    window.addEventListener("scroll", handleScroll);
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
  { id: '📊  Github Stats', label: 'GitHub Stats', icon: '📊' },
  { id: '🧠  Leetcode Stats', label: 'LeetCode Stats', icon: '🧠' },
  { id: '🏛️  Publications', label: 'Publications', icon: '🏛️' },
  { id: '📰  Blog', label: 'Blog', icon: '📰' },
  { id: '📬  Contact', label: 'Contact', icon: '📬' },
];

const projects = [
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
    title: 'Job Application Tracker',
    summary: 'A Chrome extension that captures and stores job applications.',
    bullets: [
      'Built a full-stack MERN application to help users track and manage job applications with seamless CRUD functionality.',
      'Designed a modular architecture with reusable components and scalable services for maintainability.'
    ],
    tech: 'React, MUI, Node.js, Chrome API',
    link: 'https://github.com/AbdullahAdil145/Job-Application-Tracker'
  },
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
    title: 'MVC Web Dashboard Manager',
    summary: 'A web dashboard built using MVC architecture.',
    bullets: [
      'Developed a responsive frontend with user registration and session management.',
      'Implemented secure authentication with password hashing, lockout protection, and modular, scalable components.'
    ],
    tech: 'HTML, PHP, JavaScript, CSS',
    link: 'https://github.com/AbdullahAdil145/MVC-Web-Dashboard'
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

{/* Update Bar */}   
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
          I’m an adaptable and motivated Full Stack Developer with a knack for building things that make life simpler, and sometimes faster. Whether it’s a Chrome extension that auto applies to jobs or a hotel management system running behind the scenes, I have been crafting solutions that quietly do the heavy lifting. My work spans front-end design with modern frameworks, to back-end development, database management with SQL, and version control using Git.
          <br /><br />
          By degree, I’m a Computer Science graduate, with two published papers, university awards, and leadership roles in student societies. By nature, I’m curious and hands on, I thrive when turning ideas into smooth, working products. I've contributed to impactful projects, including extensions, web scrapers, web dashboards, and more. Collaborative environments are where I prosper, bringing a balance of technical skill, creative problem solving, and a strong focus on user experience.
          My technical experience includes Java, Python, C++, JavaScript, SQL, Node.js, React, Express.js, FastAPI, Git, MongoDB, MariaDB, Postman, and more.
          <br /><br />
          Beyond code, you’ll often find me on a tennis court, in the pool, or on a target shooting range. I’m also someone who enjoys exploring new places, whether that’s hidden spots around the city or peaceful lakeside escapes. I occasionally blog when inspiration hits, usually about tech or life as a developer. These interests keep me grounded, competitive, and constantly learning, both inside and outside the world of code.
          <br /><br />
          I’m currently seeking opportunities to contribute to dynamic development teams where I can build, learn, and help turn complex challenges into solutions, by delivering value through technology.
        </p>
      </header>

      <section id="🎓  Education" className="experience-section">
        <h1>🎓 Education</h1>
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
      </section>
    
      <section id="💼  Experience" className="experience-section">
        <h1>💼 Experience</h1>
        <div className="exp-card">
          <h3>ZAPPLY<br />
          Junior Software Developer<br />
          May 2025 – Present</h3>
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
    <button type="submit" className="button primary-button">Send Message</button>
      
      
<a
  href="https://calendly.com/abdullahadil143/60min"
  target="_blank"
  rel="noopener noreferrer"
  className="button primary-button"
  style={{ marginTop: '5px' }}
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
