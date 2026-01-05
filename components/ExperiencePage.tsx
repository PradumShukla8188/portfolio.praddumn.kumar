'use client';

import { motion } from 'framer-motion';

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Shine Dezign Infonet Pvt. Ltd.",
      role: "MEAN/MERN Full Stack Developer",
      duration: "3+ Years",
      technologies: ["Angular", "React", "Node.js", "MongoDB", "Express"],
      achievements: [
        "Developed full-stack applications using MEAN and MERN stacks",
        "Led development of multiple client projects from conception to deployment",
        "Implemented responsive UI components using Angular and React",
        "Integrated third-party APIs and managed database operations"
      ]
    },
    {
      company: "Prologic Technology Pvt. Ltd.",
      role: "PHP Developer",
      duration: "6 Months",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
      achievements: [
        "Developed web applications using PHP and Laravel framework",
        "Created and maintained MySQL database structures",
        "Implemented MVC architecture for clean code organization",
        "Collaborated with frontend teams for seamless integration"
      ]
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-gold-accent" />
          <p className="font-body text-leather-600 mt-3 italic">
            Building innovative solutions across multiple technology stacks
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-8 border-l-2 border-gold-accent/30 last:border-l-0 last:pb-0"
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
                {/* Company and Role */}
                <div className="mb-4">
                  <h3 className="font-display text-2xl font-bold text-leather-800 mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-leather-600">
                    <p className="font-body text-lg font-semibold">{exp.company}</p>
                    <span className="text-gold-accent">•</span>
                    <p className="font-body text-sm italic">{exp.duration}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gold-accent/20 border border-gold-accent/40 rounded-md font-mono text-xs text-leather-800 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-gold-accent mt-1 text-sm">▸</span>
                      <p className="font-body text-leather-900 text-sm leading-relaxed ink-text">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center p-4 bg-gold-accent/10 rounded-lg border border-gold-accent/30">
            <p className="font-display text-3xl font-bold text-leather-800">2.5+</p>
            <p className="font-body text-sm text-leather-600">Years Experience</p>
          </div>
          <div className="text-center p-4 bg-gold-accent/10 rounded-lg border border-gold-accent/30">
            <p className="font-display text-3xl font-bold text-leather-800">5</p>
            <p className="font-body text-sm text-leather-600">Companies</p>
          </div>
          <div className="text-center p-4 bg-gold-accent/10 rounded-lg border border-gold-accent/30">
            <p className="font-display text-3xl font-bold text-leather-800">10+</p>
            <p className="font-body text-sm text-leather-600">Technologies</p>
          </div>
          <div className="text-center p-4 bg-gold-accent/10 rounded-lg border border-gold-accent/30">
            <p className="font-display text-3xl font-bold text-leather-800">15+</p>
            <p className="font-body text-sm text-leather-600">Projects</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
