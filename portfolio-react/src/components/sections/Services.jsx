import { motion } from 'framer-motion';
import { getIcon } from '../../utils/icons';
import { services, builderJourney } from '../../data/services';

const colorVariants = [
  { bg: 'from-accent-500/20 to-accent-600/10', border: 'border-accent-500/30' },
  { bg: 'from-success-500/20 to-success-600/10', border: 'border-success-500/30' },
  { bg: 'from-highlight-500/20 to-highlight-600/10', border: 'border-highlight-500/30' },
  { bg: 'from-accent-500/20 to-highlight-500/10', border: 'border-accent-500/30' },
  { bg: 'from-highlight-500/20 to-accent-500/10', border: 'border-highlight-500/30' },
  { bg: 'from-success-500/20 to-highlight-500/10', border: 'border-success-500/30' },
];

const stepStyles = [
  { card: 'bg-amber-500', shadow: 'shadow-amber-500/30' },
  { card: 'bg-sky-500', shadow: 'shadow-sky-500/30' },
  { card: 'bg-rose-500', shadow: 'shadow-rose-500/30' },
  { card: 'bg-emerald-500', shadow: 'shadow-emerald-500/30' },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I Can Do For You
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Whether you need an app built from scratch or an existing system fixed, here's what I bring to the table
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-accent-500 to-highlight-500 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            const colors = colorVariants[index % colorVariants.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-dark-800/90 to-dark-900/90 rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-colors duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center mb-6`} aria-hidden="true">
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 text-xs font-semibold text-slate-300 bg-dark-700/80 border border-slate-600/50 rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* How I Work Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              How I Work
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Every project follows the same four steps. No surprises.
            </p>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-accent-500 to-highlight-500 rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20 pt-14">
            {builderJourney.map((phase, index) => {
              const StepIcon = getIcon(phase.icon);
              const styles = stepStyles[index % stepStyles.length];

              return (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  className="relative"
                >
                  {/* Avatar circle (icon) — overlaps top of card */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 w-24 h-24 rounded-full bg-white p-1.5 shadow-xl">
                    <div className={`w-full h-full rounded-full ${styles.card} flex items-center justify-center`}>
                      {StepIcon && <StepIcon className="w-10 h-10 text-white" aria-hidden="true" />}
                    </div>
                  </div>

                  {/* Speech-bubble card body */}
                  <div className={`relative ${styles.card} rounded-3xl pt-16 px-6 pb-10 shadow-2xl ${styles.shadow}`}>
                    <h4 className="text-xl font-bold text-white text-center mb-3">
                      {phase.title}
                    </h4>
                    <p className="text-sm text-white/90 text-center leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Triangle tail */}
                    <div
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 ${styles.card} rotate-45`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Numbered badge — overlaps bottom of card */}
                  <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full ${styles.card} border-4 border-white shadow-xl flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{phase.step}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-dark-800/80 to-dark-900/80 rounded-2xl border border-slate-700/50">
            <p className="text-slate-300 text-lg">
              Ready to bring your idea to life?
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent-500/25 focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
