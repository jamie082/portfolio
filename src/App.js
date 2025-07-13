import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

// You'd want to create a separate component for each project,
// or a generic ProjectSection component that takes props.
const ProjectSection = ({ id, title, description, technologies, githubLink, demoLink, imageUrl }) => (
  <div id={id} className="w3-container class" style={{ display: 'none' }}>
    <h2>{title}</h2>
    <p>{description}</p>
    <p><strong>Technologies:</strong> {technologies}</p>
    {githubLink && <p><a href={githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>}
    {demoLink && <p><a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a></p>}
    {imageUrl && <img src={imageUrl} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />}
  </div>
);


function App() {
  const openCity = (id) => {
    document.querySelectorAll(".w3-container.class").forEach(el => {
      el.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
  };

  // Example project data
  const projects = [
    {
      id: 'Jamie',
      title: 'Python Web Scraper',
      description: 'A Python-based web scraper to extract data from various websites for analysis.',
      technologies: 'Python, BeautifulSoup, Requests',
      githubLink: 'https://github.com/jamie082/web-scraper-repo',
      imageUrl: 'scraper.png' // Make sure you have this image in your public folder or import it
    },
    {
      id: 'Lindsey',
      title: 'WGU Capstone Project',
      description: 'My final capstone project for Western Governors University, demonstrating full-stack development skills.',
      technologies: 'React, Node.js, Express, MongoDB',
      githubLink: 'https://github.com/jamie082/wgu-capstone-repo',
      demoLink: 'http://your-capstone-demo.com'
    },
    {
      id: 'Susan',
      title: 'Pandas Data Analysis Project',
      description: 'An in-depth data analysis project using the Pandas library to derive insights from a large dataset.',
      technologies: 'Python, Pandas, Matplotlib, Jupyter Notebook',
      githubLink: 'https://github.com/jamie082/pandas-project-repo',
      imageUrl: 'pandas.png'
    },
    {
      id: 'leetcode',
      title: 'LeetCode Problems',
      description: 'Solutions to various LeetCode problems, showcasing problem-solving and algorithm skills.',
      technologies: 'Python, JavaScript, Data Structures, Algorithms',
      githubLink: 'https://github.com/jamie082/leetcode-solutions'
    },
    {
      id: 'discord',
      title: 'Discord Bot',
      description: 'A custom Discord bot developed to automate tasks and provide interactive features for a community server.',
      technologies: 'Node.js, Discord.js',
      githubLink: 'https://github.com/jamie082/discord-bot-repo',
      imageUrl: 'discord-bot.png'
    },
    {
      id: 'ml-prediction',
      title: 'Weather Prediction w/ ML',
      description: 'A machine learning project that predicts weather patterns based on historical data.',
      technologies: 'Python, Scikit-learn, Pandas, NumPy',
      githubLink: 'https://github.com/jamie082/weather-ml-repo',
      imageUrl: 'ml-weather.png'
    },
    {
      id: 'flappy-birds',
      title: 'Flappy Birds Clone',
      description: 'A recreation of the classic Flappy Birds game using web technologies.',
      technologies: 'JavaScript, HTML5 Canvas, CSS',
      githubLink: 'https://github.com/jamie082/flappy-birds-clone',
      demoLink: 'http://your-flappy-birds-demo.com'
    },
    {
      id: 'jamie-about',
      title: 'About Me',
      description: "Hi there! I'm Jamie, a software engineer passionate about building impactful applications. I hold a Bachelor's degree and have a strong foundation in various programming languages and frameworks. I'm always eager to learn new technologies and contribute to innovative projects. When I'm not coding, you can find me exploring San Diego's beautiful beaches or diving into a good book.",
      technologies: 'React, JavaScript, HTML, CSS', // Add relevant technologies for your "About Me" if any
    },
    // Add more projects here
  ];

  return (
    <>
      <Helmet>
        <title>Jamie's Portfolio - San Diego Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      </Helmet>

      <div className="w3-container">
        <h3>Jamie's Portfolio</h3>
        <p>
          <span className="red_text">
            Visit my: <a href="https://www.linkedin.com/in/jamiem100/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>{" "}
          | <a href="https://github.com/jamie082/" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
        <h1>Software Engineer w/ Bachelors Degree</h1>
      </div>

      <div className="w3-bar w3-black">
        {projects.map(project => (
          <button
            key={project.id}
            className="w3-bar-item w3-button"
            onClick={() => openCity(project.id)}
          >
            {project.title === 'Jamie' ? 'Python Web Scraper' : project.title}
          </button>
        ))}
      </div>

      {/* Project sections rendered dynamically */}
      {projects.map(project => (
        <ProjectSection key={project.id} {...project} />
      ))}

    </>
  );
}

export default App;