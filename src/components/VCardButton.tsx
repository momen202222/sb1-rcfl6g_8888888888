import React from 'react';
import { ArrowRight } from 'lucide-react';

export function VCardButton() {
  return (
    <a
      href="https://momen-vcard.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 block bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-4 text-center transition-all duration-300 group hover:shadow-lg hover:scale-[1.02]"
    >
      <span className="flex items-center justify-center gap-2 font-medium">
        View My Digital Business Card
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
    </a>
  );
}