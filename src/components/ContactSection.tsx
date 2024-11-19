import React from 'react';
import { ContactItem } from './ContactItem';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="space-y-4">
      <ContactItem 
        icon={<Phone className="w-5 h-5" />}
        label="+20 106 078 2406"
        href="tel:+201060782406"
      />
      <ContactItem 
        icon={<Mail className="w-5 h-5" />}
        label="momensalman78@gmail.com"
        href="mailto:momensalman78@gmail.com"
      />
      <ContactItem 
        icon={<MapPin className="w-5 h-5" />}
        label="Qena, Egypt"
        href="https://www.google.com/maps/search/?api=1&query=Qena,+Egypt"
        isMap
      />
      <ContactItem 
        icon={<Globe className="w-5 h-5" />}
        label="momen-salman.netlify.app"
        href="https://momen-salman.netlify.app/"
      />
    </div>
  );
}