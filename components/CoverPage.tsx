'use client';

import { motion } from 'framer-motion';

export default function CoverPage() {
  return (
    <div className="paper-texture h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-gold-accent opacity-40" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-gold-accent opacity-40" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-gold-accent opacity-40" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-gold-accent opacity-40" />

      {/* Main content */}
      <motion.div
        className="text-center space-y-8 max-w-3xl z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Decorative line */}
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Name */}
        <motion.h1
          className="font-display text-6xl md:text-7xl lg:text-8xl font-bold gold-foil tracking-wider"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Praddumn Kumar
        </motion.h1>

        {/* Title */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-leather-700 tracking-wide">
            Full Stack Developer
          </h2>
          <p className="font-body text-lg md:text-xl text-leather-600 italic">
            MERN & MEAN Stack Specialist | Next.js | NestJS
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />

        {/* Contact info preview */}
        <motion.div
          className="space-y-2 text-leather-600 font-body text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            pradumshukla1133@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +91 8188898587
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Yamunanagar, Haryana, India
          </p>
        </motion.div>

        {/* Vintage stamp effect */}
        <motion.div
          className="inline-block vintage-stamp mx-auto mt-8"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: -2 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <p className="font-display text-leather-700 font-semibold text-sm tracking-widest">
            {/* 2+ YEARS EXPERIENCE */}
            {(() => {
              const start = new Date('2023-03-01').getTime();
              const now = Date.now();
              const diff = new Date(now - start);

              return `${diff.getUTCFullYear() - 1970}y ${diff.getUTCMonth()}m EXPERIENCE`;
            })()}

          </p>
        </motion.div>

        {/* Instruction text */}
        <motion.p
          className="text-leather-500 text-sm font-body italic mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          Turn the page to explore my professional journey
        </motion.p>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold-accent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-leather-400 blur-3xl" />
      </div>
    </div>
  );
}
