import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
     
    try {
      console.log(formData)
     console.log (`${import.meta.env.VITE_API_URL}/contact`, formData);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);

      if (response.data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, title: 'Email', value: 'lalitsharmajp@gmail.com', link: 'mailto:lalitsharmajp@gmail.com' },
    { icon: <FaPhone />, title: 'Phone', value: '+91 8000262300', link: 'tel:+918000262300' },
    { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Gurugram, India', link: null },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/9636391992lalit', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/lalit-kumar-sharma-78a500214/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/lalit49821', label: 'Twitter' },
  ];

  const formFields = [
    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe', required: true },
    { id: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com', required: true },
    { id: 'message', label: 'Your Message', type: 'textarea', placeholder: 'Tell me about your project...', required: true },
  ];

  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Feel free to reach out to me through any of the following methods.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-lg transition">
                  <div className="text-3xl text-primary-600">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 hover:text-primary-600 transition">{info.value}</a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full text-2xl text-gray-700 hover:text-white hover:bg-primary-600 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-8 border rounded-lg shadow-md space-y-6">
              {formFields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-gray-700 font-medium mb-2">
                    {field.label} *
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required={field.required}
                      rows="5"
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition resize-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                    />
                  )}
                </div>
              ))}

              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
