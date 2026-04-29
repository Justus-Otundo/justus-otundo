import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { getIcon } from '../../utils/icons';
import { featuredProjects, portfolioProjects } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/30 via-dark-900 to-dark-800/30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Things I've Built
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            These are production systems — real users, real data, real uptime requirements
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-accent-500 to-highlight-500 rounded-full mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
            const IconComponent = getIcon(project.icon);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl overflow-hidden transition-all duration-500">
                  {/* Border */}
                  <div className="absolute inset-0 rounded-3xl border border-slate-700/50 group-hover:border-accent-500/30 transition-colors duration-300 pointer-events-none z-10" />

                  {/* Optional hero image — drop a screenshot/mockup at project.image to enable */}
                  {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden bg-dark-700/60">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="relative p-6 sm:p-7 lg:p-8">
                    {/* Top Row */}
                    <div className="flex items-start justify-between gap-3 mb-5 sm:mb-6">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-accent-500/30 to-accent-600/20 border border-accent-500/30 flex items-center justify-center shrink-0" aria-hidden="true">
                          {IconComponent && <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-accent-400" />}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-accent-400">
                            {project.role}
                          </p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <span className={`shrink-0 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full ${
                        project.statusType === 'live'
                          ? 'bg-success-500/20 text-success-400 border border-success-500/30'
                          : 'bg-highlight-500/20 text-highlight-400 border border-highlight-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-base sm:text-[17px] lg:text-lg leading-relaxed mb-5 sm:mb-6">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="flex flex-wrap gap-2 mb-5 sm:mb-6" aria-label="Key features">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-dark-700/80 border border-slate-600/50 rounded-xl"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Store Badges — only render if URLs exist */}
                    {(project.playStoreUrl || project.appStoreUrl) && (
                      <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                        {project.playStoreUrl && (
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-dark-700 border border-slate-600/60 rounded-lg hover:bg-dark-600 hover:border-accent-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
                            aria-label={`Get ${project.title} on Google Play (opens in new tab)`}
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.398 12l2.3-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                            </svg>
                            <span>Google Play</span>
                          </a>
                        )}
                        {project.appStoreUrl && (
                          <a
                            href={project.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-dark-700 border border-slate-600/60 rounded-lg hover:bg-dark-600 hover:border-accent-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
                            aria-label={`Get ${project.title} on the App Store (opens in new tab)`}
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <span>App Store</span>
                          </a>
                        )}
                      </div>
                    )}

                    {/* Bottom Status */}
                    <div className="pt-6 border-t border-slate-700/50 flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          project.statusType === 'live' ? 'bg-success-400' : 'bg-highlight-400'
                        }`} aria-hidden="true" />
                        <span className="text-sm text-slate-400">
                          {project.statusType === 'live' ? 'Live in Production' : 'In Research & Development'}
                        </span>
                      </div>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-md"
                          aria-label={`Visit ${project.title} live site (opens in new tab)`}
                        >
                          <span>Visit site</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Other Work */}
        {portfolioProjects.length > 0 && (
          <>
            <motion.div
              className="text-center mt-24 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Other Work
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Additional websites and projects I've designed and built
              </p>
              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-accent-500 to-highlight-500 rounded-full mx-auto" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {portfolioProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group"
                >
                  <div className="relative h-full bg-dark-800/60 rounded-2xl border border-slate-700/50 group-hover:border-accent-500/30 transition-colors duration-300 p-6 flex flex-col">
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <h4 className="text-lg font-bold text-white leading-tight">
                        {project.title}
                      </h4>
                      <span className="shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-dark-700/80 text-slate-300 border border-slate-600/50">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">
                        {project.category}
                      </span>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-md"
                          aria-label={`Visit ${project.title} live site (opens in new tab)`}
                        >
                          <span>Visit</span>
                          <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-700/50 hover:bg-dark-600/50 border border-slate-600 hover:border-accent-500/50 text-white font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
          >
            <span>Want results like these? Let's talk.</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
