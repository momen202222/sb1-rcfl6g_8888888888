import React from 'react';
import { ProfileSection } from './components/ProfileSection';
import { ContactSection } from './components/ContactSection';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 p-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
      >
        <ProfileSection />
        <ContactSection />
      </motion.div>
    </div>
  );
}

export default App;