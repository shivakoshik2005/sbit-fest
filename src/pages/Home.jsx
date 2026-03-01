import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutContent, collegeInfo } from '../data/content';
import GlassCard from '../components/GlassCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

const Home = () => {
  const highlights = aboutContent.aboutCollege.highlights;

  return (
    <div className="min-h-screen bg-pattern">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <MouseFollower speed={2} className="absolute -top-1/2 -left-1/2 w-full h-full">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-full blur-3xl" />
          </MouseFollower>
          <MouseFollower speed={1.5} className="absolute -bottom-1/2 -right-1/2 w-full h-full">
            <div className="w-full h-full bg-gradient-to-tl from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl" />
          </MouseFollower>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Fest Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl gradient-text mb-4">
              {aboutContent.hero.title}
            </h1>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
              {/* SBIT's - Orangish Red Gradient */}
              <span className="block bg-gradient-to-r from-orange-800 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                {aboutContent.hero.titlePart1}
              </span>

              {/* AAROHAN 2026 - Your existing/standard color */}
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {aboutContent.hero.titlePart2}
              </span>
            </h1>
            <p className="font-heading font-semibold text-2xl sm:text-3xl text-slate-700 mb-6">
              {aboutContent.hero.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-600 text-lg mb-10"
          >
            {aboutContent.hero.description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/events"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-heading font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              {aboutContent.hero.ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Simple Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex justify-center pt-2">
            <div className="w-1 h-3 bg-slate-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About College Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-slate-800 mb-4">
              {aboutContent.aboutCollege.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="h-full">
                <h3 className="font-heading font-bold text-2xl text-slate-800 mb-4">
                  {collegeInfo.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {aboutContent.aboutCollege.description}
                </p>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                      <span className="text-slate-700">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 glass rounded-2xl p-2">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80"
                  alt="SBIT Campus"
                  className="rounded-xl w-full h-80 object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tl from-accent to-primary rounded-2xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Fest Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-slate-800 mb-4">
              {aboutContent.aboutFest.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
                  alt="AAROHAN Fest"
                  className="rounded-xl w-full h-48 object-cover mb-6"
                />
                <p className="text-slate-600 leading-relaxed">
                  {aboutContent.aboutFest.description}
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="h-full gradient-border">
                <div className="py-8 text-center">
                  <h3 className="font-heading font-bold text-3xl gradient-text mb-4">
                    {collegeInfo.festName} {collegeInfo.year}
                  </h3>
                  <p className="text-slate-600 leading-relaxed px-6">
                    {aboutContent.aboutFest.description2}
                  </p>
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:scale-105 transition-all"
                  >
                    Explore Events
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

