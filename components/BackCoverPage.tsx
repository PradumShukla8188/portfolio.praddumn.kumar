'use client';

import { motion } from 'framer-motion';

export default function BackCoverPage() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      label: "Email",
      value: "pradumshukla1133@gmail.com",
      link: "mailto:pradumshukla1133@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 8188898587",
      link: "tel:+918188898587"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      label: "Location",
      value: "Yamunanagar, Haryana, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/pradum-shukla-87590724b"
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/PradumShukla8188/"
    },
    {
      name: "Portfolio",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      url: "https://portfolio.praddumn.kumar.vercel.app/"
    }
  ];

  return (
    <div className="paper-texture h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-gold-accent opacity-40" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-gold-accent opacity-40" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-gold-accent opacity-40" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-gold-accent opacity-40" />

      <motion.div
        className="text-center space-y-8 max-w-3xl z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold gold-foil mb-4">
            Thank You
          </h2>
          <p className="font-body text-lg text-leather-700 italic">
            For taking the time to review my professional journey
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* Contact Information */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="font-display text-2xl font-semibold text-leather-800 mb-6">
            Let's Connect
          </h3>

          <div className="space-y-4">
            {contactMethods.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link || '#'}
                className={`flex items-center justify-center gap-3 p-4 bg-parchment-200/50 rounded-lg border border-leather-200 ${contact.link ? 'hover:border-gold-accent hover:bg-gold-accent/10 cursor-pointer' : 'cursor-default'
                  } transition-all duration-300`}
                whileHover={contact.link ? { scale: 1.02 } : {}}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <div className="text-gold-accent">{contact.icon}</div>
                <div className="text-left">
                  <p className="font-body text-sm text-leather-600">{contact.label}</p>
                  <p className="font-body text-leather-900 font-semibold">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <h3 className="font-display text-xl font-semibold text-leather-800">
            Find Me Online
          </h3>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="p-3 bg-leather-700 text-parchment-100 rounded-full hover:bg-gold-accent hover:text-leather-900 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="inline-block vintage-stamp mx-auto"
          initial={{ opacity: 0, rotate: 5 }}
          animate={{ opacity: 1, rotate: -2 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <p className="font-display text-leather-700 font-semibold text-sm tracking-widest">
            READY TO COLLABORATE
          </p>
        </motion.div>

        {/* Final Message */}
        <motion.p
          className="text-leather-600 text-sm font-body italic max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          I'm always excited to discuss new opportunities, collaborate on interesting projects,
          or simply connect with fellow developers. Feel free to reach out!
        </motion.p>

        {/* Copyright */}
        <motion.p
          className="text-leather-500 text-xs font-body mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        >
          © {new Date().getFullYear()} Praddumn Kumar. All rights reserved.
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
