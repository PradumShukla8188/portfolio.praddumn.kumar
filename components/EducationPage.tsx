'use client';

import { motion } from 'framer-motion';

export default function EducationPage() {
  const education = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Maharaja Agrasen College, Jagadhari",
      location: "Yamuna Nagar, Haryana",
      duration: "2020 - 2023",
      icon: "🎓",
      highlights: [
        "Comprehensive computer science fundamentals",
        "Programming and software development",
        "Database management and web technologies",
        "Project-based learning approach"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Janta Inter College",
      location: "Yamunanagar, Haryana",
      duration: "2016 - 2017",
      icon: "📚",
      highlights: [
        "Strong foundation in science and mathematics",
        "Computer science fundamentals",
        "Academic excellence"
      ]
    },
    {
      degree: "High School (10th Grade)",
      institution: "Janta Inter College",
      location: "Yamunanagar, Haryana",
      duration: "2014 - 2015",
      icon: "🏫",
      highlights: [
        "Core subjects foundation",
        "Early introduction to computers",
        "Academic achievements"
      ]
    }
  ];

  const achievements = [
    {
      title: "HackerRank Participation",
      description: "Active participant in coding challenges",
      icon: "🏆"
    },
    {
      title: "Full Stack Development",
      description: "Expertise across frontend and backend",
      icon: "💡"
    },
    {
      title: "Multiple Certifications",
      description: "Continuous professional development",
      icon: "📜"
    },
    {
      title: "Team Leadership",
      description: "Led multiple successful projects",
      icon: "👥"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="paper-texture h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] p-8 md:p-12 lg:p-16 relative overflow-y-auto">
      <div className="notebook-margin" />
      
      <motion.div 
        className="ml-8 md:ml-12 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Page Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-leather-800 mb-2">
            Education & Achievements
          </h2>
          <div className="h-1 w-24 bg-gold-accent" />
          <p className="font-body text-leather-600 mt-3 italic">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-6 mb-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-6 border-l-2 border-gold-accent/30 last:border-l-0 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold-accent border-4 border-parchment-100" />
              
              <motion.div
                className="bg-parchment-200/50 rounded-lg p-6 border border-leather-200 shadow-sm"
                whileHover={{ 
                  scale: 1.01, 
                  boxShadow: '0 8px 16px rgba(125, 96, 73, 0.15)' 
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{edu.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-leather-800 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="font-body text-leather-700 font-semibold">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-leather-600 mt-1">
                      <span>{edu.location}</span>
                      <span className="text-gold-accent">•</span>
                      <span className="italic">{edu.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mt-4">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-gold-accent text-sm mt-1">▸</span>
                      <p className="font-body text-leather-900 text-sm ink-text">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <motion.div variants={itemVariants}>
          <h3 className="font-display text-2xl font-bold text-leather-800 mb-4 flex items-center gap-2">
            <span className="text-gold-accent">◆</span>
            Notable Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="p-5 bg-gold-accent/10 rounded-lg border border-gold-accent/30"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 6px 16px rgba(212, 175, 55, 0.2)'
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div>
                    <h4 className="font-display font-bold text-leather-800 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="font-body text-sm text-leather-700">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Family Background */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 p-6 bg-parchment-200/50 rounded-lg border border-leather-200"
        >
          <h3 className="font-display text-xl font-bold text-leather-800 mb-4 flex items-center gap-2">
            <span className="text-gold-accent">◆</span>
            Personal Background
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body text-sm">
            <div className="flex items-start gap-2">
              <span className="text-gold-accent mt-1">▸</span>
              <div>
                <p className="font-semibold text-leather-700">Father's Name</p>
                <p className="text-leather-900 ink-text">Mr. Shivshankar (Farmer)</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gold-accent mt-1">▸</span>
              <div>
                <p className="font-semibold text-leather-700">Mother's Name</p>
                <p className="text-leather-900 ink-text">Miss Shivmati (Housewife)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Signature Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
        >
          <div>
            <p className="font-body text-sm text-leather-600 mb-1">Date</p>
            <p className="font-body text-leather-900 font-semibold">January 05, 2026</p>
          </div>
          <div className="text-right">
            <div className="mb-2">
              <p className="handwritten text-3xl text-leather-800">Praddumn Kumar</p>
            </div>
            <p className="font-body text-sm text-leather-600">Signature</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
