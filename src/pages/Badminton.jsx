import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Trophy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import ContestCard from '../components/ContestCard';
import GlassCard from '../components/GlassCard';

// Mouse follower component (copied from EventDetails)
const MouseFollower = ({ children, className = '', speed = 1 }) => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        y = (e.clientY - rect.top - rect.height / 2) / rect.height;
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

// Combined Badminton data (extracted from content.js)
const badmintonEvent = {
  id: 'badminton',
  name: 'Badminton Tournament - Boys & Girls',
  banner: 'https://i.ibb.co/XxRtf7bt/image.png', // Men's Sports banner
  icon: 'https://i.ibb.co/x8LfgXV0/b6fa40ce98bfbe62bc3c61d57ac5e070.jpg', // Men's Sports icon
  description: 'Unleash your agility and skill in this fast-paced badminton tournament. Compete in singles or doubles format for boys and girls categories. Bring your own racket and dominate the court!',
  contests: [
    {
      id: 1,
      name: 'Badminton Boys',
      poster: 'https://i.ibb.co/vCQktVg2/image.png',
      description: 'Unleash your agility and skill in this fast-paced badminton tournament. Compete in singles or doubles and aim for victory.',
      rules: '1. Singles and doubles\\n2. Best of 3 games\\n3. 21 points each game\\n4. Knockout format\\n5. Bring own racket',
      registerLink: 'Closed'
    },
    {
      id: 2,
      name: 'Badminton Girls',
      poster: 'https://i.ibb.co/YT8myv2V/image.png',
      description: 'Unleash your agility and skill in this fast-paced badminton tournament. Compete in singles or doubles and aim for victory.',
      rules: '1. Singles and doubles\\n2. Best of 3 games\\n3. 21 points each game\\n4. Knockout format\\n5. Bring own racket',
      registerLink: 'Closed'
    }
  ]
};

const Badminton = () => {
  const navigate = useNavigate();
  const [expandedContestId, setExpandedContestId] = useState(null);

  const handleContestToggle = (contestId) => {
    setExpandedContestId(expandedContestId === contestId ? null : contestId);
  };

  return (
    <div className="min-h-screen bg-pattern">
      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <MouseFollower speed={1.5} className="absolute inset-0">
          <img
            src={badmintonEvent.banner}
            alt={badmintonEvent.name}
            className="w-full h-full object-cover"
          />
        </MouseFollower>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        {/* Back Button */}
        <Link
          to="/events"
          className="absolute top-4 left-4 md:top-8 md:left-8 z-10 flex items-center gap-2 px-4 py-2 rounded-xl glass text-white hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Events
        </Link>

        {/* Title */}
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
                    src={badmintonEvent.icon}
                    alt={badmintonEvent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                    {badmintonEvent.name}
                  </h1>
                  <p className="text-white/70 text-sm mt-1">
                    {badmintonEvent.contests.length} Contests Available
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-slate-800 mb-4">
                About Badminton Tournament
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {badmintonEvent.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>February 2026</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Singles & Doubles</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span>Exciting Prizes</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contests */}
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
                Choose your category and register now!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {badmintonEvent.contests.map((contest, index) => (
                <ContestCard
                  key={contest.id}
                  contest={contest}
                  index={index}
                  isExpanded={expandedContestId === contest.id}
                  onToggle={() => handleContestToggle(contest.id)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Badminton;

