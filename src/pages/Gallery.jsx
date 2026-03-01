import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Clock, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';

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

const Gallery = () => {
  return (
    <div className="min-h-screen bg-pattern">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <MouseFollower speed={2} className="absolute top-1/4 right-1/4 w-64 h-64">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/15 to-transparent rounded-full blur-3xl"
            />
          </MouseFollower>
          <MouseFollower speed={1.5} className="absolute bottom-1/4 left-1/4 w-80 h-80">
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [180, 90, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-tl from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl"
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
              Gallery
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Relive the memories from previous editions of AAROHAN
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="py-16 text-center">
              {/* Animated Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-8"
              >
                <Camera className="w-12 h-12 text-white" />
              </motion.div>

              {/* Coming Soon Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="font-heading font-bold text-4xl gradient-text mb-4">
                  Coming Soon
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-slate-600 text-lg max-w-lg mx-auto mb-8"
              >
                We are curating the best moments from AAROHAN 2026. 
                Stay tuned for an amazing gallery of photos and videos from the fest.
              </motion.p>

              {/* Features Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/30">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-slate-700 text-sm">Updates Coming Soon</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/30">
                  <Sparkles className="w-5 h-5 text-secondary" />
                  <span className="text-slate-700 text-sm">Photo Gallery</span>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mt-12 flex justify-center gap-2"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [20, 40, 20] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                    className="w-2 bg-gradient-to-t from-primary to-accent rounded-full"
                    style={{ height: 20 + i * 5 }}
                  />
                ))}
              </motion.div>
            </GlassCard>
          </motion.div>

          {/* Previous Highlights Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <h3 className="font-heading font-bold text-xl text-slate-800 text-center mb-6">
              Previous Edition Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
                "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80",
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
                "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80"
              ].map((url, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="relative aspect-square rounded-xl overflow-hidden"
                >
                  <img
                    src={url}
                    alt={`Highlight ${index + 1}`}
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

