

import React from 'react';
import { motion } from 'framer-motion';

const Wedding_photos = ({photoArray}) => {

  const cardVariants = {
    
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    },
  };

  return (
    <div className="p-4 md:p-8">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {photoArray.map((photo, index) => (
          <motion.div
            key={index}
            
            initial="hidden"
            
            whileInView="visible"
            
            variants={cardVariants}
            
            viewport={{ 
                once: true,    
                amount: 0.3    
            }} 
            
            transition={{ delay: index * 0.1 }}
            
            className="mb-6 break-inside-avoid-column rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition duration-300 bg-gray-100"
          >
            <img
              src={photo}
              alt={`Wedding Photo ${index + 1}`} 
              className="w-full h-auto transition duration-500 transform group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wedding_photos;
