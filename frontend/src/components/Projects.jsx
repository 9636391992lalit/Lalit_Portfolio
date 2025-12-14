import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  // Projects data from resume
  const projects = [
    {
      _id: "1",
      title: "Job Application Portal",
      description: "Developed a full-stack job application portal enabling users to apply, post, and track job listings with secure JWT-based authentication. Integrated RESTful APIs and MongoDB for dynamic data handling, supporting real-time updates for 100+ users. Designed an intuitive and responsive UI with Tailwind CSS, improving user engagement and navigation efficiency by 35%.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Clerk", "JWT"],
      githubLink: "https://github.com/9636391992lalit/job-application",
      liveLink: "https://job-portal-flame-zeta.vercel.app/",
      date: "Oct 2025",
      keyPoints: [
        "Developed a full-stack job application portal enabling users to apply, post, and track job listings with secure JWT-based authentication",
        "Integrated RESTful APIs and MongoDB for dynamic data handling, supporting real-time updates for 100+ users",
        "Designed an intuitive and responsive UI with Tailwind CSS, improving user engagement and navigation efficiency by 35%"
      ]
    },
    {
      _id: "2",
      title: "Bookstore App",
      description: "Developed a full-stack bookstore platform with JWT authentication and role-based access control, supporting 100+ users. Integrated Google Books and Open Library APIs to fetch 1,000+ books with real-time search, category, author, and price filters. Implemented a Saved Books feature using MongoDB to persist user selections, enabling retrieval across sessions for 100+ active users.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
      githubLink: "https://github.com/9636391992lalit/BookStore-Application",
      liveLink: null,
      date: "Dec 2024",
      keyPoints: [
        "Developed a full-stack bookstore platform with JWT authentication and role-based access control, supporting 100+ users",
        "Integrated Google Books and Open Library APIs to fetch 1,000+ books with real-time search, category, author, and price filters",
        "Implemented a Saved Books feature using MongoDB to persist user selections, enabling retrieval across sessions for 100+ active users"
      ]
    },
    {
      _id: "3",
      title: "Sorting Visualizer",
      description: "Developed an interactive sorting visualizer in C++ using Raylib, showcasing Bubble, Insertion, and Quick Sort algorithms with real-time animations. Implemented speed and size controls, pause/terminate functionality, and multithreading for smooth 120 FPS visual performance.",
      technologies: ["C++", "Raylib", "Multithreading", "Interactive UI"],
      githubLink: "https://github.com/9636391992lalit/sorting-visualizer/",
      liveLink: null,
      date: "Jan 2024",
      keyPoints: [
        "Developed an interactive sorting visualizer in C++ using Raylib, showcasing Bubble, Insertion, and Quick Sort algorithms with real-time animations",
        "Implemented speed and size controls, pause/terminate functionality, and multithreading for smooth 120 FPS visual performance"
      ]
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Featured <span className="text-primary-600">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of my recent work that showcases my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 ml-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-600 text-xl transition-colors"
                        title="GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-600 text-xl transition-colors"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Date */}
                <span className="text-sm text-gray-500 font-medium">{project.date}</span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Key Points */}
                {project.keyPoints && project.keyPoints.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {project.keyPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 flex items-start gap-2 text-sm leading-relaxed"
                      >
                        <span className="text-primary-600 mt-1 flex-shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-primary"
            >
              {showAll ? 'Show Less' : `View All Projects (${projects.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

