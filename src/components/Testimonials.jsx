import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp Solutions',
      image: 'SJ',
      rating: 5,
      text: 'Mr. Shalashian transformed our data management process. His attention to detail and efficiency is remarkable. The accuracy rate exceeded our expectations.',
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, DataFlow Inc',
      image: 'MC',
      rating: 5,
      text: 'Working with Shalashian was a game-changer for our company. He completed a massive data migration project ahead of schedule with zero errors.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, Healthcare Plus',
      image: 'ER',
      rating: 5,
      text: 'Professional, reliable, and incredibly skilled. Shalashian handled our sensitive healthcare data with utmost care and delivered exceptional results.',
    },
    {
      name: 'David Thompson',
      role: 'Finance Director, GlobalTrade',
      image: 'DT',
      rating: 5,
      text: 'Outstanding work on our financial data processing. His expertise in Excel and database management saved us countless hours and resources.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Project Manager, E-Commerce Hub',
      image: 'LA',
      rating: 5,
      text: 'Shalashian is the best data entry operator we have worked with. His speed, accuracy, and professionalism are unmatched in the industry.',
    },
    {
      name: 'James Wilson',
      role: 'IT Director, InnovateTech',
      image: 'JW',
      rating: 5,
      text: 'Highly recommend Shalashian for any data management needs. His technical skills and dedication to quality are truly impressive.',
    },
  ];

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What clients say about my work
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card glass-effect"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <FaQuoteLeft className="quote-icon" />
              
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="testimonial-author">
                  <div className="author-image">
                    <div className="avatar gradient-text">{testimonial.image}</div>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
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

export default Testimonials;
