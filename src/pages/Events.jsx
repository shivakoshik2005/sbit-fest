import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { events as eventsData } from '../data/content';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

// Mouse follower component
const MouseFollower = ({ children, className = '', speed = 1 }) => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      animate={{
        x: mousePosition.x * 20 * speed,
        y: mousePosition.y * 20 * speed,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Events = ({ onEventClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-pattern">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <MouseFollower speed={2} className="absolute top-0 right-0 w-96 h-96">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent rounded-full blur-3xl"
            />
          </MouseFollower>
          <MouseFollower speed={1.5} className="absolute bottom-0 left-0 w-96 h-96">
            <motion.div
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="w-full h-full bg-gradient-to-tl from-accent/20 via-primary/15 to-transparent rounded-full blur-3xl"
            />
          </MouseFollower>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-black text-5xl sm:text-6xl gradient-text mb-4">
              Events
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
              Discover exciting events and competitions at AAROHAN 2026. 
              Click on any event to explore the contests and register.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl glass border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-700 placeholder-slate-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  onClick={() => onEventClick(event)}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-slate-500 text-lg">No events found matching "{searchTerm}"</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;

