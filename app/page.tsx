'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoverPage from '@/components/CoverPage';
import PersonalInfoPage from '@/components/PersonalInfoPage';
import ExperiencePage from '@/components/ExperiencePage';
import ProjectsPage from '@/components/ProjectsPage';
import SkillsPage from '@/components/SkillsPage';
import EducationPage from '@/components/EducationPage';
import BackCoverPage from '@/components/BackCoverPage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const pages = [
    <CoverPage key="cover" />,
    <PersonalInfoPage key="personal" />,
    <ExperiencePage key="experience" />,
    <ProjectsPage key="projects" />,
    <SkillsPage key="skills" />,
    <EducationPage key="education" />,
    <BackCoverPage key="back-cover" />
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(prev => prev - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  };

  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? -180 : 180,
      opacity: 0,
      x: direction > 0 ? 1000 : -1000,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
      x: direction > 0 ? -1000 : 1000,
    }),
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-7xl">
        {/* Notebook Container */}
        <div className="relative perspective-[2000px]">
          {/* Book Shadow */}
          <div className="absolute inset-0 blur-2xl opacity-40 bg-gradient-radial from-leather-600/30 to-transparent transform translate-y-8 scale-95" />
          
          {/* Main Notebook */}
          <div className="relative bg-leather-700 rounded-lg shadow-2xl overflow-hidden"
               style={{
                 boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(0, 0, 0, 0.4)'
               }}>
            
            {/* Book Spine Effect */}
            <div className="book-spine absolute left-0 top-0 bottom-0 w-12 z-10" />
            
            {/* Page Container */}
            <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    rotateY: { 
                      type: "spring", 
                      stiffness: 80, 
                      damping: 20,
                      duration: 0.8 
                    },
                    opacity: { duration: 0.4 },
                    x: { 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 25 
                    }
                  }}
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {pages[currentPage]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-8 z-20">
              {/* Previous Button */}
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`group flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === 0
                    ? 'opacity-30 cursor-not-allowed bg-leather-600/50'
                    : 'bg-leather-600/80 hover:bg-gold-accent hover:scale-105 hover:shadow-lg'
                }`}
              >
                <svg 
                  className="w-5 h-5 text-parchment-100 group-hover:text-leather-900 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-parchment-100 group-hover:text-leather-900 font-display font-semibold transition-colors">
                  Previous
                </span>
              </button>

              {/* Page Indicators */}
              <div className="flex items-center gap-2">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentPage
                        ? 'w-8 h-2 bg-gold-accent shadow-lg'
                        : 'w-2 h-2 bg-leather-400 hover:bg-leather-300 hover:scale-125'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextPage}
                disabled={currentPage === pages.length - 1}
                className={`group flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === pages.length - 1
                    ? 'opacity-30 cursor-not-allowed bg-leather-600/50'
                    : 'bg-leather-600/80 hover:bg-gold-accent hover:scale-105 hover:shadow-lg'
                }`}
              >
                <span className="text-parchment-100 group-hover:text-leather-900 font-display font-semibold transition-colors">
                  Next
                </span>
                <svg 
                  className="w-5 h-5 text-parchment-100 group-hover:text-leather-900 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Page Number */}
            <div className="absolute top-6 right-8 text-leather-400 font-display text-sm z-20">
              Page {currentPage + 1} / {pages.length}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
