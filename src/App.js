import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    setSidebarOpen(false);
    if (id === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    'Home',
    'experience',
    'projects',
    'Tech Stack',
    'Github Stats',
    'Leetcode Stats',
    'publications',
    'blog',
    'contact'
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

        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
          <span className="slider round"></span>
        </label>

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
          My technical stack includes JavaScript, Java, Python, C++, and PHP, alongside tools like Git, Postman, Jira, and Oracle VirtualBox. I'm passionate about continuous learning and applying a user-centered approach to real-world development challenges.
          <br /><br />
          Currently seeking opportunities to contribute to dynamic development teams, where I can build, learn, and deliver value through technology.
        </p>
      </header>
    </div>
  );
}

export default App;
