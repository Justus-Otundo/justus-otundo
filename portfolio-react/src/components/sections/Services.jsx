import { motion } from 'framer-motion';
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  CogIcon,
  PaintBrushIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { services } from '../../data/services';

const iconMap = {
  GlobeAltIcon: GlobeAltIcon,
  DevicePhoneMobileIcon: DevicePhoneMobileIcon,
  ChartBarIcon: ChartBarIcon,
  CogIcon: CogIcon,
  PaintBrushIcon: PaintBrushIcon,
  ArrowTrendingUpIcon: ArrowTrendingUpIcon,
};

const colorVariants = [
  { icon: 'from-accent-500 to-accent-600', bg: 'from-accent-500/20 to-accent-600/10', border: 'border-accent-500/30' },
  { icon: 'from-success-500 to-success-600', bg: 'from-success-500/20 to-success-600/10', border: 'border-success-500/30' },
  { icon: 'from-highlight-500 to-highlight-600', bg: 'from-highlight-500/20 to-highlight-600/10', border: 'border-highlight-500/30' },
  { icon: 'from-purple-500 to-purple-600', bg: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/30' },
  { icon: 'from-pink-500 to-pink-600', bg: 'from-pink-500/20 to-pink-600/10', border: 'border-pink-500/30' },
  { icon: 'from-cyan-500 to-cyan-600', bg: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/30' },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-highlight-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-accent-400 bg-accent-500/10 border border-accent-500/20 rounded-full">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to drive your business forward
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
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
                <div className="relative h-full bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-500/5 to-transparent" />

                  {/* Icon */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
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

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-dark-800/80 to-dark-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            <p className="text-slate-300 text-lg">
              Need a custom solution?
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent-500/25"
            >
              Let's Discuss
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
