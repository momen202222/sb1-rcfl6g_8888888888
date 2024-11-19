import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function ProfileSection() {
  return (
    <div className="text-center">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="relative w-40 h-40 mx-auto mb-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        <img
          src="/profile.jpg"
          alt="Momen Salman"
          className="relative w-full h-full object-cover rounded-full border-4 border-white/20"
        />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold text-white mb-2"
      >
        Momen Salman
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-blue-100 mb-6"
      >
        Computer Engineering Student
      </motion.p>

      <motion.a
        href="/Momen Salman.vcf"
        download
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium gap-2 hover:shadow-lg transition-all duration-300 mb-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-5 h-5" />
        Download vCard
      </motion.a>
    </div>
  );
}