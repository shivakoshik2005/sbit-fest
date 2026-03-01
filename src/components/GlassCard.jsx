import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = false,
  onClick,
  delay = 0 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current && isHovered) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setMousePosition({ x, y });
      }
    };

    const element = cardRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isHovered]);

  const Component = onClick ? motion.button : motion.div;
  
  return (
    <Component
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotateX: isHovered ? mousePosition.y * 5 : 0,
        rotateY: isHovered ? -mousePosition.x * 5 : 0,
      }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { 
        scale: 1.02,
        y: -5,
        boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)'
      } : {}}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        glass rounded-2xl p-6 
        ${hover ? 'cursor-pointer' : ''} 
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {children}
    </Component>
  );
};

export default GlassCard;

