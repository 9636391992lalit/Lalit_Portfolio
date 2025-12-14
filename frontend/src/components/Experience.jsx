import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const Experience = () => {
  // Experience data
  const experiences = [
    {
      _id: "1",
      company: "QuickIntell",
      position: "Full Stack Developer Intern",
      duration: "Oct 2025 – Mar 2026",
      location: "Remote",
      status: "ongoing", // Status: "completed" or "ongoing"
      description: "Selected for a 6-month remote internship as a key contributor to cutting-edge AI-driven projects, working on both front-end and back-end development. The role involves research, development, and collaboration to advance AI technology.",
      responsibilities : [
        "Serve as a key contributor on cutting-edge projects, integrating AI algorithms into applications ",
        "Develop on both front-end and back-end components to ensure the seamless functioning of AI applications ",
        "Focus on research, development, and team collaboration to push the boundaries of AI technology "
      ],
      order:1 
    },
    {
      _id: '2',
      company: 'Centre for Development of Advanced Computing (CDAC), Noida',
      position: 'Ethical Hacking and Penetration Testing Intern',
      duration: 'Dec 2024 – Jan 2025',
      location: 'Remote (Cyber Gyan Project)',
      status: "completed", // Status: "completed" or "ongoing"
      description: 'Completed a 6-week internship under the Cyber Gyan Project, focusing on Ethical Hacking, Penetration Testing, and Digital Forensics.',
      responsibilities: [
        'Investigated disk images exceeding 10+ GB using forensic tools like Autopsy, FTK Imager, and EnCase, recovering over 150 hidden or deleted files',
        'Ensured 100% data integrity through MD5/SHA-256 hashing, maintaining legal admissibility of digital evidence'
      ],
      order:2 
    },
    {
      _id: '3',
      company: 'ApexPlanet Software Pvt. Ltd.',
      position: 'Web Development Intern',
      duration: 'June 2025 – July 2025',
      location: 'Remote',
      status: "completed", // Status: "completed" or "ongoing"
      description: 'Completed a 45-day internship focused on frontend development, building responsive and user-friendly web interfaces.',
      responsibilities: [
        'Built and optimized multiple front-end projects, including a personal portfolio, interactive quiz app, and product listing page with filtering and sorting features'
      ],
      order: 3
    }
  ];

  return (
    <section id="experience" className="bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Work <span className="text-primary-600">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and the roles I've undertaken
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
              <motion.div
                key={exp._id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-primary-200 hidden md:block" />
                )}

                <div className="card p-6 md:p-8 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block" />

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Column - Company Info */}
                    <div className="md:col-span-1">
                      <div className="flex items-center gap-2 text-primary-600 mb-2">
                        <FaBriefcase />
                        <h3 className="font-bold text-lg">{exp.company}</h3>
                      </div>
                      <p className="font-semibold text-gray-900 text-xl mb-3">
                        {exp.position}
                      </p>
                      
                      {/* Status Badge */}
                      {exp.status && (
                        <div className="mb-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {exp.status === 'completed' ? '✓ Completed' : '● Currently Doing'}
                          </span>
                        </div>
                      )}
                      
                      <div className="space-y-2 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-primary-600" />
                          <span>{exp.duration}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-primary-600" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column - Description & Responsibilities */}
                    <div className="md:col-span-2">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li
                                key={idx}
                                className="text-gray-600 flex items-start gap-2"
                              >
                                <span className="text-primary-600 mt-1">▸</span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

