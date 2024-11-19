import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SocialLinkProps {
  icon: React.ReactNode;
  title: string;
  username: string;
  href: string;
}

export function SocialLink({ icon, title, username, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/10 hover:bg-white/20 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 bg-white/10 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h2 className="text-white font-medium">{title}</h2>
          <p className="text-blue-100 text-sm opacity-80">{username}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-white opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </div>
    </a>
  );
}