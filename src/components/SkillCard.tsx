import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
}

export function SkillCard({ icon, title }: SkillCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all duration-300">
      <div className="text-white mb-2">
        {icon}
      </div>
      <p className="text-xs text-white font-medium">{title}</p>
    </div>
  );
}