import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaTrophy, FaFire, FaStar } from 'react-icons/fa';
import leetcodeLogo from '../assets/leetcode.png';
import gfgLogo from '../assets/gfg.png';

const CodingProfiles = () => {
  const platforms = [
    {
      name: 'LeetCode',
      solved: '200+',
      
      profile: 'https://leetcode.com/u/_code-2004/',
      logo: leetcodeLogo,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      description: '200+ questions on LeetCode'
    },
    {
      name: 'GeeksforGeeks',
      solved: '250+',
      
      profile: 'https://www.geeksforgeeks.org/user/ruby_rider/',
      logo: gfgLogo,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      description: '250+ questions on GFG'
    }
  ];

  return (
    <section id="coding-profiles" className="bg-gray-50 py-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-3xl font-bold text-center">
            Coding <span className="text-primary-600">Profiles</span>
          </h2>
          <p className="section-subtitle text-center text-gray-500 mt-2 mb-8">
            Passionate problem solver with 450+ DSA questions solved across multiple platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 relative overflow-hidden bg-white rounded-2xl shadow-md"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} opacity-10 rounded-full blur-3xl`} />

              <div className="relative">
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4">
                  <a href={platform.profile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <div className={`w-14 h-14 ${platform.bgColor} rounded-xl flex items-center justify-center`}>
                      <img src={platform.logo} alt={platform.name} className="w-10 h-10 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                      
                    </div>
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{platform.description}</p>

                {/* Total Solved */}
                <div className={`${platform.bgColor} ${platform.borderColor} border-2 rounded-xl p-4 mb-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaTrophy className={`${platform.textColor} text-xl`} />
                      <span className="font-semibold text-gray-900">Problems Solved</span>
                    </div>
                    <span className={`text-2xl font-bold ${platform.textColor}`}>{platform.solved}</span>
                  </div>
                </div>

                {/* View Profile Button */}
                <a
                  href={platform.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${platform.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5`}
                >
                  <span>View Profile</span>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-50 to-blue-50 px-8 py-4 rounded-2xl border-2 border-primary-200">
            <FaFire className="text-3xl text-orange-500" />
            <div className="text-left">
              <div className="text-sm text-gray-600 font-medium">Achievement Unlocked</div>
              <div className="text-xl font-bold text-gray-900">450+ Problems Solved</div>
            </div>
            <FaStar className="text-3xl text-yellow-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
