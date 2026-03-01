import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Trophy } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import ContestCard from '../components/ContestCard';
import GlassCard from '../components/GlassCard';
import { events } from '../data/content';

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

const EventDetails = ({ event: propEvent }) => {
  const { id } = useParams();
  const event = propEvent || events.find(e => e.id === parseInt(id));
  const [expandedContestId, setExpandedContestId] = useState(null);

  const handleContestToggle = (contestId) => {
    setExpandedContestId(expandedContestId === contestId ? null : contestId);
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-pattern flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 text-lg mb-4">Event not found</p>
          <Link 
            to="/events" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pattern">
      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <MouseFollower speed={1.5} className="absolute inset-0">
          <img
            src={event.banner}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </MouseFollower>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        {/* Back Button - Positioned at top */}
        <Link
          to="/events"
          className="absolute top-4 left-4 md:top-8 md:left-8 z-10 flex items-center gap-2 px-4 py-2 rounded-xl glass text-white hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Events
        </Link>

        {/* Event Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white/30">
                  <img
                    src={event.icon}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                    {event.name}
                  </h1>
                  <p className="text-white/70 text-sm mt-1">
                    {event.contests?.length || 0} Contests Available
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Description */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-slate-800 mb-4">
                About This Event
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>February 2026</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Team & Individual</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span>Exciting Prizes</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contests Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-3xl text-slate-800 mb-4">
                Contests
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              <p className="text-slate-600 mt-4">
                Participate in these exciting contests and showcase your talent
              </p>
            </div>

            {event.contests && event.contests.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.contests.map((contest, index) => (
                  <ContestCard
                    key={contest.id}
                    contest={contest}
                    index={index}
                    isExpanded={expandedContestId === contest.id}
                    onToggle={() => handleContestToggle(contest.id)}
                  />
                ))}
              </div>
            ) : (
              <GlassCard className="text-center py-12">
                <p className="text-slate-500">No contests available for this event yet.</p>
              </GlassCard>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;

