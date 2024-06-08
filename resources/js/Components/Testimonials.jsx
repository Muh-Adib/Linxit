import React from 'react';
import { motion } from 'framer-motion';

function Testimonials({ testimonials }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="bg-gray-100 dark:bg-gray-900 py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-500 dark:text-white mb-8">
          Apa Kata Pengguna Linxit.id?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image} // Ganti dengan URL gambar profil
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <p className="text-gray-600 dark:text-gray-400 font-bold">
                  {testimonial.author}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;