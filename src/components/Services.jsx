import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaKeyboard, FaDatabase, FaFileAlt, FaChartLine, 
  FaClipboardCheck, FaExchangeAlt, FaBuilding 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FaBuilding,
      title: 'Company Registration',
      description: 'Complete company registration services including documentation, data processing, and MCA compliance.',
      features: [
        'Private Limited Registration',
        'LLP Registration',
        'Partnership Firm Setup',
        'MCA Portal Filing'
      ]
    },
    {
      icon: FaKeyboard,
      title: 'Data Entry Services',
      description: 'Fast and accurate data entry with typing speed of 90+ WPM and 99.9% accuracy rate.',
      features: [
        'Online & Offline Data Entry',
        'Numeric & Alphanumeric Entry',
        'Form Filling',
        '10-Key Entry'
      ]
    },
    {
      icon: FaDatabase,
      title: 'Database Management',
      description: 'Comprehensive database solutions including creation, maintenance, and optimization.',
      features: [
        'Database Creation',
        'Data Organization',
        'Record Updating',
        'Database Migration'
      ]
    },
    {
      icon: FaFileAlt,
      title: 'Document Processing',
      description: 'Professional document digitization and conversion services with high accuracy.',
      features: [
        'PDF to Excel/Word',
        'Document Scanning',
        'OCR Processing',
        'File Conversion'
      ]
    },
    {
      icon: FaChartLine,
      title: 'Data Analysis',
      description: 'Transform raw data into meaningful insights with advanced analysis techniques.',
      features: [
        'Excel Reports',
        'Data Visualization',
        'Trend Analysis',
        'Statistical Analysis'
      ]
    },
    {
      icon: FaClipboardCheck,
      title: 'Quality Assurance',
      description: 'Thorough data validation and error checking to ensure highest quality standards.',
      features: [
        'Data Validation',
        'Error Detection',
        'Duplicate Removal',
        'Accuracy Verification'
      ]
    }
  ];

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Professional data management solutions tailored to your needs
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card glass-effect"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" />
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-bullet">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className="service-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
