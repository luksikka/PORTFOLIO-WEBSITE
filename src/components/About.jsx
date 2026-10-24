import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAward, FaCheckCircle, FaClock, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FaAward, value: '5+', label: 'Years Experience' },
    { icon: FaCheckCircle, value: '500+', label: 'Projects Completed' },
    { icon: FaUsers, value: '200+', label: 'Happy Clients' },
    { icon: FaClock, value: '99.9%', label: 'Accuracy Rate' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know more about my professional journey
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-container glass-effect">
              <div className="profile-image">
                <img src="/profile.jpg" alt="Mr. Shalashian" className="profile-img" />
              </div>
              <div className="floating-card glass-effect">
                <FaAward className="card-icon" />
                <div>
                  <h4>Certified Consultant</h4>
                  <p>Professional Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="about-title">
              Professional <span className="gradient-text">Business Consultant & Auditor</span>
            </h3>
            
            <p className="about-description">
              I am a dedicated Business Consultant and Auditor with over 5 years of experience in 
              financial consulting, audit services, tax advisory, and company registration. My expertise 
              lies in helping businesses achieve financial compliance and strategic growth.
            </p>

            <p className="about-description">
              With comprehensive knowledge of taxation, audit procedures, and business regulations, 
              I ensure that every client receives professional guidance for their business needs. I specialize 
              in tax planning, financial audits, GST compliance, and company formation services.
            </p>

            <div className="skills-highlights">
              {[
                'Tax Advisory & Planning',
                'Financial Audit Services',
                'GST & Income Tax Filing',
                'Company Registration',
                'Business Compliance',
                'Strategic Consulting'
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-tag glass-effect"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="check-icon" />
                  {skill}
                </motion.div>
              ))}
            </div>

            <motion.button
              className="download-cv"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="stats-container"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card glass-effect"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className="stat-icon" />
              <h3 className="stat-value gradient-text">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
