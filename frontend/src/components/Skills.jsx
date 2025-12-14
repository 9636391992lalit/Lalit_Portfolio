import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { _id: '1', name: 'Python', category: 'Programming Languages' },
    { _id: '2', name: 'JavaScript', category: 'Programming Languages' },
    { _id: '3', name: 'C++', category: 'Programming Languages' },
    { _id: '4', name: 'C', category: 'Programming Languages' },
    { _id: '5', name: 'SQL', category: 'Programming Languages' },

    { _id: '6', name: 'React', category: 'Frontend' },
    { _id: '7', name: 'Next.js', category: 'Frontend' },
    { _id: '8', name: 'HTML5', category: 'Frontend' },
    { _id: '9', name: 'CSS3', category: 'Frontend' },
    { _id: '10', name: 'Tailwind', category: 'Frontend' },
    { _id: '11', name: 'Bootstrap', category: 'Frontend' },

    { _id: '12', name: 'Node.js', category: 'Backend' },
    { _id: '13', name: 'Express', category: 'Backend' },
    { _id: '14', name: 'REST APIs', category: 'Backend' },
    { _id: '15', name: 'n8n', category: 'Backend' },

    { _id: '16', name: 'MongoDB', category: 'Database' },
    { _id: '17', name: 'MySQL', category: 'Database' },
    { _id: '18', name: 'AWS', category: 'Database' },

    { _id: '19', name: 'Git', category: 'DevOps' },
    { _id: '20', name: 'GitHub', category: 'DevOps' },
    { _id: '21', name: 'Docker', category: 'DevOps' },

    { _id: '22', name: 'VS Code', category: 'Tools' },
    { _id: '23', name: 'Linux', category: 'Tools' },
    { _id: '24', name: 'Postman', category: 'Tools' },
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Programming Languages', 'Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];

  // Group skills by category
  const groupedSkills = categories.slice(1).reduce((acc, category) => {
    acc[category] = skills.filter(skill => skill.category === category);
    return acc;
  }, {});

  // Determine which categories to show
  const displayCategories = activeCategory === 'All' ? Object.keys(groupedSkills) : [activeCategory];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayCategories.map((category, idx) => (
            groupedSkills[category] && (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-gray-300 rounded-lg p-6 min-h-[120px] flex flex-col"
              >
                <h3 className="text-lg font-bold mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {groupedSkills[category].map(skill => (
                    <span
                      key={skill._id}
                      className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
