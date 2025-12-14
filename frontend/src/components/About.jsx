import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaUsers, FaTimes } from 'react-icons/fa';

const About = () => {
  const [showResume, setShowResume] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showResume) {
      // Add overflow-hidden to body when modal opens
      document.body.style.overflow = 'hidden';
    } else {
      // Remove overflow-hidden when modal closes
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showResume]);

  // Download handler function
  const handleDownload = async () => {
    try {
      const response = await fetch('/Resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Lalit_Kumar_Sharma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download resume. Please try again.');
    }
  };

  const highlights = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Responsive Design',
      description: 'Creating beautiful interfaces that work on all devices'
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Working effectively in team environments'
    }
  ];

  return (
    <>
      <section id="about" className="bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              About <span className="text-primary-600">Me</span>
            </h2>
            <p className="section-subtitle">
              Passionate developer with a love for creating innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={image1}
                alt="Workspace"
                className="rounded-2xl shadow-lg w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Hi, I'm Lalit Kumar Sharma, a Full Stack Developer
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I am a Computer Science undergraduate at IIIT Senapati with hands-on experience in full-stack web development and software engineering. I have worked as a Full Stack Developer Intern at QuickIntell, where I validated 250+ API endpoints across multiple projects and performed data quality testing to ensure production-ready applications. I have also completed an Ethical Hacking and Penetration Testing internship at CDAC Noida under the Government of India’s Cyber Gyan Project.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                I have developed several real-world projects including a Job Application Portal and a Bookstore Application using the MERN stack. These projects involved implementing JWT-based authentication, role-based access control, real-time features with Socket.io, cloud integrations, and advanced search functionality. Additionally, I built a Sorting Algorithm Visualizer in C++ using Raylib to demonstrate core data structures and algorithms through interactive animations.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                With a strong foundation in data structures and algorithms, web technologies, and backend systems, I enjoy solving complex problems and continuously improving my technical skills. I aim to build scalable, efficient, and impactful applications that deliver real value to users.
              </p>


              {/* Resume Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowResume(true)}
                  className="btn-primary"
                >
                  View Resume
                </button>
                <button
                  onClick={handleDownload}
                  className="btn-secondary"
                >
                  Download Resume
                </button>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card p-6 text-center"
              >
                <div className="text-4xl text-primary-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {showResume && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowResume(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-6xl h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Close"
            >
              <FaTimes size={24} />
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/Resume.pdf"
              className="w-full h-full border-0"
              title="Resume PDF"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default About;

