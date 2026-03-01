import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const EventCard = ({ event, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(99, 102, 241, 0.25)' }}
      onClick={onClick}
      className="glass rounded-2xl overflow-hidden cursor-pointer group"
    >
      {/* Event Banner */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.banner || event.image}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        
        {/* Event Icon */}
        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-xl overflow-hidden border-2 border-white/30 shadow-lg">
          <img
            src={event.icon}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Event Details */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-slate-800 mb-2 group-hover:text-primary transition-colors">
          {event.name}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
          {event.description}
        </p>
        
        {/* Contests Count */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">
            {event.contests?.length || 0} Contests
          </span>
          <span className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
            View Details
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default EventCard;

