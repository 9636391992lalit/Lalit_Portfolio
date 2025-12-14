import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaAward, FaTimes, FaCertificate, FaDownload } from 'react-icons/fa';

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Certifications data with skills removed
  const certifications = [
    {
      title: 'Data Analytics with Python',
      institute: 'NPTEL Online Certification (Indian Institute of Technology Roorkee)',
      date: 'Jan 2025 - Apr 2025',
      description: 'Successfully completed the course with an Elite consolidated score of 79%. Gained comprehensive knowledge in Data Analytics with Python, including data manipulation, statistical analysis, visualization, and machine learning fundamentals.',
      logo: '/logoNPTEL.png',
      score: '79%',
      level: 'Elite',
      certificate: '/DataAnalyticswithPython.pdf',
    },
    {
      title: 'Joy of Computing Using Python',
      institute: 'NPTEL Online Certification (Indian Institute of Technology Madras)',
      date: 'Jul 2024 - Oct 2024',
      description: 'Successfully completed the course with an Elite consolidated score of 85%. Developed strong problem-solving skills using Python, covering algorithms, data structures, and computational thinking.',
      logo: '/logoNPTEL.png',
      score: '85%',
      level: 'Elite',
      certificate: '/python.pdf',
    },
    {
      title: 'MongoDB Database Development',
      institute: 'MongoDB University',
      date: 'Dec 2023 - Jan 2024',
      description: 'Advanced course on MongoDB database design, querying, aggregation, and performance optimization. Gained expertise in NoSQL database management, schema design, and data modeling for scalable applications.',
      logo: '/MongoDB.png',
      score: 'Completed',
      level: 'Advanced',
      certificate: '/MongoDB.pdf',
    }
  ];

  // Since education data is typically static, we can hardcode it
  // Or you can create an API endpoint for it like other sections
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Indian Institute of Information Technology, Manipur',
      year: '2022-2026',
      description: 'Specialized in Software Engineering and Web Development. Completed coursework in Data Structures, Algorithms, Database Management, and Web Technologies.',
      grade: '8.13 CGPA',
      achievements: [
        'Secured 2nd Position in C.P. Competition - AHOUBA\'24, IIIT Manipur (Apr 2024)',
        'Dean\'s List for Academic Excellence',

      ]
    },
    {
      degree: 'Senior Secondary Education (Class 12th) – Science Stream',
      institution: 'Kaushik Shiksha Niketan Sr. Sec. School, Jaipur',
      year: '2022-2021',
      description: 'Completed Senior Secondary Education with Science stream (Physics, Chemistry, and Mathematics) under RBSE. Developed strong analytical, logical, and problem-solving skills through rigorous coursework and practical sessions. Excelled in academics with consistent performance across subjects, reflecting dedication and conceptual understanding.',
      grade: '95.40%',
      achievements: [
        'Served as Lead of the School Sports Team in inter-school competitions, promoting teamwork and discipline',
        'Actively contributed to organizing school cultural and science exhibitions'
      ]
    }
  ];

  return (
    <section id="education" className="bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Education & <span className="text-primary-600">Certifications</span>
          </h2>
          <p className="section-subtitle">
            My academic background and continuous learning journey
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 border-t-4 border-primary-600"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-6 mx-auto">
                <FaGraduationCap className="text-3xl" />
              </div>

              {/* Degree */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-primary-600 font-semibold text-center mb-4">
                {edu.institution}
              </p>

              {/* Year and Grade */}
              <div className="flex justify-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <FaCalendar className="text-primary-600" />
                  <span>{edu.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaAward className="text-primary-600" />
                  <span>{edu.grade}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-center mb-4 leading-relaxed">
                {edu.description}
              </p>

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-4 pt-4 border-t border-primary-200">
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">
                    Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-primary-600 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Professional Certifications
            </h3>
            <p className="text-gray-600 text-lg">
              Validated expertise through industry-recognized certifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => setSelectedCert(cert)}
                className="group relative card p-6 cursor-pointer overflow-hidden"
              >
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge for Elite/Advanced level */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    cert.level === 'Elite'
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md'
                      : 'bg-gradient-to-r from-blue-400 to-indigo-400 text-white shadow-md'
                    }`}>
                    {cert.level}
                  </span>
                </div>

                {/* Logo container with enhanced styling */}
                <div className="relative w-24 h-24 mx-auto mb-5 flex items-center justify-center bg-white rounded-2xl shadow-md group-hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                  {cert.logo.endsWith('.png') || cert.logo.endsWith('.jpg') || cert.logo.endsWith('.jpeg') ? (
                    <img
                      src={cert.logo}
                      alt={`${cert.institute} logo`}
                      className="w-20 h-20 object-contain p-2"
                    />
                  ) : (
                    <FaCertificate className="text-5xl text-primary-600" />
                  )}
                </div>

                {/* Certificate Title */}
                <h4 className="text-lg font-bold text-gray-800 mb-2 text-center leading-tight group-hover:text-primary-600 transition-colors">
                  {cert.title}
                </h4>

                {/* Institute Name */}
                <p className="text-sm text-gray-600 text-center mb-3 line-clamp-2">
                  {cert.institute}
                </p>

                {/* Score Badge */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <FaAward className="text-primary-500" />
                    <span className="font-semibold">{cert.score}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="flex items-center justify-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <FaCertificate className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificate Details Modal */}
        <AnimatePresence>
          {selectedCert && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              >
                {/* Modal Content */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                >
                  {/* Close Button */}
                  <div className="flex justify-end p-4">
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <FaTimes className="text-2xl" />
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="p-8">
                    {/* Header with Logo and Badge */}
                    <div className="flex flex-col items-center mb-8">
                      {/* Logo */}
                      <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg mb-6 border-2 border-primary-100">
                        {selectedCert.logo.endsWith('.png') || selectedCert.logo.endsWith('.jpg') || selectedCert.logo.endsWith('.jpeg') ? (
                          <img
                            src={selectedCert.logo}
                            alt={`${selectedCert.institute} logo`}
                            className="w-28 h-28 object-contain p-3"
                          />
                        ) : (
                          <FaCertificate className="text-7xl text-primary-600" />
                        )}
                      </div>

                      {/* Level Badge */}
                      <div className="mb-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                          selectedCert.level === 'Elite'
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white'
                            : 'bg-gradient-to-r from-blue-400 to-indigo-400 text-white'
                          }`}>
                          {selectedCert.level} Certification
                        </span>
                      </div>

                      {/* Certificate Title */}
                      <h3 className="text-3xl font-bold text-center text-gray-800 mb-3 leading-tight">
                        {selectedCert.title}
                      </h3>

                      {/* Institute */}
                      <p className="text-primary-600 font-semibold text-center text-lg">
                        {selectedCert.institute}
                      </p>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {/* Completion Date */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                            <FaCalendar className="text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 font-medium">Completed</p>
                            <p className="text-sm font-bold text-gray-800">{selectedCert.date}</p>
                          </div>
                        </div>
                      </div>

                      {/* Score */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                            <FaAward className="text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 font-medium">Score</p>
                            <p className="text-sm font-bold text-gray-800">{selectedCert.score}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6 border border-gray-200">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center gap-2">
                        <FaCertificate className="text-primary-600" />
                        About This Certification
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedCert.description}
                      </p>
                    </div>

                    {/* Skills Gained - REMOVED */}

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-center pt-4 border-t border-gray-200">
                      {selectedCert.certificate && (
                        <a
                          href={selectedCert.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-md hover:shadow-lg"
                        >
                          <FaDownload />
                          View Certificate
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Education;