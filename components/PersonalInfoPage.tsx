'use client';

import { motion } from 'framer-motion';

export default function PersonalInfoPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="paper-texture h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] p-8 md:p-12 lg:p-16 relative">
      <div className="notebook-margin" />

      <motion.div
        className="ml-8 md:ml-12 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Page Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-leather-800 mb-2">
            Professional Profile
          </h2>
          <div className="h-1 w-24 bg-gold-accent" />
        </motion.div>

        {/* Career Objective */}
        <motion.section variants={itemVariants} className="mb-10">
          <h3 className="font-display text-2xl font-semibold text-leather-700 mb-4 flex items-center gap-2">
            <span className="text-gold-accent">◆</span>
            Career Objective
          </h3>
          <p className="font-body text-lg text-leather-900 leading-relaxed text-justify ink-text">
            Passionate Full Stack Developer seeking challenging opportunities in an innovative organization
            to leverage my expertise in MERN & MEAN stack, Next.js, and NestJS technologies. Committed to delivering
            high-quality, scalable solutions while continuously expanding my technical skills and contributing
            to organizational excellence through creative problem-solving and collaborative teamwork.
          </p>
        </motion.section>

        {/* Personal Details */}
        <motion.section variants={itemVariants} className="mb-10">
          <h3 className="font-display text-2xl font-semibold text-leather-700 mb-6 flex items-center gap-2">
            <span className="text-gold-accent">◆</span>
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body text-base">
            <div className="flex items-start gap-3">
              <span className="text-gold-accent mt-1">▸</span>
              <div>
                <p className="text-leather-600 font-semibold">Date of Birth</p>
                <p className="text-leather-900 ink-text">July 01, 1999</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold-accent mt-1">▸</span>
              <div>
                <p className="text-leather-600 font-semibold">Mobile</p>
                <p className="text-leather-900 ink-text">+91 8188898587</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold-accent mt-1">▸</span>
              <div>
                <p className="text-leather-600 font-semibold">Email</p>
                <p className="text-leather-900 ink-text break-all">pradumshukla1133@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold-accent mt-1">▸</span>
              <div>
                <p className="text-leather-600 font-semibold">Languages</p>
                <p className="text-leather-900 ink-text">Hindi, English</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:col-span-2">
              <span className="text-gold-accent mt-1">▸</span>
              <div>
                <p className="text-leather-600 font-semibold">Address</p>
                <p className="text-leather-900 ink-text">
                  106 Lal Dwara Colony, Yamunanagar, Haryana, 153001
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Skills */}
        <motion.section variants={itemVariants}>
          <h3 className="font-display text-2xl font-semibold text-leather-700 mb-6 flex items-center gap-2">
            <span className="text-gold-accent">◆</span>
            Key Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '🎯', title: 'Active Listening', desc: 'Understanding requirements precisely' },
              { icon: '⚡', title: 'Decision Making', desc: 'Quick and effective problem resolution' },
              { icon: '💡', title: 'Problem Solving', desc: 'Creative solutions to complex challenges' },
              { icon: '👥', title: 'Leadership', desc: 'Guiding teams towards success' }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-parchment-200/30 border border-leather-200"
                whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(125, 96, 73, 0.15)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <p className="font-display font-semibold text-leather-800">{skill.title}</p>
                  <p className="font-body text-sm text-leather-600">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests */}
        <motion.section variants={itemVariants} className="mt-10">
          <h3 className="font-display text-2xl font-semibold text-leather-700 mb-4 flex items-center gap-2">
            <span className="text-gold-accent">◆</span>
            Interests
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gold-accent/20 border border-gold-accent/40 rounded-full font-body text-leather-800">
              🏏 Cricket Enthusiast
            </span>
            <span className="px-4 py-2 bg-gold-accent/20 border border-gold-accent/40 rounded-full font-body text-leather-800">
              💻 Competitive Programming
            </span>
            <span className="px-4 py-2 bg-gold-accent/20 border border-gold-accent/40 rounded-full font-body text-leather-800">
              📚 Continuous Learning
            </span>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
