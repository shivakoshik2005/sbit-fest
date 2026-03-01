import { useState, useEffect, useRef } from 'react';

export const useMouseAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
      setIsInitialized(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { mousePosition, isInitialized };
};

export const MouseFollower = ({ children, className = '' }) => {
  const { mousePosition, isInitialized } = useMouseAnimation();
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current && isInitialized) {
      const moveX = mousePosition.x * 20; // Adjust sensitivity
      const moveY = mousePosition.y * 20;
      elementRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  }, [mousePosition, isInitialized]);

  return (
    <div ref={elementRef} className={`transition-transform duration-300 ease-out ${className}`}>
      {children}
    </div>
  );
};

