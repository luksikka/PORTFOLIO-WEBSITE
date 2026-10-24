import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaDatabase, FaFileAlt, FaChartBar, FaCalculator, FaFileInvoiceDollar, FaBuilding, FaBriefcase } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Business Strategy & Growth Consulting',
      category: 'consulting',
      description: 'Provided strategic business consulting for 25+ companies, helping them achieve 40% revenue growth through operational optimization and market expansion strategies.',
      technologies: ['Business Analysis', 'Strategic Planning', 'Market Research', 'Financial Modeling'],
      stats: { records: '25+', accuracy: 'Companies', duration: '2 years' },
      icon: FaBriefcase,
    },
    {
      id: 2,
      title: 'Financial Restructuring Advisory',
      category: 'consulting',
      description: 'Advised 15+ businesses on financial restructuring, cost optimization, and profitability improvement, resulting in average 30% cost reduction.',
      technologies: ['Financial Analysis', 'Cost Management', 'Budget Planning', 'Cash Flow'],
      stats: { records: '15+', accuracy: 'Clients', duration: '18 months' },
      icon: FaBriefcase,
    },
    {
      id: 3,
      title: 'Corporate Tax Filing & Documentation',
      category: 'tax',
      description: 'Managed complete tax documentation and filing for 50+ corporate clients with 100% compliance rate.',
      technologies: ['Tax Software', 'Excel', 'GST Portal', 'E-Filing'],
      stats: { records: '5K+', accuracy: '100%', duration: '6 months' },
      icon: FaFileInvoiceDollar,
    },
    {
      id: 4,
      title: 'GST Returns & Reconciliation',
      category: 'tax',
      description: 'Prepared and filed GST returns for multiple businesses, ensuring timely compliance and accurate reporting.',
      technologies: ['GST Portal', 'Excel', 'Data Validation', 'E-Way Bills'],
      stats: { records: '10K+', accuracy: '99.99%', duration: '1 year' },
      icon: FaFileInvoiceDollar,
    },
    {
      id: 5,
      title: 'Financial Audit Data Processing',
      category: 'audit',
      description: 'Processed and verified 25,000+ financial transactions for annual audit with zero discrepancies.',
      technologies: ['Audit Software', 'Excel', 'Tally', 'Compliance Check'],
      stats: { records: '25K+', accuracy: '100%', duration: '2 months' },
      icon: FaCalculator,
    },
    {
      id: 6,
      title: 'Internal Audit Support Services',
      category: 'audit',
      description: 'Supported internal audit team with data extraction, verification, and report generation for compliance.',
      technologies: ['Audit Tools', 'SQL', 'Excel', 'Report Generation'],
      stats: { records: '15K+', accuracy: '99.98%', duration: '3 months' },
      icon: FaCalculator,
    },
    {
      id: 7,
      title: 'Company Registration Services',
      category: 'registration',
      description: 'Handled complete documentation and data processing for 100+ company registrations including Private Ltd, LLP, and Partnership firms.',
      technologies: ['MCA Portal', 'Digital Signature', 'Document Processing', 'Data Entry'],
      stats: { records: '2K+', accuracy: '100%', duration: '1 year' },
      icon: FaBuilding,
    },
    {
      id: 8,
      title: 'Business License & Permits',
      category: 'registration',
      description: 'Assisted in obtaining various business licenses, permits, and regulatory approvals for multiple companies.',
      technologies: ['Government Portals', 'Document Verification', 'Application Processing', 'Compliance'],
      stats: { records: '1K+', accuracy: '100%', duration: '8 months' },
      icon: FaBuilding,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'consulting', label: 'Business Consulting' },
    { id: 'tax', label: 'Tax' },
    { id: 'audit', label: 'Audit' },
    { id: 'registration', label: 'Registration' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcase of successful data management projects
          </p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass-effect"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-icon-container">
                <project.icon className="project-main-icon" />
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-stats">
                <div className="stat">
                  <span className="stat-value">{project.stats.records}</span>
                  <span className="stat-label">Records</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{project.stats.accuracy}</span>
                  <span className="stat-label">Accuracy</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{project.stats.duration}</span>
                  <span className="stat-label">Duration</span>
                </div>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <motion.button
                className="view-project"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details <FaExternalLinkAlt />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
