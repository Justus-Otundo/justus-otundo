import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRightIcon, ArrowDownIcon, PlayIcon } from '@heroicons/react/24/outline';
import { profile, contact, social, stats, heroTechStack } from '../../data/profile';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />

        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-accent-500/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-highlight-500/15 rounded-full blur-[120px] animate-pulse animate-delay-200" />
        </div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Radial gradient from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,22,40,0.8)_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content - 7 columns */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-highlight-500/20 to-highlight-500/5 border border-highlight-500/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight-400"></span>
              </span>
              <span className="text-sm font-medium text-highlight-400">Open to Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-accent-400 font-semibold text-lg mb-3 tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                {profile.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="text-2xl sm:text-3xl font-semibold text-gradient">
                  {profile.title}
                </span>
                <span className="hidden sm:block w-2 h-2 rounded-full bg-highlight-500" />
                <span className="text-xl text-slate-400 font-medium">
                  {profile.company}
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {profile.bio}
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-4xl sm:text-5xl font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-2xl cursor-pointer transition-all duration-300 shadow-xl shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <span>Let's Talk</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="group w-full sm:w-auto px-8 py-4 bg-dark-700/50 hover:bg-dark-600/50 border-2 border-slate-600 hover:border-highlight-500/50 text-white font-semibold rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-3"
              >
                <PlayIcon className="w-5 h-5" />
                <span>View My Work</span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-sm text-slate-500 mr-2">Follow me:</span>
              {[
                { href: social.linkedin, icon: 'linkedin', label: 'LinkedIn' },
                { href: social.github, icon: 'github', label: 'GitHub' },
                { href: `mailto:${contact.email}`, icon: 'email', label: 'Email' },
              ].map((item) => (
                <a
                  key={item.icon}
                  href={item.href}
                  target={item.icon !== 'email' ? '_blank' : undefined}
                  rel={item.icon !== 'email' ? 'noopener noreferrer' : undefined}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-dark-700/50 border border-slate-700 text-slate-400 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/10 transition-all duration-300"
                  aria-label={item.label}
                >
                  {item.icon === 'linkedin' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {item.icon === 'github' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {item.icon === 'email' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Card - 5 columns */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/20 via-transparent to-highlight-500/20 rounded-[3rem] blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-500/50 to-highlight-500/50 rounded-[2.5rem] opacity-20" />

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl rounded-[2rem] p-6 border border-slate-700/50 shadow-2xl">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-2xl overflow-hidden border-4 border-dark-600 shadow-xl">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Status badge on image */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-white whitespace-nowrap">Nyenyekea Mungu Akutumie</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider text-center font-semibold">Tech Stack</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {heroTechStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-medium text-white bg-dark-700/80 border border-slate-600/50 rounded-xl hover:border-accent-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick contact */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-center gap-2 text-slate-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Floating achievement badge */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-highlight-500 to-highlight-600 rounded-2xl shadow-xl shadow-highlight-500/30"
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <span className="text-sm font-bold text-dark-900">CTO Track</span>
              </motion.div>

              {/* Floating years badge */}
              <motion.div
                className="absolute -bottom-2 -left-4 px-4 py-2 bg-dark-800 border border-accent-500/50 rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <span className="text-sm font-bold text-accent-400">2+ Years</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className="text-xs text-slate-500 uppercase tracking-wider">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-accent-500 flex items-start justify-center p-2 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-slate-500 group-hover:bg-accent-400 rounded-full transition-colors"
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
