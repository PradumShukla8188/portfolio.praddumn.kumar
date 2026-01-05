'use client';

import { motion } from 'framer-motion';

export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Angular", level: 85 },
        { name: "TypeScript", level: 87 },
        { name: "JavaScript", level: 92 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 88 },
        { name: "Material UI", level: 85 }
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "NestJS", level: 85 },
        { name: "Express.js", level: 92 },
        // { name: "SprintBoot", level: 80 },
        // { name: "Laravel", level: 78 },
        { name: "REST API", level: 90 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      category: "Database Management",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 87 },
        { name: "MS Access", level: 75 }
      ]
    },
    {
      category: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript/TypeScript", level: 92 },
        { name: "C/C++", level: 75 },
        { name: "Data Structures", level: 78 }
      ]
    },
    {
      category: "Tools & Software",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "MS Office Suite", level: 88 },
        { name: "Photoshop", level: 75 },
        { name: "CorelDRAW", level: 70 },
        { name: "Tally ERP 9", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Master Diploma in Computer Applications",
      duration: "1 Year",
      year: "2018-2019"
    },
    {
      title: "Advance Diploma in Computer Applications",
      duration: "1 Year",
      year: "2017-2018"
    },
    {
      title: "Course on Computer Concepts",
      duration: "3 Months",
      year: "2019"
    },
    {
      title: "Tally ERP 9",
      duration: "6 Months",
      year: "2019-2020"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
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
            Technical Skills
          </h2>
          <div className="h-1 w-24 bg-gold-accent" />
          <p className="font-body text-leather-600 mt-3 italic">
            Comprehensive expertise across modern tech stack
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-6 mb-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-parchment-200/50 rounded-lg p-5 border border-leather-200"
            >
              <h3 className="font-display text-xl font-bold text-leather-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-body text-sm text-leather-900 font-medium">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-leather-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-parchment-300 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-gold-accent to-leather-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div variants={itemVariants}>
          <h3 className="font-display text-2xl font-bold text-leather-800 mb-4 flex items-center gap-2">
            <span className="text-gold-accent">◆</span>
            Additional Qualifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gold-accent/10 rounded-lg border border-gold-accent/30"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 4px 12px rgba(212, 175, 55, 0.2)'
                }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-display font-semibold text-leather-800 mb-1">
                  {cert.title}
                </h4>
                <div className="flex items-center gap-2 text-sm text-leather-600 font-body">
                  <span>{cert.duration}</span>
                  <span className="text-gold-accent">•</span>
                  <span className="italic">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-8 p-6 bg-leather-700 text-parchment-100 rounded-lg"
        >
          <p className="font-body text-center text-sm">
            <span className="font-display font-bold text-gold-accent">Full Stack Expertise</span>
            <span className="mx-2">•</span>
            Proficient in building end-to-end solutions from database design to responsive UI
            <span className="mx-2">•</span>
            Constantly learning and adapting to emerging technologies
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
