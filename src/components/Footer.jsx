import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { collegeInfo, contactInfo } from '../data/content';
import GlassCard from './GlassCard';

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="bg-pattern py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <GlassCard className="text-center md:text-left">
              <h3 className="font-heading font-bold text-xl gradient-text mb-4">
                {collegeInfo.festName} {collegeInfo.year}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The annual tech and cultural fest of {collegeInfo.name}. 
                Join us for an unforgettable experience of innovation and creativity.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href={contactInfo.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/30 hover:bg-primary hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={contactInfo.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/30 hover:bg-primary hover:text-white transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={contactInfo.social.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/30 hover:bg-primary hover:text-white transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </GlassCard>

            {/* Quick Links */}
            <GlassCard className="text-center">
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-4">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2">
                <a href="/" className="text-slate-600 hover:text-primary transition-colors text-sm">
                  Home
                </a>
                <a href="/events" className="text-slate-600 hover:text-primary transition-colors text-sm">
                  Events
                </a>
                <a href="/gallery" className="text-slate-600 hover:text-primary transition-colors text-sm">
                  Gallery
                </a>
              </div>
            </GlassCard>

            {/* Contact Info */}
            <GlassCard className="text-center md:text-right">
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-4">
                Contact Us
              </h3>
              <div className="flex flex-col gap-3 items-center md:items-end">
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {contactInfo.email}
                </a>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
                <span className="flex items-center gap-2 text-slate-600 text-sm">
                {contactInfo.address}
                </span>
              </div>
            </GlassCard>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-slate-200/50">
          <p className="text-center text-slate-500 text-sm">
            Designed with ❤️ by SPARK INNOVATION CENTRE, SBIT.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

