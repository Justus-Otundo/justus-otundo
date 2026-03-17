import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { getIcon } from '../../utils/icons';
import { featuredProjects } from '../../data/projects';

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
                  <div className="absolute inset-0 rounded-3xl border border-slate-700/50 group-hover:border-accent-500/30 transition-colors duration-300" />

                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Top Row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500/30 to-accent-600/20 border border-accent-500/30 flex items-center justify-center" aria-hidden="true">
                          {IconComponent && <IconComponent className="w-7 h-7 text-accent-400" />}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {project.title}
                          </h3>
                          <p className="text-sm font-semibold text-accent-400">
                            {project.role}
                          </p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full ${
                        project.statusType === 'live'
                          ? 'bg-success-500/20 text-success-400 border border-success-500/30'
                          : 'bg-highlight-500/20 text-highlight-400 border border-highlight-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="flex flex-wrap gap-2 mb-6" aria-label="Key features">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 text-sm font-medium text-white bg-dark-700/80 border border-slate-600/50 rounded-xl"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Status */}
                    <div className="pt-6 border-t border-slate-700/50 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        project.statusType === 'live' ? 'bg-success-400' : 'bg-highlight-400'
                      }`} aria-hidden="true" />
                      <span className="text-sm text-slate-400">
                        {project.statusType === 'live' ? 'Live in Production' : 'In Research & Development'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
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
