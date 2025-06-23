import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) setDarkMode(savedTheme === 'true');
  }, []);

  useEffect(() => {
    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;

    // Lock scroll
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    // Set theme
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', darkMode);

    // Restore scroll
    setTimeout(() => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(scrollLeft, scrollTop);
    }, 50);
  }, [darkMode]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abdullahadil145')
      .then(res => res.json())
      .then(data => setBlogs(data.items.slice(0, 3)))
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
    'Home', 'Experience', 'Projects', 'Tech Stack',
    'Github Stats', 'Leetcode Stats', 'Publications', 'Blog', 'Contact'
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
          <div className="mobile-menu-icon" onClick={() => setSidebarOpen(true)}>&#9776;</div>
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
            {sections.map((id) => (
              <button key={id} onClick={() => scrollToSection(id)}>{id}</button>
            ))}
          </div>
        </div>
        {sidebarOpen && <div className="overlay-blur" onClick={() => setSidebarOpen(false)}></div>}
      </nav>

      {/* Your full page content below this comment stays the same... */}
      {/* Header, Sections, Footer, etc. (cut for brevity) */}
    </div>
  );
}

export default App;
