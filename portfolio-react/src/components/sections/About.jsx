import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowDownTrayIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { profile, contact, social, certifications, education } from '../../data/profile';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The short version of how I got here
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-accent-500 to-highlight-500 rounded-full mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Profile Overview */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Bio Card */}
            <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 rounded-3xl p-5 sm:p-7 lg:p-8 border border-slate-700/50">
              <div className="flex items-start gap-4 sm:gap-5 mb-6">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-accent-500/30 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">{profile.name}</h3>
                  <p className="text-accent-400 font-semibold text-xs sm:text-sm">{profile.title} @ {profile.company}</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">{contact.locationFull}</p>
                </div>
              </div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                {profile.aboutBio}
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
                My journey from developer to technology leader means I understand both sides — the code and the business.
                When I take on a project, I'm thinking about what happens after launch, not just what gets it out the door.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                Outside of work, I'm exploring EV technology for fleet integration, mentoring junior developers,
                and always looking for the next hard problem to solve.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-accent-500/25 focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  View Resume
                </a>
                <a
                  href={profile.coverLetter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 border border-slate-600 text-white font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  Cover Letter
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 rounded-3xl p-5 sm:p-7 lg:p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <AcademicCapIcon className="w-6 h-6 text-highlight-400" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={edu.degree} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-highlight-500/15 border border-highlight-500/20 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <AcademicCapIcon className="w-5 h-5 text-highlight-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{edu.degree}</h4>
                      <p className="text-accent-400 text-sm">{edu.institution}</p>
                      <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                      {edu.skills && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {edu.skills.map((skill) => (
                            <span key={skill} className="px-2 py-0.5 text-xs font-medium text-slate-400 bg-dark-700 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact & Info */}
          <motion.div
            className="space-y-8 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 rounded-3xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 p-3 bg-dark-700/50 rounded-xl hover:bg-dark-600/50 transition-colors">
                  <EnvelopeIcon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <div>
                    <p className="text-slate-200 text-sm font-medium">{contact.email}</p>
                  </div>
                </a>
                <a href={`tel:${contact.phoneLink}`} className="flex items-center gap-3 p-3 bg-dark-700/50 rounded-xl hover:bg-dark-600/50 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-success-400 flex-shrink-0" />
                  <p className="text-slate-200 text-sm font-medium">{contact.phone}</p>
                </a>
                <div className="flex items-center gap-3 p-3 bg-dark-700/50 rounded-xl">
                  <MapPinIcon className="w-5 h-5 text-highlight-400 flex-shrink-0" />
                  <p className="text-slate-200 text-sm font-medium">{contact.locationFull}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-4 pt-4 border-t border-slate-700/50 flex gap-3">
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-700 border border-slate-600 text-slate-400 hover:text-white hover:border-accent-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500">
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-700 border border-slate-600 text-slate-400 hover:text-white hover:border-accent-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500">
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 rounded-3xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <AcademicCapIcon className="w-5 h-5 text-accent-400" aria-hidden="true" />
                <h3 className="text-lg font-bold text-white">Certifications</h3>
                <span className="text-xs text-slate-500 ml-auto">{certifications.length} earned</span>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-1 scrollbar-thin">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start gap-2.5 p-2.5 bg-dark-700/30 rounded-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-1.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <span className="text-slate-300 text-xs font-medium block leading-tight">{cert.name}</span>
                      <span className="text-slate-500 text-xs">{cert.issuer}{cert.year ? ` · ${cert.year}` : ''}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
