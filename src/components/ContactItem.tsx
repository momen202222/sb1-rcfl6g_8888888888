import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isMap?: boolean;
}

export function ContactItem({ icon, label, href, isMap }: ContactItemProps) {
  return (
    <motion.a
      href={href}
      target={isMap ? "_blank" : undefined}
      rel={isMap ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group"
      whileHover={{ x: 5 }}
    >
      <div className="p-2 bg-white/10 rounded-lg">
        {icon}
      </div>
      <span className="flex-1 text-left">{label}</span>
      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}