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
    duration: "Oct 2025 – Jan 2026",
    location: "Remote",
    status: "completed", // Status: "completed" or "ongoing"
    description:
      "Worked as a Full Stack Developer Intern on multiple full-stack projects, focusing on API validation, backend reliability, and data quality testing to ensure production-ready applications.",
    responsibilities: [
      "Designed, developed, and optimized RESTful APIs across 5 full-stack applications, implementing authentication, edge-case handling, and error-management logic while validating 250+ endpoints using Postman, reducing production issues by 35%",
      "Built and maintained robust backend API structures to ensure stable and consistent application performance",
      "Developed and integrated AI-driven data pipelines using Flowise AI combined with manual data reconciliation and validation",
      "Achieved 99% data accuracy and ensured reliable, production-ready datasets across multiple application modules"
    ],
    order: 1
  },
  {
    _id: "2",
    company: "Centre for Development of Advanced Computing (CDAC), Noida",
    position: "Ethical Hacking and Penetration Testing Intern",
    duration: "Dec 2024 – Jan 2025",
    location: "Remote (Cyber Gyan Project)",
    status: "completed", // Status: "completed" or "ongoing"
    description:
      "Completed a Government of India Cyber Gyan Project internship with hands-on exposure to ethical hacking, penetration testing, network security, and digital forensics.",
    responsibilities: [
      "Analyzed disk images exceeding 10GB using forensic tools such as Autopsy, FTK Imager, and EnCase",
      "Recovered 150+ hidden and deleted files while documenting findings and potential security vulnerabilities",
      "Maintained evidence integrity throughout forensic analysis workflows"
    ],
    order: 2
  },
  {
    _id: "3",
    company: "ApexPlanet Software Pvt. Ltd.",
    position: "Web Development Intern",
    duration: "June 2025 – July 2025",
    location: "Remote",
    status: "completed", // Status: "completed" or "ongoing"
    description:
      "Completed a short-term internship focused on frontend web development, building responsive and user-friendly interfaces.",
    responsibilities: [
      "Developed responsive frontend projects including a personal portfolio, interactive quiz application, and product listing pages with filtering and sorting functionality",
      "Improved UI responsiveness and usability using modern HTML, CSS, and JavaScript practices"
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

