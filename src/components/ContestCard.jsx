import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const ContestCard = ({ contest, index, onRegister, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass rounded-xl overflow-hidden group"
    >
      {/* Contest Poster */}
      <div className="relative h-32 overflow-hidden cursor-pointer" onClick={onToggle}>
        <img
          src={contest.poster}
          alt={contest.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        
        {/* Coming Soon Overlay for Contest */}
        {contest.comingSoon && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="bg-white/20 border-2 border-white/40 backdrop-blur-md px-3 py-1.5 rounded-lg"
            >
              <span className="text-white font-bold text-xs tracking-wider uppercase drop-shadow-lg">
                Coming Soon
              </span>
            </motion.div>
          </div>
        )}
        
        {/* Registrations Closed Overlay */}
        {contest.registerLink === "Closed" && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-red-500/80 border-2 border-red-400 backdrop-blur-md px-3 py-1.5 rounded-lg">
              <span className="text-white font-bold text-xs tracking-wider uppercase drop-shadow-lg">
                Registrations Closed
              </span>
            </div>
          </div>
        )}
        
        {/* Trophy Icon */}
        <div className="absolute top-3 right-3 p-2 rounded-lg bg-white/20 backdrop-blur-sm">
          <Trophy className="w-4 h-4 text-yellow-400" />
        </div>
      </div>

      {/* Contest Details */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 
            className="font-heading font-semibold text-lg text-slate-800 group-hover:text-primary transition-colors cursor-pointer"
            onClick={onToggle}
          >
            {contest.name}
          </h4>
          <button 
            onClick={onToggle}
            className="flex-shrink-0 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-slate-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-600" />
            )}
          </button>
        </div>
        
        {/* Description - Always visible (truncated) or full when expanded */}
        <p className="text-slate-600 text-xs mb-3">
          {isExpanded ? contest.description : contest.description.slice(0, 80) + (contest.description.length > 80 ? '...' : '')}
        </p>

        {/* Expanded Content - Rules */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-3 mt-3 border-t border-slate-200">
                <h5 className="font-heading font-semibold text-sm text-slate-800 mb-2">
                  Rules & Guidelines:
                </h5>
                <ul className="text-slate-600 text-xs space-y-1 mb-4">
                  {contest.rules.split('\n').map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      <span>{rule.replace(/^\d+\.\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Register Button */}
        {contest.registerLink && contest.registerLink !== "Closed" && contest.registerLink !== "Opening Soon" && (
          <a
            href={contest.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => onRegister && e.stopPropagation()}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Register Now
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ContestCard;

