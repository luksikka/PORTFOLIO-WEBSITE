import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaKeyboard, FaDatabase, FaFileExcel, FaChartLine, 
  FaFileAlt, FaCheckDouble, FaClock, FaSearch 
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'Data Entry',
      icon: FaKeyboard,
      items: [
        { name: 'Typing Speed', level: 95, wpm: '90+ WPM' },
        { name: 'Accuracy', level: 98, wpm: '99.9%' },
        { name: '10-Key Entry', level: 92, wpm: 'Expert' },
      ]
    },
    {
      category: 'Software Proficiency',
      icon: FaFileExcel,
      items: [
        { name: 'Microsoft Excel', level: 95, wpm: 'Advanced' },
        { name: 'Google Sheets', level: 90, wpm: 'Advanced' },
        { name: 'MS Office Suite', level: 93, wpm: 'Expert' },
      ]
    },
    {
      category: 'Database Management',
      icon: FaDatabase,
      items: [
        { name: 'SQL', level: 85, wpm: 'Intermediate' },
        { name: 'Data Organization', level: 95, wpm: 'Expert' },
        { name: 'Data Migration', level: 88, wpm: 'Advanced' },
      ]
    },
    {
      category: 'Data Analysis',
      icon: FaChartLine,
      items: [
        { name: 'Data Validation', level: 94, wpm: 'Expert' },
        { name: 'Report Generation', level: 90, wpm: 'Advanced' },
        { name: 'Trend Analysis', level: 87, wpm: 'Advanced' },
      ]
    }
  ];

  const additionalSkills = [
    { icon: FaFileAlt, title: 'Document Processing', description: 'PDF, Word, Scanned Documents' },
    { icon: FaCheckDouble, title: 'Quality Assurance', description: 'Error Detection & Correction' },
    { icon: FaClock, title: 'Time Management', description: 'Meeting Tight Deadlines' },
    { icon: FaSearch, title: 'Data Research', description: 'Information Gathering' },
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Professional expertise and technical capabilities
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="skill-category glass-effect"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="category-header">
                <skillGroup.icon className="category-icon" />
                <h3 className="category-title">{skillGroup.category}</h3>
              </div>

              <div className="skills-list">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-wpm">{skill.wpm}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: groupIndex * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="additional-title">Additional Competencies</h3>
          <div className="additional-grid">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="additional-card glass-effect"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <skill.icon className="additional-icon" />
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
