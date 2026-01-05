'use client';

import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const projects = [
    {
      name: "Loan Management System (LMS)",
      role: "Angular Developer",
      technologies: ["Angular", "PHP", "Laravel", "TypeScript"],
      description: "Comprehensive loan management platform with user authentication, loan application processing, and administrative dashboard for tracking and managing loans.",
      features: [
        "User registration and authentication system",
        "Loan application and approval workflow",
        "Admin panel for loan management",
        "Real-time status tracking and notifications"
      ],
      link: "View Project →"
    },
    {
      name: "Sales CRM",
      role: "Node & Angular Developer",
      technologies: ["Node.js", "Angular", "Express", "MongoDB"],
      description: "Full-featured Customer Relationship Management system for sales teams to track leads, manage customer interactions, and analyze sales performance.",
      features: [
        "Lead management and tracking",
        "Customer interaction history",
        "Sales pipeline visualization",
        "Performance analytics and reporting"
      ],
      link: "View Project →"
    },
    {
      name: "WordPress React Theme",
      role: "React Developer",
      technologies: ["WordPress", "React", "PHP", "REST API"],
      description: "Modern WordPress theme built with React for the frontend, providing a seamless single-page application experience while maintaining WordPress CMS capabilities.",
      features: [
        "Headless WordPress implementation",
        "Dynamic content rendering with React",
        "Custom post types and taxonomies",
        "Responsive design and SEO optimization"
      ],
      link: "View Project →"
    },
    {
      name: "Seamed",
      role: "Angular & Node Developer",
      technologies: ["Angular", "Node.js", "MongoDB", "Express"],
      description: "E-commerce platform connecting fashion designers with customers, featuring product catalogs, shopping cart, and secure payment integration.",
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart and checkout system",
        "User authentication and profiles",
        "Order management and tracking"
      ],
      link: "View Project →"
    },
    {
      name: "Hockey MVP",
      role: "Node, React Developer",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      description: "Sports analytics platform for tracking hockey player performance, statistics, and MVP predictions based on comprehensive data analysis.",
      features: [
        "Player statistics tracking",
        "Performance analytics dashboard",
        "MVP prediction algorithms",
        "Team comparison and insights"
      ],
      link: "View Project →"
    },
    {
      name: "Rise Vision",
      role: "NestJS / MERN Stack Developer",
      technologies: ["Next.js", "React", "Node.js", "NestJS", "MongoDB", "Express"],
      description:
        "A scalable web platform built using the MERN stack and NestJS, focused on high-performance rendering, modular backend architecture, and modern UI development.",
      features: [
        "Server-side rendering (SSR) and static site generation (SSG)",
        "Modular and scalable backend APIs using NestJS",
        "MongoDB database design and optimization",
        "Authentication, authorization, and role-based access control"
      ],
      link: "View Project →"
    },
    {
      name: "Offtake",
      role: "Next.js Developer (MERN Stack)",
      technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "TypeScript"],
      description:
        "A modern, responsive web application focused on performance, security, and user experience, built using Next.js and the MERN stack.",
      features: [
        "Responsive UI with optimized performance",
        "Secure authentication and authorization system",
        "Backend API integration using Node.js and Express",
        "Performance optimization and SEO best practices"
      ],
      link: "View Project →"
    },
    {
      name: "Build Quest",
      role: "Backend Developer (NestJS)",
      technologies: ["NestJS", "PostgreSQL", "TypeScript", "REST API", "Next.js"],
      description:
        "A backend-focused platform developed using NestJS and PostgreSQL, emphasizing clean architecture, scalable APIs, and robust database design.",
      features: [
        "RESTful API development with NestJS",
        "PostgreSQL schema design and query optimization",
        "API documentation and validation",
        "Scalable architecture with best coding practices"
      ],
      link: "View Project →"
    }


  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
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
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gold-accent" />
          <p className="font-body text-leather-600 mt-3 italic">
            Showcasing technical expertise through impactful solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-parchment-200/50 rounded-lg p-6 border border-leather-200 shadow-sm"
              whileHover={{
                scale: 1.01,
                boxShadow: '0 8px 16px rgba(125, 96, 73, 0.15)',
                borderColor: 'rgba(212, 175, 55, 0.4)'
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-2xl font-bold text-leather-800">
                    {project.name}
                  </h3>
                  <motion.a
                    href="#"
                    className="text-gold-accent hover:text-leather-800 transition-colors text-sm font-body font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.link}
                  </motion.a>
                </div>
                <p className="font-body text-leather-600 italic text-sm mb-3">
                  {project.role}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gold-accent/20 border border-gold-accent/40 rounded-md font-mono text-xs text-leather-800 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-leather-900 text-sm leading-relaxed mb-4 ink-text">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2">
                <p className="font-display text-sm font-semibold text-leather-700 mb-2">
                  Key Features:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-gold-accent text-xs mt-1">✓</span>
                      <p className="font-body text-leather-800 text-xs leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Summary */}
        <motion.div
          variants={itemVariants}
          className="mt-8 p-6 bg-gold-accent/10 rounded-lg border border-gold-accent/30"
        >
          <p className="font-body text-leather-800 text-center">
            <span className="font-display font-bold text-lg">15+ Projects</span>
            <span className="mx-2">•</span>
            Successfully delivered across various domains including E-commerce, CRM, Analytics, and Enterprise Solutions
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
