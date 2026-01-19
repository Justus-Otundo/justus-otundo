import { motion } from 'framer-motion';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowDownTrayIcon,
  AcademicCapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { profile, contact, social, skillBars, certifications } from '../../data/profile';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-accent-400 bg-accent-500/10 border border-accent-500/20 rounded-full">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Know Me <span className="text-gradient">Better</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Technology leader passionate about building products that make a difference
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Overview */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Bio Card */}
            <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0">
                  <UserIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
                  <p className="text-accent-400 font-semibold">{profile.title} @ {profile.company}</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {profile.aboutBio} With a strong foundation in mobile and web development, I specialize in creating
                scalable solutions that drive business growth. My journey from developer to technology leader
                has equipped me with both technical expertise and strategic vision.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent-500/25"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  Download Resume
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 border border-slate-600 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-highlight-500/20 flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 text-highlight-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Technical Skills</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {skillBars.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-sm font-semibold text-accent-400">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-2xl hover:bg-dark-600/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/30 transition-colors">
                    <EnvelopeIcon className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                    <p className="text-slate-200 font-medium">{contact.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${contact.phoneLink}`}
                  className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-2xl hover:bg-dark-600/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-success-500/20 flex items-center justify-center group-hover:bg-success-500/30 transition-colors">
                    <PhoneIcon className="w-6 h-6 text-success-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Phone</p>
                    <p className="text-slate-200 font-medium">{contact.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-highlight-500/20 flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-highlight-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                    <p className="text-slate-200 font-medium">{contact.locationFull}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <p className="text-sm text-slate-500 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-dark-700 border border-slate-600 text-slate-400 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/10 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-dark-700 border border-slate-600 text-slate-400 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/10 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-dark-700 border border-slate-600 text-slate-400 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/10 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <AcademicCapIcon className="w-5 h-5 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    className="flex items-center gap-3 p-3 bg-dark-700/30 rounded-xl"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-400" />
                    <span className="text-slate-300 text-sm font-medium">{cert}</span>
                  </motion.div>
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
