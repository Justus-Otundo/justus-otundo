import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { profile, contact, social, stats, heroTechStack } from '../../data/profile';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-highlight-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Profile Card — first on mobile, right on desktop */}
          <motion.div
            className="order-1 lg:order-2 w-full max-w-sm lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-dark-800/60 border border-slate-700/50 rounded-2xl p-4 sm:p-5 max-w-sm mx-auto lg:max-w-md">
              {/* Image */}
              <div className="relative mb-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={profile.avatar}
                    alt={`${profile.name} - ${profile.title}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-dark-900/80 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-slate-700/50">
                    <p className="text-white font-semibold text-sm">{profile.name}</p>
                    <p className="text-accent-400 text-xs">{profile.title}</p>
                  </div>
                </div>
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2">
                {heroTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-dark-700/80 border border-slate-600/40 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Motto */}
              <div className="mt-4 pt-4 border-t border-slate-700/40 text-center">
                <p className="text-sm text-accent-400 font-medium italic">
                  "Nyenyekea Mungu Akutumie"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content — second on mobile, left on desktop */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-accent-500/30 bg-accent-500/10">
              <span className="w-2 h-2 rounded-full bg-accent-400" aria-hidden="true" />
              <span className="text-xs font-medium text-accent-400 uppercase tracking-wider">Open to work</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-4 leading-[1.1]">
              I build software{' '}
              <span className="text-gradient">businesses run on.</span>
            </h1>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {profile.bio}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start divide-x divide-slate-700 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="px-3 sm:px-5 md:px-6 first:pl-0 last:pr-0 text-center lg:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="group w-full sm:w-auto px-6 py-3 bg-accent-500 hover:bg-accent-400 text-white font-semibold rounded-xl cursor-pointer transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-dark-900"
                role="button"
                tabIndex={0}
              >
                Get in Touch
                <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="w-full sm:w-auto px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-200 font-semibold rounded-xl cursor-pointer transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-dark-900"
                role="button"
                tabIndex={0}
              >
                View My Work
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
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
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-700/80 text-slate-400 hover:text-white hover:border-accent-500/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  aria-label={item.label}
                >
                  {item.icon === 'linkedin' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {item.icon === 'github' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {item.icon === 'email' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
