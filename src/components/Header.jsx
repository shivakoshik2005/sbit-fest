import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { collegeInfo } from '../data/content';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Badminton', path: '/badminton' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass py-2 shadow-lg' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Logos and College Name */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* SBIT Logo */}
            <Link to="/" className="group flex-shrink-0 ml-0">
              <img src="https://i.ibb.co/pjQDkHtt/sbit-logo.png" 
              alt="SBIT Logo" 
              className="w-16 h-16 sm:w-16 sm:h-16 object-contain bg-white/5 rounded-lg" 
              />
            </Link>
            
            {/* College Text */}
            <div className="hidden sm:block leading-tight">
              <h1 className="font-heading font-bold text-lg sm:text-xl text-slate-800">
                Swarna Bharathi
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Institute of Science and Technology<br />(An Autonomous Institution)
              </p>
            </div>

            {/* Spark Innovation Centre Logo */}
            <Link to="/" className="group flex-shrink-0 ">
              <img 
                src="https://i.ibb.co/S7vGc0qy/spark-logo.png" 
                alt="Spark Innovation Centre" 
                className="w-16 h-16 sm:w-16 sm:h-16 rounded-lg object-contain bg-white/5 shadow-lg group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Center: Fest Name */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-max">
            <Link to="/">
              <h2 className="font-heading font-bold text-2xl gradient-text tracking-wide whitespace-nowrap">
                {collegeInfo.festName} {collegeInfo.year}
              </h2>
            </Link>
          </div>

          {/* Right: Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-5 py-2.5 rounded-xl font-heading font-medium text-sm transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'text-slate-700 hover:bg-white/30 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass hover:bg-white/30 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass rounded-2xl p-4"
          >
            {/* Mobile Logos */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 py-3 border-b border-slate-200 mb-3">
              <img 
                src="https://i.ibb.co/pjQDkHtt/sbit-logo.png" 
                alt="SBIT Logo" 
                className="w-16 h-16 sm:w-16 sm:h-16 object-contain bg-white/5 rounded-lg"
              />
              <img 
                src="https://i.ibb.co/S7vGc0qy/spark-logo.png" 
                alt="Spark Innovation Centre" 
                className="w-16 h-16 sm:w-16 sm:h-16 object-contain bg-white/5 rounded-lg"
              />
            </div>

            {/* Mobile College Name */}
            <div className="text-center py-2 border-b border-slate-200 mb-3">
              <h1 className="font-heading font-bold text-lg text-slate-800">
                Swarna Bharathi
              </h1>
              <p className="text-xs text-slate-500">
                Institute of Science and Technology
              </p>
            </div>

            {/* Mobile Fest Name */}
            <div className="text-center py-2 border-b border-slate-200 mb-3">
              <h2 className="font-heading font-bold text-xl gradient-text">
                {collegeInfo.festName} {collegeInfo.year}
              </h2>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-xl font-heading font-medium text-center transition-all ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'text-slate-700 hover:bg-white/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;

