"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Section;
