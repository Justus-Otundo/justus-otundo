import { motion } from 'framer-motion';
import {
  TruckIcon,
  DevicePhoneMobileIcon,
  RectangleStackIcon,
  BoltIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { featuredProjects } from '../../data/projects';

const iconMap = {
  TruckIcon: TruckIcon,
  DevicePhoneMobileIcon: DevicePhoneMobileIcon,
  RectangleStackIcon: RectangleStackIcon,
  BoltIcon: BoltIcon,
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/30 via-dark-900 to-dark-800/30" />

      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-accent-400 bg-accent-500/10 border border-accent-500/20 rounded-full">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Production-ready systems that drive business growth and digital transformation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
            const IconComponent = iconMap[project.icon];
            const isInnovation = project.isInnovation;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div
                  className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                    isInnovation
                      ? 'bg-gradient-to-br from-highlight-500/10 via-dark-800 to-dark-900'
                      : 'bg-gradient-to-br from-dark-800 to-dark-900'
                  }`}
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-3xl border border-slate-700/50 group-hover:border-transparent transition-all duration-500" />
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                    background: isInnovation
                      ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.3), transparent, rgba(14, 165, 233, 0.2))'
                      : 'linear-gradient(135deg, rgba(14, 165, 233, 0.3), transparent, rgba(16, 185, 129, 0.2))',
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                  }} />

                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Top Row - Icon, Title, Status */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                          isInnovation
                            ? 'bg-gradient-to-br from-highlight-500/30 to-highlight-600/20 border border-highlight-500/30'
                            : 'bg-gradient-to-br from-accent-500/30 to-accent-600/20 border border-accent-500/30'
                        }`}>
                          {IconComponent && (
                            <IconComponent className={`w-7 h-7 ${
                              isInnovation ? 'text-highlight-400' : 'text-accent-400'
                            }`} />
                          )}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                            {project.title}
                          </h3>
                          <p className={`text-sm font-semibold ${isInnovation ? 'text-highlight-400' : 'text-accent-400'}`}>
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
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 text-sm font-medium text-white bg-dark-700/80 border border-slate-600/50 rounded-xl hover:border-accent-500/50 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-6 border-t border-slate-700/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          project.statusType === 'live' ? 'bg-success-400 animate-pulse' : 'bg-highlight-400'
                        }`} />
                        <span className="text-sm text-slate-400">
                          {project.statusType === 'live' ? 'Live in Production' : 'In Research & Development'}
                        </span>
                      </div>
                      <motion.button
                        className="flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        View Details
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 ${
                    isInnovation ? 'bg-highlight-500/20' : 'bg-accent-500/20'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-700/50 hover:bg-dark-600/50 border border-slate-600 hover:border-accent-500/50 text-white font-semibold rounded-2xl transition-all duration-300"
          >
            <span>Interested in working together?</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
